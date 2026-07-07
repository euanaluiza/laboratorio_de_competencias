import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RetestApp from './components/RetestApp.jsx'

const isRetest = new URLSearchParams(window.location.search).get('fluxo') === 'reteste'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isRetest ? <RetestApp /> : <App />}
  </StrictMode>,
)
