import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Home from './components/pages/HomePage/Home.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
      // errorElement: <h1>404 Page Not Found</h1>,
  },
  {
    path: '/about',
    // element: <About />,
  },
  {
    path: '/services',
    // element: <Services />,
  },
  {
    path: '/contact',
    // element: <Contact />,
  },
  {
    path: '/signup',
    // element: <h1>Sign Up</h1>,
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
