import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const ProductCard = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      layout
      id={product.id.toLowerCase().replace(/\s+/g, '-')}
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div layout className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full object-cover transition-all duration-500 ${
            isExpanded ? 'h-64' : 'h-56'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <button 
              onClick={toggleExpand}
              className="mt-2 flex items-center text-sm font-medium hover:underline"
            >
              {isExpanded ? 'Show Less' : 'Learn More'} 
              <FaArrowRight className="ml-1" />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div layout className="p-6">
        <motion.h3 layout className="text-xl font-semibold text-primary mb-2">
          {product.name}
        </motion.h3>
        <motion.p layout className="text-gray-600 mb-4">
          {product.shortDescription}
        </motion.p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-primary mb-2">Specifications:</h4>
                <ul className="list-disc list-inside mb-4 text-gray-600 space-y-1">
                  {product.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
                
                <h4 className="font-medium text-primary mb-2">Applications:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.applications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          layout
          onClick={toggleExpand}
          className="mt-4 flex items-center text-primary hover:text-primary-dark font-medium"
        >
          {isExpanded ? 'Show Less' : 'Learn More'} 
          <FaArrowRight className={`ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default ProductCard
