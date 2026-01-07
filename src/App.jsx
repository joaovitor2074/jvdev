import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import SobreMim from './pages/SobreMim'
import Projects from './pages/Project'
import Contato from './pages/Contato'

// components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// styles
import './styles/App.css'

function App() {
  return (
    <>
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<SobreMim />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </Router>
    </>
  )
}

export default App
