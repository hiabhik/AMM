import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const WhyChooseUs = () => {
  const advantages = [
    {
      title: 'Steel Industry Expertise',
      description: 'Deep understanding of blast furnace and EAF requirements with specialized knowledge of metallurgical processes.',
      icon: '🏭'
    },
    {
      title: 'Global Supply Network',
      description: 'Reliable supply chain ensuring consistent delivery to steel plants worldwide with strategic partnerships.',
      icon: '🌍'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and certification processes ensuring all materials meet steel industry specifications.',
      icon: '⚙️'
    },
    {
      title: 'Competitive Pricing',
      description: 'Cost-effective solutions without compromising on quality, helping steel plants optimize their operations.',
      icon: '💰'
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
          <h2 className="text-4xl font-bold text-primary mb-4">Why Steel Plants Choose AMM</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by major steel manufacturers for our commitment to quality, reliability, and industry expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{advantage.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary mb-6">Ready to Partner with Us?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Get Quote
            </Link>
            <Link
              to="/products"
              className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
