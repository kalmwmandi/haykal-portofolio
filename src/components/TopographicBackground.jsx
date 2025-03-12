"use client"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

const TopographicBackground = ({ className = "" }) => {
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        })
      }
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        style={{ 
          width: "150%", 
          height: "150%",
          top: "-25%",
          left: "-25%" 
        }}
        animate={{
          x: [0, -dimensions.width * 0.2],
          y: [0, -dimensions.height * 0.2],
        }}
        transition={{
          duration: 60,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-10"
          preserveAspectRatio="xMidYMid slice"
        >
          <g fill="none" stroke="white" strokeWidth="1.5">
            {/* Jalur gelombang abstrak baru */}
            <path d="M0,120 C150,80 250,160 400,120 C550,80 650,160 800,120 C950,80 1050,160 1200,120" />
            <path d="M0,200 C100,250 300,150 450,200 C600,250 750,150 900,200 C1050,250 1150,150 1300,200" />
            <path d="M0,280 C200,320 350,240 500,280 C650,320 800,240 950,280 C1100,320 1250,240 1400,280" />
            <path d="M0,360 C120,400 280,320 420,360 C560,400 700,320 840,360 C980,400 1120,320 1260,360" />
            <path d="M0,440 C180,480 320,400 460,440 C600,480 740,400 880,440 C1020,480 1160,400 1300,440" />
            <path d="M0,520 C140,560 300,480 440,520 C580,560 720,480 860,520 C1000,560 1140,480 1280,520" />
            <path d="M0,600 C200,640 360,560 500,600 C640,640 780,560 920,600 C1060,640 1200,560 1340,600" />
            <path d="M0,680 C160,720 340,640 480,680 C620,720 760,640 900,680 C1040,720 1180,640 1320,680" />
            <path d="M0,760 C220,800 380,720 520,760 C660,800 800,720 940,760 C1080,800 1220,720 1360,760" />
            <path d="M0,840 C180,880 360,800 500,840 C640,880 780,800 920,840 C1060,880 1240,800 1400,840" />
            {/* Loop tertutup untuk variasi */}
            <path d="M200,300 C300,250 400,350 500,300 C600,250 700,350 600,400 C500,450 400,350 300,400 C200,450 100,350 200,300" />
            <path d="M600,700 C700,650 800,750 900,700 C1000,650 1100,750 1000,800 C900,850 800,750 700,800 C600,850 500,750 600,700" />
          </g>
        </svg>
      </motion.div>
    </div>
  )
}

export default TopographicBackground