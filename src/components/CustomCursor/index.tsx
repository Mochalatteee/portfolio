import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="cursor"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      style={{
        position: 'fixed',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        border: '1px solid rgba(0,0,0,0.4)',
        pointerEvents: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(3px)',
        transform:'scale(1.5)',
        zIndex: 9999,
      }}
    />
  )
}

export default CustomCursor
