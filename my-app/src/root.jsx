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
    </HelmetProvider>
  </StrictMode>,
)
