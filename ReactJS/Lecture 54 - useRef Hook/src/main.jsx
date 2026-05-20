import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Uncontrolled from './Uncontrolled.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Uncontrolled />
  </StrictMode>,
)
