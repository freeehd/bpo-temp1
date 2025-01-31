import type React from "react"
import { motion } from "framer-motion"

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, className }) => {
  return (
    <motion.div
      className={`bg-gray-800 bg-opacity-50 rounded-xl p-6 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="text-purple-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

export default BenefitCard

