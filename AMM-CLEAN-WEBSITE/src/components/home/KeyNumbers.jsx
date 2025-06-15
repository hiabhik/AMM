import { motion } from 'framer-motion'

const KeyNumbers = () => {
  const stats = [
    {
      number: '50+',
      label: 'Steel Plants',
      description: 'Major steel manufacturing facilities served globally'
    },
    {
      number: '500K+',
      label: 'Tons Supplied',
      description: 'Annual capacity of raw materials for steel industry'
    },
    {
      number: '15+',
      label: 'Countries',
      description: 'International presence in steel manufacturing markets'
    },
    {
      number: '24/7',
      label: 'Support',
      description: 'Round-the-clock customer service and technical support'
    }
  ]

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Delivering excellence to the steel industry with measurable results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-secondary mb-4">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-gray-300 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyNumbers
