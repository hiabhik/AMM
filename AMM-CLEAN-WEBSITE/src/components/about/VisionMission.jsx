import { motion } from 'framer-motion'

const VisionMission = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide high-quality minerals and metals while maintaining the highest 
              standards of customer service and business ethics. We strive to build 
              long-lasting relationships with our clients through reliability, 
              transparency, and excellence.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be recognized as a trusted global partner in the minerals and metals 
              trading industry, known for our commitment to quality, innovation, and 
              sustainable business practices that benefit all stakeholders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
