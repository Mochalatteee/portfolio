import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import './style.scss'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

const Bubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const frameWidth = 300  // 画框宽度
  const frameHeight = 400 // 画框高度

  useEffect(() => {
    // 初始化固定数量的气泡
    const initialBubbles: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * frameWidth,
      y: Math.random() * frameHeight,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }))
    setBubbles(initialBubbles)
  }, [])

  return (
    <div className="frame-container">
      <div className="frame">
        {bubbles.map(bubble => (
          <motion.div
            key={bubble.id}
            className="bubble"
            initial={{ x: bubble.x, y: bubble.y }}
            animate={{
              x: [
                bubble.x,
                bubble.x + Math.random() * 30 - 15,
                bubble.x
              ],
              y: [
                bubble.y,
                bubble.y - Math.random() * 30,
                bubble.y
              ]
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut"
            }}
            style={{
              width: bubble.size,
              height: bubble.size
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Bubbles 