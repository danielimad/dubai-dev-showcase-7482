import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLightMode, setIsLightMode] = useState(false)
  const [language, setLanguage] = useState('en')

  return (
    <div className={`${isLightMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} min-h-screen transition-colors duration-300`}>
      <Header 
        isLightMode={isLightMode} 
        setIsLightMode={setIsLightMode}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Skills language={language} />
        <Portfolio language={language} />
        <Services language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  )
}

export default App