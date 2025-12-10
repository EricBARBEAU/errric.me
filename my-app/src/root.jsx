// Import React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
// CSS
import './css/index.scss'
// Modules
import App from './modules/App.jsx'

    /* APP BELOW
================================================== */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      {/*Noise background*/}
      <div className="noise-bg inset-0" aria-hidden="true">
        <svg>
          <filter id='noise-bg-fx'>
            <feTurbulence baseFrequency="0.8" numOctaves="1" type="fractalNoise"></feTurbulence>
          </filter>
        </svg>
      </div>
    </HelmetProvider>
  </StrictMode>,
)
