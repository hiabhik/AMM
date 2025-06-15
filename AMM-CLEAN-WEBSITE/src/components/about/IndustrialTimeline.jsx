import { motion } from 'framer-motion'

const IndustrialTimeline = () => {
  const timelineData = [
    {
      title: 'Steel Industry Foundation',
      description: 'AMM was established to serve the growing steel manufacturing industry with premium raw materials for blast furnaces and electric arc furnaces.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🏭',
      position: 'left'
    },
    {
      title: 'Blast Furnace Partnerships',
      description: 'Formed strategic partnerships with major steel plants, blast furnace operators, and electric arc furnace facilities worldwide.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🤝',
      position: 'right'
    },
    {
      title: 'Steel Grade Certification',
      description: 'Achieved steel industry certifications for blast furnace materials, EAF scrap, and metallurgical grade products.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '⭐',
      position: 'left'
    },
    {
      title: 'Metallurgical Technology',
      description: 'Implemented advanced metallurgical testing and quality control systems for steel mill grade materials.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '⚙️',
      position: 'right'
    },
    {
      title: 'Global Steel Supply',
      description: 'Expanding to serve international steel mills, blast furnaces, and metallurgical plants with premium materials.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🌍',
      position: 'left'
    }
  ]

  return (
    <section className="section bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a664' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Industrial Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From foundation to global expansion - witness our evolution in the minerals and metals industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary via-secondary to-transparent"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-16 ${item.position === 'right' ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: item.position === 'left' ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={`w-5/12 ${item.position === 'right' ? 'pl-8' : 'pr-8'}`}>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-secondary/30 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{item.icon}</div>
                    <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="relative z-10">
                <motion.div
                  className="w-6 h-6 bg-secondary rounded-full border-4 border-primary shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.5 }}
                >
                  <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75"></div>
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustrialTimeline
