import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CtaSection = () => {
  return (
    <section className="section bg-secondary text-white relative overflow-hidden">
      {/* Steel Industry Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Steel Industry Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Partner with AMM?
          </motion.h2>
          <p className="text-xl mb-8 opacity-90">
            Join steel plants and manufacturing facilities worldwide who trust Anuradha Minerals and Metals
            for their blast furnace and EAF requirements. Experience excellence in steel industry supply.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <Link
                to="/contact"
                className="inline-block bg-white text-secondary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Get Steel Grade Quote
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                boxShadow: "0 20px 40px rgba(15, 52, 96, 0.3)"
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <Link
                to="/products"
                className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View Steel Products
              </Link>
            </motion.div>
          </div>

          {/* Steel Industry Stats */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'Steel Plants Served', value: '50+' },
              { label: 'Countries Reached', value: '15+' },
              { label: 'Years Experience', value: '10+' },
              { label: 'Quality Assurance', value: '100%' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.1, rotateY: 10 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaSection
