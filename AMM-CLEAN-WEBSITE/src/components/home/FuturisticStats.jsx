import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const FuturisticStats = () => {
  const [counters, setCounters] = useState({
    steelPlants: 0,
    tonnage: 0,
    countries: 0,
    satisfaction: 0
  })

  const finalValues = {
    steelPlants: 50,
    tonnage: 500,
    countries: 15,
    satisfaction: 99
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = Object.keys(finalValues).map(key => {
      const increment = finalValues[key] / steps
      let currentValue = 0

      return setInterval(() => {
        currentValue += increment
        if (currentValue >= finalValues[key]) {
          currentValue = finalValues[key]
          clearInterval(intervals.find(interval => interval === this))
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }))
      }, stepDuration)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  const stats = [
    {
      key: 'steelPlants',
      value: counters.steelPlants,
      suffix: '+',
      label: 'Steel Plants Served',
      description: 'Major steel manufacturing facilities worldwide',
      icon: '🏭',
      color: 'from-blue-500 to-primary'
    },
    {
      key: 'tonnage',
      value: counters.tonnage,
      suffix: 'K+',
      label: 'Tons Annual Capacity',
      description: 'Raw materials supplied to steel industry',
      icon: '⚖️',
      color: 'from-secondary to-yellow-500'
    },
    {
      key: 'countries',
      value: counters.countries,
      suffix: '+',
      label: 'Countries Reached',
      description: 'Global presence in steel markets',
      icon: '🌍',
      color: 'from-green-500 to-teal-500'
    },
    {
      key: 'satisfaction',
      value: counters.satisfaction,
      suffix: '%',
      label: 'Customer Satisfaction',
      description: 'Steel plants trust our quality',
      icon: '⭐',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(201, 166, 100, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(201, 166, 100, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        {/* Minimal Geometric Elements */}
        <div className="absolute top-20 left-20 w-24 h-24 border border-secondary/10 rounded-lg transform rotate-12 hidden lg:block" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-primary/10 rounded-full hidden lg:block" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-secondary/10 transform rotate-45 hidden lg:block" />
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
            Our <span className="text-secondary">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering measurable results to the global steel manufacturing industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Card Container */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-secondary/30 rounded-lg p-8 hover:border-secondary/60 transition-all duration-500 group-hover:bg-white/10">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-lg group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  {/* Number */}
                  <motion.div
                    className="text-4xl font-bold text-secondary mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.div>
                  
                  {/* Label */}
                  <h3 className="text-lg font-semibold text-white mb-3">{stat.label}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-secondary/30 transition-all duration-500" />
                
                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-secondary/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Join Our Growing Network
            </h3>
            <p className="text-gray-300 mb-6">
              Become part of the global steel manufacturing community that trusts AMM for their material needs.
            </p>
            <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Partner with Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* CSS for grid animation */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  )
}

export default FuturisticStats
