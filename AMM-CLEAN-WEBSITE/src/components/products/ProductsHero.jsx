import { motion } from 'framer-motion'

const ProductsHero = () => {
  return (
    <section className="relative py-20 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Products</h1>
          <p className="text-xl text-gray-100">
            Discover our comprehensive range of high-quality minerals and metals for various industrial applications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsHero
