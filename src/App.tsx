import { motion } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import ParallaxBackground from './components/ParallaxBackground'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <ParallaxBackground />
      <Navbar />
    </motion.div>
  )
}

export default App 