import { motion } from 'framer-motion'

const Values = () => {
  const missionVisionValues = [
    {
      type: 'mission',
      title: 'Our Mission',
      description: 'To supply premium quality minerals and metals to steel plants, blast furnaces, and manufacturing industries worldwide with unwavering commitment to excellence.',
      icon: '🎯',
      color: 'from-blue-500 to-primary'
    },
    {
      type: 'vision',
      title: 'Our Vision',
      description: 'To become the leading global supplier of high-grade materials for steel manufacturing, electric arc furnaces, and heavy industrial applications.',
      icon: '🌟',
      color: 'from-secondary to-yellow-500'
    },
    {
      type: 'value',
      title: 'Steel Industry Excellence',
      description: 'Specialized expertise in blast furnace operations and EAF requirements.',
      icon: '🏭',
      color: 'from-orange-500 to-red-500'
    },
    {
      type: 'value',
      title: 'Quality Assurance',
      description: 'Rigorous testing and certification for all steel mill grade materials.',
      icon: '⚙️',
      color: 'from-green-500 to-teal-500'
    },
    {
      type: 'value',
      title: 'Global Reliability',
      description: 'Consistent supply chain for steel plants and metallurgical facilities.',
      icon: '🌍',
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'value',
      title: 'Industrial Safety',
      description: 'Commitment to safety standards in steel manufacturing environments.',
      icon: '🛡️',
      color: 'from-indigo-500 to-blue-500'
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
          <h2 className="text-4xl font-bold text-primary mb-6">Mission, Vision & Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence in the steel manufacturing industry drives everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missionVisionValues.map((item, index) => (
            <motion.div
              key={item.title}
              className={`relative text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
                item.type === 'mission' || item.type === 'vision' ? 'md:col-span-1 lg:col-span-1' : ''
              }`}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(15, 52, 96, 0.3)"
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-5xl mb-6"
                  whileHover={{ rotateY: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  item.type === 'mission' ? 'text-primary' :
                  item.type === 'vision' ? 'text-secondary' : 'text-gray-800'
                }`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>

                {/* Type Badge */}
                <div className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  item.type === 'mission' ? 'bg-primary/10 text-primary' :
                  item.type === 'vision' ? 'bg-secondary/10 text-secondary' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
