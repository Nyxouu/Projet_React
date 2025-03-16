import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Bestiaire from './components/Bestiaire.jsx'
import Footer from './components/Footer.jsx'
import "./main.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Bestiaire/>
    {/* <App/> */}
    {/* <Footer/> */}
  </StrictMode>,
)
