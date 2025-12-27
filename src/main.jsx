import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
    <RouterProvider router={router} />
    </UserContext>
  </StrictMode>,
)
