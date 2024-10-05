import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Home from './components/pages/HomePage/Home.jsx'
import AboutPage from './components/pages/AboutPage/AboutPage.jsx'
import MeetTheTeam from './components/pages/MeetTheTeam/MeetTheTeam.jsx'
import BecomeATutor from './components/pages/Become A Tutor/BecomeATutor.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
      errorElement: <h1>404 Page Not Found</h1>,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/meet-our-team',
    element: <MeetTheTeam />,
  },
  {
    path: '/become-a-tutor',
    element: <BecomeATutor />,
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
