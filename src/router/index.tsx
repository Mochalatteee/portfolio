import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import About from '../pages/About'
import Home from '../pages/Home'
import Works from '../pages/Works'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/works',
        element: <Works />
      },
    ]
  }
])

export default router 