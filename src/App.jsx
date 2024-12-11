import { Outlet } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import ParallaxBackground from './components/ParallaxBackground'

function App() {
  return (
    <div>
      <ParallaxBackground />
      <CustomCursor />
      <Outlet />
    </div>
  )
}

export default App
