import { motion } from 'framer-motion'

const DirectorMessage = () => {
  return (
    <section className="section bg-primary text-white relative overflow-hidden">
      {/* Industrial Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Steel Plant Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Message from the <span className="text-secondary">Managing Director</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Director Image */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/anuimage.jpeg"
                alt="Anuradha Singh - Managing Director"
                className="w-full rounded-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/400x500/0F3460/C9A664?text=Anuradha+Singh';
                }}
              />
              <div className="absolute inset-0 border-2 border-secondary rounded-lg"></div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xl font-bold text-secondary">Anuradha Singh</h3>
              <p className="text-gray-300">Managing Director</p>
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary-light/50 backdrop-blur-sm p-8 rounded-lg border border-secondary/20">
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                "At Anuradha Minerals & Metals, we are committed to excellence in every aspect of our business.
                Our journey began with a vision to become a leading provider of high-quality minerals and metals,
                and today, I am proud to say that we have established ourselves as a trusted name in the industry."
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                "Our success is built on the foundation of quality, integrity, and customer satisfaction.
                We continuously strive to innovate and improve our processes to deliver products that meet
                the highest standards of quality and reliability."
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                "As we look to the future, we remain dedicated to sustainable growth and development,
                creating value for our customers, employees, and stakeholders. Thank you for your trust and support."
              </p>

              <div className="flex items-center">
                <div className="w-16 h-[2px] bg-secondary mr-4"></div>
                <p className="text-secondary font-semibold text-lg">Anuradha Singh</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DirectorMessage
