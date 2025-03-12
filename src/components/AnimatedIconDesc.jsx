//AnimatedIconDesc.jsx
"use client"

import { motion } from "framer-motion"

const AnimatedSection = ({ children, enterAnimation, exitAnimation, delay, threshold, className = "" }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.5, delay: delay || 0, type: "spring" }}
      viewport={{ once: true, amount: threshold || 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection;

