import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const products = [
    {
      name: 'Aluminium Ingots',
      description: 'High-purity aluminium ingots for steel alloy production, automotive manufacturing, and electric arc furnace applications.',
      features: ['99.7% purity', 'Steel grade quality', 'EAF compatible', 'Blast furnace ready'],
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      industrialImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: '🔩'
    },
    {
      name: 'Calcined Lime',
      description: 'Premium calcined lime essential for steel production, blast furnace operations, and electric arc furnace slag conditioning.',
      features: ['High CaO content', 'Low sulfur', 'Steel mill grade', 'Blast furnace tested'],
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      industrialImage: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: '⚪'
    },
    {
      name: 'Glycerin',
      description: 'Industrial grade glycerin for steel plant operations, cooling systems, and metallurgical process applications.',
      features: ['Industrial grade', 'Steel plant approved', 'High purity', 'Metallurgical use'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      industrialImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: '💧'
    },
    {
      name: 'Steel Scrap',
      description: 'High-quality ferrous scrap materials for electric arc furnaces, blast furnaces, and steel mill operations.',
      features: ['EAF grade scrap', 'Low residuals', 'Sorted & graded', 'Steel mill certified'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      industrialImage: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: '♻️'
    }
  ]

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary mb-6">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of high-quality minerals and metals to meet diverse industrial needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 8,
                rotateX: 5,
                boxShadow: "0 30px 60px rgba(15, 52, 96, 0.4)"
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute top-4 right-4 text-3xl bg-white/20 backdrop-blur-sm rounded-full p-2">
                  {product.icon}
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-secondary mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-secondary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industrial Application Preview */}
                <div className="relative h-20 rounded-lg overflow-hidden">
                  <img
                    src={product.industrialImage}
                    alt={`${product.name} Industrial Application`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent flex items-center">
                    <span className="text-white text-xs font-medium ml-2">Industrial Application</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/products"
            className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProducts
