import type React from "react"
import { motion } from "framer-motion"

interface GlassmorphicCardProps {
  children: React.ReactNode
  className?: string
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default GlassmorphicCard

