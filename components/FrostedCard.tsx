import type React from "react"

interface FrostedCardProps {
  children: React.ReactNode
}

const FrostedCard: React.FC<FrostedCardProps> = ({ children }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:bg-opacity-20">
      {children}
    </div>
  )
}

export default FrostedCard

