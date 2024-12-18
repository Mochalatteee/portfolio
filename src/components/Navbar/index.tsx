import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import './style.scss'

const Navbar = () => {
  const location = useLocation()
  const links = [
    { path: '/', label: 'Home' },
    { path: '/works', label: 'Works' },
    { path: '/about', label: 'About' },
  ]

  return (
    <nav className="navbar">
      <div className="nav-content">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FRACTAL
        </motion.div>
        <div className="nav-links">
          {links.map((link) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link 
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar 