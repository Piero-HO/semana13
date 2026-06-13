import { StrictMode } from 'react'
// @ts-expect-error - TS cannot find declaration file for react-dom/client
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
