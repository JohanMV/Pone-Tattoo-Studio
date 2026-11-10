import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/bebas-neue/latin-400.css'
import '@fontsource-variable/inter/wght.css'
import '@fontsource/barlow-condensed/latin-800-italic.css'
import '@/styles/base.css'
import '@/styles/sections.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
)
