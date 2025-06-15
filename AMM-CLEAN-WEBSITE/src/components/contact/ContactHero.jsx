import { motion } from 'framer-motion'

const ContactHero = () => {
  return (
    <section className="relative py-20 bg-primary text-white overflow-hidden">
      {/* Industrial Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Industrial Contact Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
      </div>

      {/* Floating Industrial Icons */}
      <div className="absolute inset-0 z-5">
        {[
          { icon: '🏭', pos: 'top-20 left-20', delay: 0 },
          { icon: '⚙️', pos: 'top-32 right-32', delay: 0.5 },
          { icon: '🔧', pos: 'bottom-32 left-32', delay: 1 },
          { icon: '📞', pos: 'bottom-20 right-20', delay: 1.5 }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.pos} text-4xl opacity-30`}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: item.delay }}
            whileHover={{ scale: 1.2, opacity: 0.6 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="text-xl text-gray-100 mb-8">
            Get in touch with our team for inquiries, quotes, or partnership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              📧 Quick Response
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              🌍 Global Reach
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              🤝 Partnership Ready
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
