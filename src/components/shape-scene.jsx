// shape-scene.jsx
"use client"
import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshTransmissionMaterial, Environment, OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { useSpring, animated } from "@react-spring/three"

const AnimatedMesh = animated("mesh")

// Bentuk 1: Torus Knot yang lebih kompleks (seperti di gambar)
function TwistedKnot({ position, color, speed = 1, distort = 0.4, scale = 1 }) {
  const meshRef = useRef()
  const geometry = useMemo(() => {
    // Merubah parameter untuk mendapatkan bentuk yang lebih kompleks
    return new THREE.TorusKnotGeometry(1, 0.3, 100, 16, 3, 7) // Merubah p,q untuk bentuk yang lebih menarik
  }, [])

  const { rotation } = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [Math.PI * 2, Math.PI * 2, 0] },
    config: { duration: 20000 / speed },
    loop: true,
  })

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <AnimatedMesh ref={meshRef} position={position} rotation={rotation} scale={scale} geometry={geometry}>
      <MeshTransmissionMaterial
        backside
        samples={6}
        thickness={1}
        chromaticAberration={0.2}
        transmission={1}
        roughness={0.1}
        metalness={0.1}
        distortion={distort}
        distortionScale={1}
        temporalDistortion={0.1}
        color={color}
        resolution={256}
      />
    </AnimatedMesh>
  )
}

// Bentuk baru: Struktur Molekul-like (lebih mirip dengan gambar yang Anda tunjukkan)
function MoleculeStructure({ position, color, speed = 1, scale = 1 }) {
  const groupRef = useRef()

  // Membuat bentuk molekul sederhana dengan bola dan silinder
  const createMolecule = useMemo(() => {
    const group = new THREE.Group()

    // Atom pusat
    const centerGeometry = new THREE.SphereGeometry(0.5, 16, 16)
    const centerMesh = new THREE.Mesh(centerGeometry)
    group.add(centerMesh)

    // Membuat atom dan koneksi
    const createAtom = (pos, size = 0.3) => {
      const atomGeometry = new THREE.SphereGeometry(size, 16, 16)
      const atom = new THREE.Mesh(atomGeometry)
      atom.position.copy(pos)

      // Membuat silinder koneksi
      const direction = new THREE.Vector3().subVectors(pos, new THREE.Vector3(0, 0, 0)).normalize()
      const length = pos.length() * 0.8

      const cylinderGeometry = new THREE.CylinderGeometry(0.1, 0.1, length, 8)
      const cylinder = new THREE.Mesh(cylinderGeometry)

      // Rotasi silinder untuk mengarah ke atom
      cylinder.position.copy(direction.clone().multiplyScalar(length / 2))
      cylinder.lookAt(pos)
      cylinder.rotateX(Math.PI / 2)

      group.add(atom)
      group.add(cylinder)
    }

    // Membuat beberapa atom dengan posisi acak
    createAtom(new THREE.Vector3(1, 0, 0))
    createAtom(new THREE.Vector3(-0.8, 0.6, 0))
    createAtom(new THREE.Vector3(0, 0.9, -0.5))
    createAtom(new THREE.Vector3(0.5, -0.7, 0.6))
    createAtom(new THREE.Vector3(-0.5, -0.5, -0.7))

    return group
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed
    }
  })

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <primitive object={createMolecule}>
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={1}
          chromaticAberration={0.2}
          transmission={1}
          roughness={0.1}
          metalness={0.1}
          distortion={0.3}
          distortionScale={1}
          temporalDistortion={0.1}
          color={color}
          resolution={256}
        />
      </primitive>
    </group>
  )
}

export function ShapeScene() {
  const groupRef = useRef()

  return (
    <>
      <Environment preset="studio" />
      <group ref={groupRef}>
        <TwistedKnot position={[-1.5, 0, 0]} color="#ff48a0" speed={1.2} scale={0.8} />
        <MoleculeStructure position={[1.5, 0, 0]} color="#50a0ff" speed={1.3} scale={1} />
      </group>
      {/* OrbitControls untuk interaksi dengan mouse */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        rotateSpeed={1.5}
        dampingFactor={0.1}
        enableDamping
      />
    </>
  )
}

