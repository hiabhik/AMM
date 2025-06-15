import { motion } from 'framer-motion'

const Certifications = () => {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System certification ensuring consistent quality standards',
      category: 'Quality'
    },
    {
      title: 'Steel Industry Standards',
      description: 'Compliance with international steel industry specifications and requirements',
      category: 'Industry'
    },
    {
      title: 'Environmental Compliance',
      description: 'Adherence to environmental regulations and sustainable practices',
      category: 'Environment'
    },
    {
      title: 'Safety Certifications',
      description: 'Workplace safety and industrial safety standards compliance',
      category: 'Safety'
    }
  ]

  const capabilities = [
    {
      title: 'Chemical Analysis',
      description: 'Advanced laboratory testing for chemical composition verification'
    },
    {
      title: 'Physical Testing',
      description: 'Comprehensive physical property testing and quality assurance'
    },
    {
      title: 'Metallurgical Expertise',
      description: 'Deep understanding of steel production and metallurgical processes'
    },
    {
      title: 'Supply Chain Management',
      description: 'Efficient logistics and supply chain optimization for steel plants'
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
          <h2 className="text-4xl font-bold text-primary mb-4">Certifications & Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maintaining the highest standards through certified processes and proven capabilities
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-secondary mb-8">Our Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {cert.category.charAt(0)}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-3">{cert.title}</h4>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div>
          <h3 className="text-2xl font-bold text-center text-secondary mb-8">Our Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-lg flex items-center justify-center">
                  <span className="text-xl">⚙️</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{capability.title}</h4>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-16 text-center bg-primary text-white p-12 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            To be the most reliable partner for steel manufacturing facilities worldwide, 
            delivering premium raw materials with unwavering quality, consistency, and service excellence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
