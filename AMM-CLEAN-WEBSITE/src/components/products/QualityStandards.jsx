import { motion } from 'framer-motion'

const QualityStandards = () => {
  const standards = [
    {
      title: 'Chemical Analysis',
      description: 'Complete chemical composition analysis using advanced spectroscopy',
      methods: ['X-Ray Fluorescence', 'Atomic Absorption', 'Wet Chemistry']
    },
    {
      title: 'Physical Testing',
      description: 'Comprehensive physical property testing and verification',
      methods: ['Size Analysis', 'Density Testing', 'Moisture Content']
    },
    {
      title: 'Steel Industry Standards',
      description: 'Compliance with international steel industry specifications',
      methods: ['ASTM Standards', 'JIS Standards', 'EN Standards']
    }
  ]

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'Steel Industry Compliance',
    'Environmental Standards',
    'Safety Certifications'
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
          <h2 className="text-4xl font-bold text-primary mb-4">Quality Standards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rigorous quality control processes ensuring materials meet steel industry requirements
          </p>
        </motion.div>

        {/* Testing Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {standards.map((standard, index) => (
            <motion.div
              key={standard.title}
              className="text-center p-8 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                ⚙️
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{standard.title}</h3>
              <p className="text-gray-600 mb-6">{standard.description}</p>
              
              <div className="space-y-2">
                {standard.methods.map((method, methodIndex) => (
                  <div key={methodIndex} className="text-sm text-gray-500 bg-white px-3 py-1 rounded">
                    {method}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="bg-primary text-white rounded-lg p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Our Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  ✓
                </div>
                <p className="text-gray-200">{cert}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-200 mb-4">
              All our products undergo rigorous testing to ensure they meet the highest standards 
              required by steel manufacturing facilities.
            </p>
            <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-light transition-colors duration-300">
              View Certificates
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QualityStandards
