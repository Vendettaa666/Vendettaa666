import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import 'remixicon/fonts/remixicon.css'
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    <Navbar />
    <App />
    <Footer />
    </div>
  </StrictMode>,
)
