import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import App from './App.jsx'
import Home from './components/pages/HomePage/Home.jsx'
import AboutPage from './components/pages/AboutPage/AboutPage.jsx'
import MeetTheTeam from './components/pages/MeetTheTeam/MeetTheTeam.jsx'
import Becomeatutor from './components/pages/BecomeATutor/Becomeatutor.jsx'
import Faq from './components/pages/Faq/faq.jsx'
import PageNotFound from './components/pages/errorPage/PageNotFound.jsx'
import TutorProfile from './components/pages/TutorProfile/TutorProfile.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
    element: <Becomeatutor />,
  },
  {
    path: '/frequently-asked-questions',
    element: <Faq/>,
  },
  {
    path: '/meet-our-team/:id', // Dynamic route for tutor profiles
    element: <TutorProfile />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
) 
