import { motion } from 'framer-motion'

const ProfessionalTimeline = () => {
  const milestones = [
    {
      year: '15+',
      title: 'Industry Experience',
      description: 'Our team brings over 15 years of combined experience in metals trading, chemical processing, and industrial supply chain management.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      achievement: 'Seasoned professionals'
    },
    {
      year: '10+',
      title: 'Global Network',
      description: 'Leveraging decade-long relationships with suppliers and manufacturers across multiple countries and industrial sectors.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      achievement: 'International partnerships'
    },
    {
      year: '500+',
      title: 'Successful Projects',
      description: 'Our experienced team has successfully completed over 500 supply projects across various industries and applications.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      achievement: 'Proven track record'
    },
    {
      year: '50+',
      title: 'Industry Clients',
      description: 'Built strong relationships with 50+ industrial clients through consistent quality delivery and professional service.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      achievement: 'Trusted partnerships'
    },
    {
      year: '2024',
      title: 'AMM Establishment',
      description: 'Founded AMM to bring together our collective expertise and provide comprehensive materials supply solutions.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      achievement: 'New venture launch'
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Futuristic Background Grid */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(201, 166, 100, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(201, 166, 100, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Our Team's <span className="text-secondary">Experience</span> & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bringing together decades of industry experience to serve your materials supply needs
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary via-primary to-secondary opacity-60 hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content Card */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm border border-secondary/30 rounded-lg p-8 hover:border-secondary/60 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(201, 166, 100, 0.2)"
                    }}
                  >
                    {/* Year Badge */}
                    <div className={`inline-block bg-secondary text-primary px-4 py-2 rounded-full font-bold text-lg mb-4 ${index % 2 === 0 ? '' : 'lg:float-right lg:ml-4'}`}>
                      {milestone.year}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{milestone.description}</p>
                    
                    {/* Achievement Badge */}
                    <div className="inline-flex items-center bg-primary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                      <span className="mr-2">🏆</span>
                      {milestone.achievement}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-20 hidden lg:block">
                  <motion.div
                    className="w-6 h-6 bg-secondary rounded-full border-4 border-gray-900 shadow-lg relative"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75"></div>
                  </motion.div>
                </div>

                {/* Image Card */}
                <div className="lg:w-5/12 mt-8 lg:mt-0">
                  <motion.div
                    className="relative rounded-lg overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white font-semibold">{milestone.title}</div>
                      <div className="text-secondary text-sm">{milestone.year}</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Commitment</h3>
            <p className="text-gray-300 mb-6">
              With our combined expertise and industry knowledge, we are committed to delivering exceptional
              materials supply solutions and building long-term partnerships with our clients.
            </p>
            <div className="text-3xl font-bold text-secondary">Excellence</div>
            <div className="text-sm text-gray-400">Through Experience & Expertise</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProfessionalTimeline
