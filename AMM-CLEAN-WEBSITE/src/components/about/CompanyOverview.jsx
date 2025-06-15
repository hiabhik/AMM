import { motion } from 'framer-motion'

const CompanyOverview = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Our Company</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Anuradha Minerals and Metals (AMM) was established to serve the steel manufacturing
              industry with premium raw materials for blast furnaces, electric arc furnaces, and
              metallurgical processes. Under the leadership of Managing Director Anuradha Singh,
              we have built strong partnerships with steel plants worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Specializing in steel mill grade materials, we supply blast furnace operators,
              EAF facilities, and metallurgical plants with certified raw materials that meet
              the most stringent steel industry specifications.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Industries Served', value: '6+' },
                { label: 'Product Categories', value: '4' },
                { label: 'Quality Standards', value: '100%' },
                { label: 'Customer Satisfaction', value: '99%' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-lg shadow-sm border border-secondary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Steel Manufacturing Background */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Blast Furnace Operations"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />

              {/* Director Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-2">Managing Director</h3>
                <p className="text-white font-bold mb-2">Anuradha Singh</p>
                <p className="text-gray-200 text-sm">
                  Leading AMM with expertise in steel industry requirements, ensuring
                  premium materials for blast furnaces and steel manufacturing worldwide.
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-secondary/30">
              <span className="text-2xl">🏭</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
              <span className="text-xl">⚙️</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview
