import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/constants.css"
import "./styles/null.css"
import { Global } from '@/styles/global.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<Global />
    <App />
  </StrictMode>,
)
