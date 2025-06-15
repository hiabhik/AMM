import { motion } from 'framer-motion'

const CompanyIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Anuradha Minerals and Metals
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A trusted name in the steel industry, AMM specializes in supplying premium raw materials 
              to blast furnaces, electric arc furnaces, and steel manufacturing facilities worldwide.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Under the leadership of Managing Director Anuradha Singh, we have established strong 
              partnerships with major steel plants and metallurgical facilities across the globe.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-sm text-gray-600">Quality Assured</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Steel Manufacturing Facility"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyIntro
