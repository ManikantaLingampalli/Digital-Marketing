import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
// import Leads from './components/Leads'
import { Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const location = useLocation()
  const isHome = location.pathname === '/'


  return (
    <div className="bg-gradient-to-b from-slate-900 to-black min-h-screen text-white">
      {/* Fixed Header */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-20 lg:px-30  py-4 bg-black/80 backdrop-blur-md shadow-md">
        <div className="flex flex-row items-center space-x-4">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="https://res.cloudinary.com/djvcd6qvd/image/upload/v1749971278/DP_v9uief.png"
              alt="tree"
              className="w-12 h-12 rounded-lg hover:scale-105 transition-transform duration-200"
            />
            <h1 className="text-orange-500 text-3xl font-bold">Sahasra Digitals</h1>
          </Link>
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-20">
          <Link to="/" className="text-xl hover:text-orange-400">Home</Link>
          <Link to="/about" className="text-xl hover:text-orange-400">About</Link>
          <Link to="/services" className="text-xl hover:text-orange-400">Services</Link>
          {/* <Link to="/leads" className="text-xl hover:text-orange-400">Leads</Link> */}
          <Link to="/contact" className="text-xl hover:text-orange-400">Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 flex flex-col items-start p-4 space-y-4 md:hidden z-50">
            <Link to="/" onClick={toggleMenu} className="hover:text-orange-400">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-orange-400">About</Link>
            <Link to="/services" onClick={toggleMenu} className="hover:text-orange-400">Services</Link>
            {/* <Link to="/leads" onClick={toggleMenu} className="hover:text-orange-400">Leads</Link> */}
            <Link to="/contact" onClick={toggleMenu} className="hover:text-orange-400">Contact</Link>
          </div>
        )}
      </nav>

      {/* Main Content Wrapper with padding and top spacing */}
      <div className={`${isHome ? '' : 'pt-24 px-4 sm:px-6 md:px-20 lg:px-30'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
