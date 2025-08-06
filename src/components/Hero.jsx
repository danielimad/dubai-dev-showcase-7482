import React from 'react'
import { motion } from 'framer-motion'

const Hero = ({ language }) => {
  const content = {
    en: {
      greeting: 'Hello, I\'m',
      name: 'Ahmed Al-Mansouri',
      title: 'Full-Stack Web Developer',
      location: 'Based in Dubai, UAE 🇦🇪',
      description: 'I create modern, responsive web applications with cutting-edge technologies. Specializing in React, Node.js, and scalable solutions for businesses in the UAE and beyond.',
      cta: 'View My Work',
      contact: 'Get In Touch'
    },
    ar: {
      greeting: 'مرحباً، أنا',
      name: 'أحمد المنصوري',
      title: 'مطور مواقع متكامل',
      location: 'مقيم في دبي، الإمارات 🇦🇪',
      description: 'أقوم بإنشاء تطبيقات ويب حديثة ومتجاوبة باستخدام أحدث التقنيات. متخصص في React و Node.js والحلول القابلة للتوسع للشركات في الإمارات وخارجها.',
      cta: 'عرض أعمالي',
      contact: 'تواصل معي'
    }
  }

  const text = content[language]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={language === 'ar' ? 'text-right' : 'text-left'}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl mb-4 text-gray-600 dark:text-gray-300"
          >
            {text.greeting}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
          >
            {text.name}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800 dark:text-white"
          >
            {text.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl mb-6 text-blue-600 dark:text-blue-400"
          >
            {text.location}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            {text.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              {text.cta}
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              {text.contact}
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl"
          >
            &#8595;
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero