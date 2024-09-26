import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Quote from './components/Quote.jsx'
import Image from './components/Image.jsx'
import Footer from './components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <Body />
    <Quote />
    <Image />
    <Footer />
    
  </StrictMode>,
)

