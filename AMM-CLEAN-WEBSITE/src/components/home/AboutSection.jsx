import { motion } from 'framer-motion'

const AboutSection = () => {
  const industrialImages = [
    {
      title: 'Our Mission',
      description: 'To supply premium quality minerals and metals to steel plants, blast furnaces, and manufacturing industries worldwide with unwavering commitment to excellence.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Blast Furnace Operations',
      icon: '🏭'
    },
    {
      title: 'Our Vision',
      description: 'To become the leading global supplier of high-grade materials for steel manufacturing, electric arc furnaces, and heavy industrial applications.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Steel Manufacturing Plant',
      icon: '⚡'
    },
    {
      title: 'Our Values',
      description: 'Quality assurance, industrial safety, environmental responsibility, and customer satisfaction in every ton of material we supply to steel mills.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Steel Mill Quality Control',
      icon: '⚙️'
    }
  ]

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary mb-6">About AMM</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Anuradha Minerals and Metals (AMM) is a newly established trading company
            led by Managing Director Anuradha Singh, specializing in high-quality minerals and metals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industrialImages.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(15, 52, 96, 0.3)"
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute top-4 right-4 text-3xl bg-white/20 backdrop-blur-sm rounded-full p-2">
                  {item.icon}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                <div className="mt-4 flex items-center text-sm text-secondary font-semibold">
                  <span className="mr-2">🎯</span>
                  Steel Industry Focus
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
