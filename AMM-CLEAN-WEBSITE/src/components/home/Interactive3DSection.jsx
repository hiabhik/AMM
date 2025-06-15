import { motion } from 'framer-motion'
import { useState } from 'react'

const Interactive3DSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const steelProcesses = [
    {
      id: 1,
      title: 'Blast Furnace',
      subtitle: 'Iron Production',
      description: 'High-temperature furnace for iron extraction',
      icon: '🏭',
      color: 'from-orange-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'Electric Arc Furnace',
      subtitle: 'Steel Melting',
      description: 'Electric-powered steel production facility',
      icon: '⚡',
      color: 'from-blue-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: 'Rolling Mill',
      subtitle: 'Steel Shaping',
      description: 'Hot and cold rolling operations',
      icon: '🔄',
      color: 'from-green-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      title: 'Quality Control',
      subtitle: 'Testing Lab',
      description: 'Advanced metallurgical testing',
      icon: '🔬',
      color: 'from-yellow-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  return (
    <section className="section bg-gray-900 text-white relative overflow-hidden">
      {/* 3D Background Grid */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(201, 166, 100, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(201, 166, 100, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'center bottom'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
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
          <h2 className="text-4xl font-bold mb-6">
            Steel Manufacturing <span className="text-secondary">Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our advanced steel production capabilities through interactive 3D visualization
          </p>
        </motion.div>

        {/* 3D Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steelProcesses.map((process, index) => (
            <motion.div
              key={process.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(process.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                scale: 1.05,
                rotateY: 15,
                rotateX: 10,
                z: 50
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Card Container */}
              <div className="relative h-80 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-secondary/30 group-hover:border-secondary/60 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${process.color} opacity-80`} />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{
                      rotateY: hoveredCard === process.id ? 360 : 0,
                      scale: hoveredCard === process.id ? 1.2 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {process.icon}
                  </motion.div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                    <p className="text-secondary font-semibold mb-2">{process.subtitle}</p>
                    <p className="text-gray-200 text-sm">{process.description}</p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: "translateZ(10px)" }}
                  />
                </div>

                {/* 3D Shadow */}
                <div 
                  className="absolute inset-0 bg-black/20 rounded-xl transform translate-y-2 translate-x-2 -z-10 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-300"
                  style={{ filter: "blur(10px)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central 3D Element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-secondary to-primary p-8 rounded-full"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 20px 40px rgba(201, 166, 100, 0.3)"
            }}
          >
            <div className="text-4xl font-bold text-white">AMM</div>
          </motion.div>
          <p className="text-secondary font-semibold mt-4">Steel Industry Excellence</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Interactive3DSection
