import { useEffect, useState } from 'react'
import './style.scss'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseOver = () => {
      setIsHovered(true)
    }

    const onMouseOut = () => {
      setIsHovered(false)
    }

    // 添加事件监听
    window.addEventListener('mousemove', onMouseMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseover', onMouseOver)
      el.addEventListener('mouseout', onMouseOut)
    })

    // 清理事件监听
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseover', onMouseOver)
        el.removeEventListener('mouseout', onMouseOut)
      })
    }
  }, [])

  return (
    <>
      <div 
        className={`cursor-dot ${isHovered ? 'hovered' : ''}`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)` 
        }}
      />
      <div 
        className={`cursor-outline ${isHovered ? 'hovered' : ''}`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)` 
        }}
      />
    </>
  )
}

export default CustomCursor
