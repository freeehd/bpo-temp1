import type React from "react"
import { motion } from "framer-motion"

interface MetricProps {
  value: string
  label: string
  delay: number
  className?: string
}

const Metric: React.FC<MetricProps> = ({ value, label, delay, className }) => {
  return (
    <motion.div
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        className="text-4xl font-bold text-purple-400 mb-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: delay + 0.2 }}
      >
        {value}
      </motion.div>
      <div className="text-gray-300">{label}</div>
    </motion.div>
  )
}

export default Metric

