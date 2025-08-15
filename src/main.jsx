import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{/**el StricMode es una herramienta de desarrollo que envuelve tu aplicación para ayudarte a encontrar errores y malas prácticas antes de ir a producción  */}
    <GifExpertApp />
  </React.StrictMode>
)
