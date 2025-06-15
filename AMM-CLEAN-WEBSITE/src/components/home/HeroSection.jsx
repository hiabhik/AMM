import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Blast Furnace Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Blast Furnace Steel Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
      </div>

      {/* Professional overlay elements */}
      <div className="absolute inset-0 z-5">
        {/* Static geometric shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border border-secondary/20 rounded-lg hidden lg:block" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-white/5 rounded-full hidden lg:block" />
        <div className="absolute bottom-40 left-32 w-20 h-20 border border-primary/20 rounded-full hidden lg:block" />
        <div className="absolute bottom-20 right-32 w-14 h-14 bg-secondary/10 transform rotate-45 hidden lg:block" />

        {/* Subtle accent lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent to-secondary/20 hidden lg:block" />
        <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent to-primary/20 hidden lg:block" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'linear-gradient(to right, #ffffff, #c9a664)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Anuradha Minerals & Metals
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium Raw Materials for Steel Manufacturing
          </motion.p>

          <motion.p
            className="text-lg mb-12 text-secondary font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Trusted by Steel Plants Worldwide | www.ammindia.in
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/products"
              className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Our Products
            </Link>
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Quote
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Simple bottom info */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-sm text-gray-300">Serving Steel Plants in 15+ Countries</p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
