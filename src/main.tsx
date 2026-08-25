import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { enableMotion } from './motion/reveal'
import './index.css'

// Antes do primeiro render, para o conteúdo não piscar visível e sumir.
enableMotion()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
