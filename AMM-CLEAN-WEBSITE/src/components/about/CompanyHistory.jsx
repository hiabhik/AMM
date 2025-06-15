import { motion } from 'framer-motion'

const CompanyHistory = () => {
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
            <h2 className="text-4xl font-bold text-primary mb-6">Our Team's Expertise</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Industry Veterans</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team comprises seasoned professionals with over 15 years of combined experience
                  in metals trading, chemical processing, and industrial supply chain management.
                  Each team member brings specialized knowledge from their previous roles in leading
                  industrial companies and trading organizations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Proven Track Record</h3>
                <p className="text-gray-700 leading-relaxed">
                  Before establishing AMM, our team members have successfully managed supply chains
                  for major industrial clients, handled complex international transactions, and built
                  strong relationships with suppliers and manufacturers across multiple countries.
                  This experience forms the foundation of our service excellence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Specialized Knowledge</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our collective expertise spans across metallurgy, chemical processing, quality control,
                  and international trade regulations. This deep understanding allows us to provide
                  comprehensive solutions and technical guidance to our clients across various industries.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="space-y-8">
              {[
                { year: '15+', event: 'Years Experience', desc: 'Combined team experience in industrial trading' },
                { year: '500+', event: 'Projects Completed', desc: 'Successful supply projects across industries' },
                { year: '50+', event: 'Client Relationships', desc: 'Strong partnerships with industrial clients' },
                { year: '10+', event: 'Countries Served', desc: 'International experience and network' },
                { year: '2024', event: 'AMM Founded', desc: 'Bringing expertise together under AMM' }
              ].map((milestone, index) => (
                <div key={milestone.year} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary">{milestone.event}</h4>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyHistory
