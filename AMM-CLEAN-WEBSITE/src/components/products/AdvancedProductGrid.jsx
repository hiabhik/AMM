import { motion } from 'framer-motion'
import { useState } from 'react'

const AdvancedProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      name: 'Aluminium Ingots',
      category: 'metals',
      description: 'High-purity aluminium ingots for industrial applications and manufacturing processes.',
      specifications: ['99.7% Purity', '20-25kg Standard', 'ASTM B209 Certified'],
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      applications: 'Automotive, Construction, Electronics'
    },
    {
      name: 'Aluminium Scrap',
      category: 'metals',
      description: 'Premium grade aluminium scrap for recycling and secondary production.',
      specifications: ['Clean Material', 'Sorted & Graded', 'Low Contamination'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      applications: 'Foundries, Smelting, Reprocessing'
    },
    {
      name: 'Heavy Metal Scrap',
      category: 'metals',
      description: 'Ferrous and non-ferrous heavy metal scrap for steel mills and foundries.',
      specifications: ['Mixed Metals', 'High Density', 'Industrial Grade'],
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      applications: 'Steel Mills, Metal Recovery, Recycling'
    },
    {
      name: 'Glycine',
      category: 'chemicals',
      description: 'Technical grade glycine for chemical synthesis and industrial processes.',
      specifications: ['Technical Grade', 'Crystalline Form', 'High Purity'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      applications: 'Chemical Synthesis, Manufacturing'
    },
    {
      name: 'Briquettes',
      category: 'processed',
      description: 'High-density briquettes for fuel applications and energy generation.',
      specifications: ['High Density', 'Energy Efficient', 'Standard Size'],
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      applications: 'Industrial Heating, Energy Generation'
    },
    {
      name: 'Soda Ash',
      category: 'chemicals',
      description: 'Industrial grade sodium carbonate for glass and chemical manufacturing.',
      specifications: ['Sodium Carbonate', 'Industrial Grade', 'Granular Form'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      applications: 'Glass Manufacturing, Water Treatment'
    },
    {
      name: 'Calcined Lime',
      category: 'minerals',
      description: 'High-grade calcined lime for steel production and chemical processing.',
      specifications: ['90% CaO Content', 'High Reactivity', '10-50mm Size'],
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      applications: 'Steel Production, Construction'
    },
    {
      name: 'Chemical Products',
      category: 'chemicals',
      description: 'Wide range of specialty chemicals for various industrial applications.',
      specifications: ['Multiple Grades', 'Certified Quality', 'Custom Solutions'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      applications: 'Manufacturing, Processing, Specialty Uses'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'metals', name: 'Metals & Alloys', count: products.filter(p => p.category === 'metals').length },
    { id: 'chemicals', name: 'Chemical Products', count: products.filter(p => p.category === 'chemicals').length },
    { id: 'minerals', name: 'Industrial Minerals', count: products.filter(p => p.category === 'minerals').length },
    { id: 'processed', name: 'Processed Materials', count: products.filter(p => p.category === 'processed').length }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary mb-6">Our Product Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of high-quality materials for industrial applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                
                {/* Specifications */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-secondary mb-2">Key Specifications:</h4>
                  <div className="space-y-1">
                    {product.specifications.map((spec, idx) => (
                      <div key={idx} className="text-xs text-gray-500 bg-gray-50 rounded px-2 py-1">
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-secondary mb-2">Applications:</h4>
                  <p className="text-xs text-gray-500">{product.applications}</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-primary hover:bg-primary-light text-white text-xs py-2 px-3 rounded font-semibold transition-colors duration-300">
                    Get Quote
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs py-2 px-3 rounded font-semibold transition-colors duration-300">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Need Custom Solutions?</h3>
            <p className="text-gray-600 mb-6">
              We provide customized materials and specifications to meet your specific industrial requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Contact Our Team
              </button>
              <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Request Catalog
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AdvancedProductGrid
