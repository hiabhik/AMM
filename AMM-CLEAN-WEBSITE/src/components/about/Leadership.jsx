import { motion } from 'framer-motion'

const Leadership = () => {
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
          <h2 className="text-4xl font-bold text-primary mb-4">Leadership</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced leadership driving excellence in the steel industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Director Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/anuimage.jpeg"
                alt="Anuradha Singh - Managing Director"
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Director Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-primary mb-4">Anuradha Singh</h3>
            <p className="text-xl text-secondary font-semibold mb-6">Managing Director</p>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                With over a decade of experience in the steel and metals industry, Anuradha Singh 
                leads AMM with a vision to become the most trusted supplier of raw materials to 
                steel manufacturing facilities worldwide.
              </p>
              
              <p className="leading-relaxed">
                Under her leadership, AMM has established partnerships with major steel plants 
                across 15+ countries, building a reputation for reliability, quality, and deep 
                understanding of steel industry requirements.
              </p>
              
              <p className="leading-relaxed">
                Her expertise in metallurgical processes and commitment to customer satisfaction 
                has been instrumental in AMM's growth from a local supplier to a global partner 
                for the steel industry.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-gray-600">Steel Plants Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Leadership
