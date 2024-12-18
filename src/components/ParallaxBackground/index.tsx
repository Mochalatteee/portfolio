import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import './style.scss'
import Layer1 from '../../assets/images/Layer1.png'
import Layer2 from '../../assets/images/Layer2.png'
import Layer3 from '../../assets/images/Layer3.png'
import Layer4 from '../../assets/images/Layer4.png'

interface BackgroundSet {
  layer1: string;
  layer2: string;
}

interface Position {
  x: number;
  y: number;
}

const BACKGROUND_SETS: Record<number, BackgroundSet> = {
  1: {
    layer1: Layer1,
    layer2: Layer2
  },
  2: {
    layer1: Layer3,
    layer2: Layer4
  }
}

const ParallaxBackground: FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [activeSet] = useState<number>(() => Math.random() < 0.5 ? 1 : 2)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const x = (e.clientX - window.innerWidth / 2) * 0.02
      const y = (e.clientY - window.innerHeight / 2) * 0.02
      setPosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="parallax-container">
      <motion.div 
        className="background-layer layer-1"
        style={{
          backgroundImage: `url(${BACKGROUND_SETS[activeSet].layer1})`
        }}
        animate={{
          x: position.x * 0.5,
          y: position.y * 0.5
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 1
        }}
      />
      <motion.div 
        className="background-layer layer-2"
        style={{
          backgroundImage: `url(${BACKGROUND_SETS[activeSet].layer2})`
        }}
        animate={{
          x: position.x * 2,
          y: position.y * 2
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 1
        }}
      />
    </div>
  )
}

export default ParallaxBackground 