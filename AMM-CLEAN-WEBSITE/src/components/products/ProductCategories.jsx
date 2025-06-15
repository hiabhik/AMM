import { motion } from 'framer-motion'

const ProductCategories = () => {
  const products = [
    {
      name: 'Aluminium Ingots',
      purity: '99.7% minimum',
      applications: 'Steel alloy production, EAF applications',
      packaging: 'Bulk or bundled as per requirement',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Calcined Lime',
      purity: 'High CaO content, Low sulfur',
      applications: 'Blast furnace flux, EAF slag conditioning',
      packaging: 'Bulk handling, specialized containers',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Industrial Glycerin',
      purity: 'Technical grade, High thermal stability',
      applications: 'Steel plant cooling systems, Industrial processes',
      packaging: 'Drums, tanks, bulk transport',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Steel Scrap',
      purity: 'EAF grade, Low residual elements',
      applications: 'Electric arc furnaces, Steel mill charging',
      packaging: 'Sorted, graded, and classified',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Product Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of raw materials for steel manufacturing and metallurgical processes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">{product.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Specifications:</span>
                    <span className="text-gray-600">{product.purity}</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-gray-700">Applications:</span>
                    <span className="text-gray-600 text-right flex-1 ml-4">{product.applications}</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <span className="font-semibold text-gray-700">Packaging:</span>
                    <span className="text-gray-600 text-right flex-1 ml-4">{product.packaging}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="text-primary font-semibold hover:text-primary-light transition-colors duration-300">
                    Request Specifications →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
