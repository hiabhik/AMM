import { motion } from 'framer-motion'
import { useState } from 'react'

const FuturisticProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0)

  const products = [
    {
      id: 0,
      name: 'Aluminium Ingots',
      category: 'Primary Metals',
      grade: 'Industrial Grade',
      applications: ['Steel Alloy Production', 'Automotive Industry', 'Construction Materials'],
      specifications: {
        'Purity': '99.7% Al minimum',
        'Weight': '20-25 kg per ingot',
        'Form': 'Standard ingots',
        'Standards': 'ASTM B209, IS 736'
      },
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-slate-600 to-slate-800'
    },
    {
      id: 1,
      name: 'Aluminium Scrap',
      category: 'Recycled Metals',
      grade: 'Premium Grade',
      applications: ['Melting & Reprocessing', 'Secondary Aluminium Production', 'Foundry Operations'],
      specifications: {
        'Type': 'Clean aluminium scrap',
        'Contamination': 'Minimal impurities',
        'Size': 'Sorted and graded',
        'Standards': 'Industry specifications'
      },
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      name: 'Heavy Metal Scrap',
      category: 'Ferrous & Non-Ferrous',
      grade: 'Industrial Grade',
      applications: ['Steel Mills', 'Foundries', 'Metal Recovery', 'Recycling Plants'],
      specifications: {
        'Types': 'Iron, Steel, Copper, Brass',
        'Condition': 'Sorted and cleaned',
        'Density': 'High density materials',
        'Standards': 'Scrap metal grades'
      },
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-amber-600 to-amber-800'
    },
    {
      id: 3,
      name: 'Glycine',
      category: 'Chemical Products',
      grade: 'Technical Grade',
      applications: ['Chemical Synthesis', 'Industrial Processes', 'Manufacturing'],
      specifications: {
        'Purity': 'Technical grade',
        'Form': 'Crystalline powder',
        'Packaging': 'Bags, drums',
        'Standards': 'Industrial specifications'
      },
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-emerald-600 to-emerald-800'
    },
    {
      id: 4,
      name: 'Briquettes',
      category: 'Processed Materials',
      grade: 'High Density',
      applications: ['Fuel Applications', 'Industrial Heating', 'Energy Generation'],
      specifications: {
        'Density': 'High compression',
        'Calorific Value': 'High energy content',
        'Size': 'Standard briquettes',
        'Standards': 'Energy specifications'
      },
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-orange-600 to-orange-800'
    },
    {
      id: 5,
      name: 'Soda Ash',
      category: 'Chemical Products',
      grade: 'Industrial Grade',
      applications: ['Glass Manufacturing', 'Chemical Processing', 'Water Treatment'],
      specifications: {
        'Type': 'Sodium Carbonate',
        'Purity': 'Industrial grade',
        'Form': 'Granular/Powder',
        'Standards': 'Chemical specifications'
      },
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-cyan-600 to-cyan-800'
    },
    {
      id: 6,
      name: 'Calcined Lime',
      category: 'Industrial Minerals',
      grade: 'High Grade',
      applications: ['Steel Production', 'Chemical Processing', 'Construction'],
      specifications: {
        'CaO Content': '90% minimum',
        'Reactivity': 'High reactivity',
        'Size': '10-50mm',
        'Standards': 'Industrial grade'
      },
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-stone-600 to-stone-800'
    },
    {
      id: 7,
      name: 'General Chemical Products',
      category: 'Specialty Chemicals',
      grade: 'Various Grades',
      applications: ['Industrial Manufacturing', 'Processing', 'Specialty Applications'],
      specifications: {
        'Range': 'Wide product range',
        'Quality': 'Certified products',
        'Packaging': 'Custom packaging',
        'Standards': 'Industry standards'
      },
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-purple-600 to-purple-800'
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(201, 166, 100, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(15, 52, 96, 0.3) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Advanced <span className="text-secondary">Product</span> Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge materials engineered for modern steel manufacturing processes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {products.map((product, index) => (
                <motion.button
                  key={product.id}
                  className={`w-full text-left p-6 rounded-lg border transition-all duration-500 ${
                    activeProduct === index
                      ? 'bg-white/10 border-secondary/60 shadow-lg'
                      : 'bg-white/5 border-white/20 hover:border-secondary/40'
                  }`}
                  onClick={() => setActiveProduct(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center text-white font-bold`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{product.name}</h3>
                      <p className="text-sm text-gray-400">{product.category}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeProduct}
              className="bg-white/5 backdrop-blur-sm border border-secondary/30 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={products[activeProduct].image}
                  alt={products[activeProduct].name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${products[activeProduct].color} opacity-60`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">{products[activeProduct].name}</h3>
                  <p className="text-gray-200">{products[activeProduct].category}</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-secondary mb-3">Applications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {products[activeProduct].applications.map((app, idx) => (
                      <div key={idx} className="bg-white/5 border border-secondary/20 rounded-lg p-3 text-center">
                        <span className="text-sm text-gray-300">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-3">Technical Specifications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(products[activeProduct].specifications).map(([key, value], idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-white/10">
                        <span className="text-gray-400">{key}:</span>
                        <span className="text-white font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex space-x-4">
                  <button className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                    Request Quote
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-secondary/30 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Download Datasheet
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FuturisticProductShowcase
