"use client"

import { useState } from "react"
import AnimatedSection from "./AnimationSection"
import AnimatedIconDesc from "./AnimatedIconDesc"
import { motion, AnimatePresence } from "framer-motion"
import { SiReact, SiVuedotjs, SiDjango, SiFlask, SiTailwindcss, SiFigma } from "react-icons/si"

const skills = [
  {
    id: 1,
    name: "React",
    icon: SiReact,
    proficiency: 85,
    experience: "3 tahun",
    description: "Pengalaman dengan hook, API konteks, pustaka manajemen status, dan membangun komponen UI yang kompleks.",
  },
  {
    id: 2,
    name: "Vue",
    icon: SiVuedotjs,
    proficiency: 80,
    experience: "2 tahun",
    description: "Mahir menggunakan Vue composition API, manajemen status Vuex, dan membangun aplikasi web reaktif.",
  },
  {
    id: 3,
    name: "Django",
    icon: SiDjango,
    proficiency: 82,
    experience: "2 tahun",
    description:
      "Pengalaman dengan Django ORM, kerangka kerja REST, sistem autentikasi, dan membangun aplikasi web yang skalabel.",
  },
  {
    id: 4,
    name: "Flask",
    icon: SiFlask,
    proficiency: 78,
    experience: "2 tahun",
    description: "Terampil dalam membangun aplikasi web ringan, RESTful API, dan layanan mikro menggunakan Flask.",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    proficiency: 90,
    experience: "2 tahun",
    description: "Pengalaman luas dengan CSS yang mengutamakan utilitas dan membangun desain responsif dengan Tailwind.",
  },
  {
    id: 6,
    name: "Figma",
    icon: SiFigma,
    proficiency: 75,
    experience: "1 tahun",
    description: "Mahir dalam desain UI/UX, pembuatan prototipe, dan berkolaborasi dengan desainer menggunakan Figma.",
  },
]

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)

  const handleSkillClick = (skill) => {
    if (selectedSkill?.id === skill.id) {
      setSelectedSkill(null)
    } else {
      setSelectedSkill(skill)
    }
  }

  return (
    <section id="skills" className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Using AnimatedSection component for the title */}
        <AnimatedSection 
          enterAnimation="fade-in-up" 
          exitAnimation="fade-out-down" 
          threshold={0.2} 
          delay={0.2}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-16 text-pink-200">SKILLS</h2>
        </AnimatedSection>

        {/* Responsive grid - Changes from 2 columns on mobile to 6 on larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection
              key={skill.id}
              enterAnimation="fade-in-up"
              exitAnimation="fade-out-down"
              threshold={0.1}
              delay={index * 0.1}
            >
              <SkillIcon
                skill={skill}
                isSelected={selectedSkill?.id === skill.id}
                onClick={() => handleSkillClick(skill)}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="mt-8 md:mt-12 overflow-hidden"
              layout
            >
              {/* Using AnimatedIconDesc for the skill description */}
              <AnimatedIconDesc
                enterAnimation="fade-in-up"
                exitAnimation="fade-out-down"
                threshold={0.2}
                delay={0.3}
              >
                <div className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-center bg-black border border-pink-200 border-opacity-30 rounded-lg p-4 md:p-8">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                    className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6"
                  >
                    <selectedSkill.icon className="text-3xl md:text-5xl text-pink-200" />
                    <h3 className="text-xl md:text-3xl font-bold text-pink-200">{selectedSkill.name}</h3>
                  </motion.div>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-sm md:text-base text-pink-200 opacity-90 mb-4 md:mb-6"
                  >
                    {selectedSkill.description}
                  </motion.p>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-xs md:text-sm text-pink-200 opacity-90">Kemampuan</span>
                      <span className="text-xs md:text-sm text-pink-200 opacity-90">{selectedSkill.proficiency}%</span>
                    </div>
                    <div className="h-2 md:h-3 bg-pink-200 bg-opacity-20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedSkill.proficiency}%` }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="h-full bg-pink-200 rounded-full"
                      />
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="text-xs md:text-sm text-pink-200 opacity-90 mt-3 md:mt-4"
                    >
                      <span className="font-bold">Pengalaman:</span> {selectedSkill.experience}
                    </motion.p>
                  </motion.div>
                </div>
              </AnimatedIconDesc>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

const SkillIcon = ({ skill, isSelected, onClick }) => {
  const IconComponent = skill.icon

  return (
    <div className="relative w-full aspect-square flex justify-center items-center">
      <motion.button
        className="w-full max-w-16 sm:max-w-20 h-16 sm:h-20 rounded-lg flex flex-col items-center justify-center relative overflow-visible"
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={
          isSelected
            ? {
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }
            : {
                scale: 1,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }
        }
      >
        {/* Container untuk ikon - pastikan ikon tetap dalam batas area */}
        <motion.div
          className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 relative"
          animate={
            isSelected
              ? {
                  color: "#ff88bb",
                  transition: { duration: 0.3 },
                }
              : {
                  color: "#f8bbd0",
                  transition: { duration: 0.3 },
                }
          }
        >
          <IconComponent className="text-2xl sm:text-3xl md:text-4xl" />

          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute inset-0 -z-10 bg-pink-200 bg-opacity-10 rounded-full blur-sm"
                layoutId={`glow-${skill.id}`}
                transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Background glow effect */}
        <motion.span
          className="absolute inset-0 -z-20 rounded-lg"
          animate={
            isSelected
              ? {
                  boxShadow: "0 0 15px 2px rgba(244, 114, 182, 0.3)",
                  transition: { duration: 0.5 },
                }
              : {
                  boxShadow: "0 0 0px 0px rgba(244, 114, 182, 0)",
                  transition: { duration: 0.5 },
                }
          }
        ></motion.span>

        {/* Skill name */}
        <h3 className="text-xs sm:text-sm font-bold text-center text-pink-200 relative z-10 mt-1">{skill.name}</h3>
      </motion.button>

      {/* Arrow indicator - diposisikan di luar button tetapi masih dalam container */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: 0 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
          >
            <motion.div
              className="w-0 h-0 border-l-[6px] sm:border-l-[8px] border-r-[6px] sm:border-r-[8px] border-t-[6px] sm:border-t-[8px] border-transparent border-t-pink-200"
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Skills