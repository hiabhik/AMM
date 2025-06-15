import { motion } from 'framer-motion'

const IndustriesSection = () => {
  const industries = [
    {
      name: 'Blast Furnace Operations',
      description: 'Premium raw materials for blast furnace steel production including iron ore, coke, and limestone.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🏭',
      applications: ['Blast Furnaces', 'Iron Making', 'Coke Plants', 'Sinter Plants']
    },
    {
      name: 'Electric Arc Furnaces',
      description: 'High-quality scrap steel and alloys for electric arc furnace steel production.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '⚡',
      applications: ['EAF Steel Mills', 'Mini Mills', 'Specialty Steel', 'Alloy Production']
    },
    {
      name: 'Steel Rolling Mills',
      description: 'Materials and components for hot rolling, cold rolling, and steel finishing operations.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🔄',
      applications: ['Hot Rolling', 'Cold Rolling', 'Strip Mills', 'Plate Mills']
    },
    {
      name: 'Steel Foundries',
      description: 'Raw materials for steel casting, forging, and specialized metallurgical processes.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🔥',
      applications: ['Steel Casting', 'Forging', 'Heat Treatment', 'Specialty Alloys']
    },
    {
      name: 'Metallurgical Plants',
      description: 'Specialized materials for non-ferrous metallurgy and metal processing facilities.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '⚙️',
      applications: ['Aluminum Smelting', 'Copper Refining', 'Zinc Processing', 'Lead Production']
    },
    {
      name: 'Heavy Industry',
      description: 'Materials for heavy machinery manufacturing, shipbuilding, and large-scale construction.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🏗️',
      applications: ['Shipbuilding', 'Heavy Machinery', 'Mining Equipment', 'Industrial Structures']
    }
  ]

  return (
    <section className="section bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Industrial Background"
          className="w-full h-full object-cover"
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
            Industries We <span className="text-secondary">Serve</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From blast furnaces to aerospace manufacturing, we supply premium materials 
            across diverse industrial sectors worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="group relative bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-secondary/20 hover:border-secondary/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(201, 166, 100, 0.3)"
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Industry Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                <div className="absolute top-4 right-4 text-3xl bg-secondary/20 backdrop-blur-sm rounded-full p-3">
                  {industry.icon}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">{industry.description}</p>
                
                <div>
                  <h4 className="font-semibold text-secondary mb-3">Key Applications:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.applications.map((app, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-gray-400 bg-white/5 rounded px-2 py-1 border border-secondary/10"
                      >
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-secondary/10 backdrop-blur-sm border border-secondary/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Partner with Industry Leaders
            </h3>
            <p className="text-gray-300 mb-6">
              Join the ranks of satisfied customers who trust AMM for their critical material needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Request Quote
              </button>
              <button className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                View Products
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustriesSection
