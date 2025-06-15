import { motion } from 'framer-motion'

const TechnicalSpecs = () => {
  const specifications = [
    {
      product: 'Aluminium Ingots',
      specs: [
        { parameter: 'Purity', value: '99.7% minimum' },
        { parameter: 'Weight', value: '20-25 kg ingots' },
        { parameter: 'Standards', value: 'ASTM B209, IS 736' },
        { parameter: 'Applications', value: 'Automotive, Construction' }
      ]
    },
    {
      product: 'Aluminium Scrap',
      specs: [
        { parameter: 'Type', value: 'Clean scrap' },
        { parameter: 'Contamination', value: 'Minimal impurities' },
        { parameter: 'Condition', value: 'Sorted & graded' },
        { parameter: 'Applications', value: 'Foundries, Reprocessing' }
      ]
    },
    {
      product: 'Heavy Metal Scrap',
      specs: [
        { parameter: 'Types', value: 'Iron, Steel, Copper' },
        { parameter: 'Density', value: 'High density' },
        { parameter: 'Condition', value: 'Sorted & cleaned' },
        { parameter: 'Applications', value: 'Steel mills, Foundries' }
      ]
    },
    {
      product: 'Glycine',
      specs: [
        { parameter: 'Grade', value: 'Technical grade' },
        { parameter: 'Form', value: 'Crystalline powder' },
        { parameter: 'Purity', value: 'High purity' },
        { parameter: 'Applications', value: 'Chemical synthesis' }
      ]
    },
    {
      product: 'Briquettes',
      specs: [
        { parameter: 'Density', value: 'High compression' },
        { parameter: 'Calorific Value', value: 'High energy' },
        { parameter: 'Size', value: 'Standard size' },
        { parameter: 'Applications', value: 'Industrial heating' }
      ]
    },
    {
      product: 'Soda Ash',
      specs: [
        { parameter: 'Type', value: 'Sodium Carbonate' },
        { parameter: 'Grade', value: 'Industrial grade' },
        { parameter: 'Form', value: 'Granular/Powder' },
        { parameter: 'Applications', value: 'Glass, Water treatment' }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Technical Specifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed technical specifications for steel industry applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specifications.map((item, index) => (
            <motion.div
              key={item.product}
              className="bg-white rounded-lg shadow-sm p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-primary mb-6 text-center">{item.product}</h3>
              
              <div className="space-y-4">
                {item.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{spec.parameter}:</span>
                    <span className="text-gray-600 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <button className="text-secondary font-semibold hover:text-secondary-light transition-colors duration-300">
                  Download Datasheet
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 bg-white rounded-lg p-8 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-primary mb-6">Custom Specifications Available</h3>
          <p className="text-center text-gray-600 mb-6">
            We can customize our products to meet your specific steel plant requirements. 
            Contact our technical team for detailed discussions.
          </p>
          <div className="text-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors duration-300">
              Contact Technical Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalSpecs
