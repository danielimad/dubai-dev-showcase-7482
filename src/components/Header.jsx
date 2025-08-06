import React from 'react'
import { motion } from 'framer-motion'

const Header = ({ isLightMode, setIsLightMode, language, setLanguage }) => {
  const toggleTheme = () => setIsLightMode(!isLightMode)
  const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en')

  const navigation = {
    en: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      portfolio: 'Portfolio',
      services: 'Services',
      contact: 'Contact'
    },
    ar: {
      home: 'الرئيسية',
      about: 'نبذة',
      skills: 'المهارات',
      portfolio: 'الأعمال',
      services: 'الخدمات',
      contact: 'التواصل'
    }
  }

  const navItems = navigation[language]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 ${isLightMode ? 'bg-white/90' : 'bg-gray-900/90'} backdrop-blur-md border-b ${isLightMode ? 'border-gray-200' : 'border-gray-700'}`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            {language === 'en' ? 'DevDXB' : 'مطور دبي'}
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(navItems).map(([key, value]) => (
              <motion.a
                key={key}
                href={`#${key}`}
                whileHover={{ scale: 1.1 }}
                className={`hover:text-blue-500 transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}
              >
                {value}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
            >
              {isLightMode ? '🌙' : '☀️'}
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header