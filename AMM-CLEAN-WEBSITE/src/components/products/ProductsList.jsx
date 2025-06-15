import { motion } from 'framer-motion'

const ProductsList = () => {
  const products = [
    {
      name: 'Aluminium Ingots',
      description: 'High-purity aluminium ingots for steel alloy production, electric arc furnace applications, and metallurgical processes.',
      features: ['99.7% purity', 'Steel mill grade', 'EAF compatible', 'Blast furnace tested'],
      applications: ['Steel alloy production', 'Electric arc furnaces', 'Metallurgical processes', 'Foundry operations'],
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      industrialImages: [
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      icon: '🔩'
    },
    {
      name: 'Calcined Lime',
      description: 'Premium calcined lime essential for blast furnace operations, steel production, and electric arc furnace slag conditioning.',
      features: ['High CaO content', 'Low sulfur content', 'Steel mill certified', 'Blast furnace grade'],
      applications: ['Blast furnace flux', 'EAF slag conditioning', 'Steel desulfurization', 'Iron ore sintering'],
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      industrialImages: [
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      icon: '⚪'
    },
    {
      name: 'Industrial Glycerin',
      description: 'Technical grade glycerin for steel plant cooling systems, metallurgical processes, and industrial applications.',
      features: ['Industrial grade', 'Steel plant approved', 'High thermal stability', 'Metallurgical use'],
      applications: ['Steel plant cooling', 'Metallurgical processes', 'Industrial lubricants', 'Heat transfer systems'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      industrialImages: [
        'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      icon: '💧'
    },
    {
      name: 'Steel Scrap',
      description: 'Premium quality ferrous scrap materials for electric arc furnaces, blast furnaces, and steel mill operations.',
      features: ['EAF grade scrap', 'Low residual elements', 'Sorted & classified', 'Steel mill certified'],
      applications: ['Electric arc furnaces', 'Steel mill charging', 'Foundry melting', 'Blast furnace feed'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      industrialImages: [
        'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      ],
      icon: '♻️'
    }
  ]

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                rotateY: 8,
                rotateX: 5,
                boxShadow: "0 35px 70px rgba(15, 52, 96, 0.4)"
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1200px"
              }}
            >
              {/* Product Header with Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                <div className="absolute top-4 right-4 text-4xl bg-white/20 backdrop-blur-sm rounded-full p-3">
                  {product.icon}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
                  <p className="text-gray-200 text-sm">{product.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-secondary mb-3">Key Features:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-gray-600 bg-gray-50 rounded px-3 py-2 border border-gray-200"
                      >
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-secondary mb-3">Applications:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.applications.map((application, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-gray-600 bg-secondary/5 rounded px-3 py-2 border border-secondary/20"
                      >
                        • {application}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industrial Applications Gallery */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-3">Industrial Applications:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.industrialImages.map((imgSrc, idx) => (
                      <div key={idx} className="relative h-24 rounded-lg overflow-hidden">
                        <img
                          src={imgSrc}
                          alt={`${product.name} Industrial Application ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsList
