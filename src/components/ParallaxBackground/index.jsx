import { useEffect, useState } from 'react'
import './style.scss'

const ParallaxBackground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 20  // 20是移动幅度，可以调整
      const y = (e.clientY / window.innerHeight) * 20

      setPosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="parallax-container">
      <div 
        className="background-layer layer-1"
        style={{
          transform: `translate(${position.x * 0.1}px, ${position.y * 0.1}px)` // 第一层移动慢一些
        }}
      />
      <div 
        className="background-layer layer-2"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)` // 第二层移动快一些
        }}
      />
    </div>
  )
}

export default ParallaxBackground
