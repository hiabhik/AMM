import { motion } from 'framer-motion'

const ProcessTimeline = () => {
  const processes = [
    {
      step: '01',
      title: 'Steel Grade Material Sourcing',
      description: 'Sourcing blast furnace grade iron ore, metallurgical coke, and steel mill quality raw materials from certified suppliers',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: '⛏️'
    },
    {
      step: '02',
      title: 'Metallurgical Testing',
      description: 'Comprehensive chemical analysis and metallurgical testing to meet blast furnace and EAF specifications',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: '🔬'
    },
    {
      step: '03',
      title: 'Steel Mill Processing',
      description: 'Processing materials to meet exact steel plant requirements including size grading and chemical composition',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Industrial Packaging',
      description: 'Specialized packaging for steel mill delivery including bulk handling and contamination prevention',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: '📦'
    },
    {
      step: '05',
      title: 'Steel Plant Delivery',
      description: 'Direct delivery to blast furnaces, electric arc furnaces, and steel manufacturing facilities worldwide',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: '🚛'
    }
  ]

  return (
    <section className="section bg-gray-900 text-white relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-gray-900 to-secondary/20" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a664' fill-opacity='0.2'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15 15v-30l-15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Our <span className="text-secondary">Process</span> Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From sourcing to delivery, every step is meticulously planned and executed 
            to ensure the highest quality standards.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Process Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-secondary via-primary to-secondary opacity-50"></div>
          </div>

          {processes.map((process, index) => (
            <motion.div
              key={index}
              className={`relative mb-16 lg:mb-24 ${
                index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:text-right'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`lg:w-11/12 ${index % 2 === 0 ? '' : 'lg:ml-auto'}`}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-lg border border-secondary/20 overflow-hidden hover:border-secondary/50 transition-all duration-500 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className={`p-8 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="flex items-center mb-4">
                        <div className="text-4xl bg-secondary/20 rounded-full p-3 mr-4">
                          {process.icon}
                        </div>
                        <div className="text-3xl font-bold text-secondary/60">
                          {process.step}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-secondary mb-4">
                        {process.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {process.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className={`relative h-64 md:h-auto ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                      <img
                        src={process.image}
                        alt={process.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                  className="w-8 h-8 bg-secondary rounded-full border-4 border-gray-900 shadow-lg relative"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75"></div>
                  <div className="absolute inset-2 bg-white rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-secondary/10 backdrop-blur-sm border border-secondary/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Experience Process Excellence
            </h3>
            <p className="text-gray-300 mb-6">
              Our systematic approach ensures consistent quality and reliability in every delivery.
            </p>
            <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More About Our Process
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessTimeline
