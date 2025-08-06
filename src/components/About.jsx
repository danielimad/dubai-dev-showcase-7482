import React from 'react'
import { motion } from 'framer-motion'

const About = ({ language }) => {
  const content = {
    en: {
      title: 'About Me',
      subtitle: 'Passionate Developer from the Heart of UAE',
      description: [
        'With over 5 years of experience in web development, I specialize in creating modern, scalable applications that drive business growth. Based in Dubai, I understand the unique needs of the UAE market.',
        'My expertise spans across frontend technologies like React and Vue.js, backend development with Node.js and Python, and cloud solutions with AWS and Azure.',
        'I am committed to delivering high-quality solutions that combine cutting-edge technology with user-centric design, helping businesses establish a strong digital presence in the competitive UAE market.'
      ],
      stats: [
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
        { number: '5+', label: 'Years Experience' },
        { number: '15+', label: 'Technologies' }
      ]
    },
    ar: {
      title: 'نبذة عني',
      subtitle: 'مطور شغوف من قلب الإمارات',
      description: [
        'مع أكثر من 5 سنوات من الخبرة في تطوير المواقع، أتخصص في إنشاء تطبيقات حديثة وقابلة للتوسع تقود نمو الأعمال. مقيم في دبي، أفهم الاحتياجات الفريدة للسوق الإماراتي.',
        'تمتد خبرتي عبر تقنيات الواجهة الأمامية مثل React و Vue.js، وتطوير الخادم مع Node.js و Python، والحلول السحابية مع AWS و Azure.',
        'أنا ملتزم بتقديم حلول عالية الجودة تجمع بين التكنولوجيا المتطورة والتصميم المتمحور حول المستخدم، مما يساعد الشركات على إنشاء حضور رقمي قوي في السوق الإماراتي التنافسي.'
      ],
      stats: [
        { number: '50+', label: 'مشروع مكتمل' },
        { number: '30+', label: 'عميل راضٍ' },
        { number: '5+', label: 'سنوات خبرة' },
        { number: '15+', label: 'تقنية' }
      ]
    }
  }

  const text = content[language]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {text.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {text.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={language === 'ar' ? 'text-right' : 'text-left'}
          >
            {text.description.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {language === 'en' ? 'Let\'s Work Together' : 'دعنا نعمل معاً'}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {text.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg card"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About