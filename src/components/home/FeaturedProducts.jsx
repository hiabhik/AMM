import { Link } from 'react-router-dom'
import AnimatedSection from '../utils/AnimatedSection'
import { motion } from 'framer-motion'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Aluminium Ingots',
    description: 'High-quality aluminium ingots for various industrial applications.',
    image: 'https://images.unsplash.com/photo-1605557202138-077402cf31e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    name: 'Calcined Lime',
    description: 'Premium calcined lime for construction and industrial uses.',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    name: 'Glycerin',
    description: 'Pure glycerin for pharmaceutical and personal care products.',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 4,
    name: 'Scrap',
    description: 'Recycled metal scrap for sustainable manufacturing processes.',
    image: 'https://images.unsplash.com/photo-1561635741-c416a5193b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
]

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedSection
      key={product.id}
      delay={0.2 + index * 0.1}
      className="group"
    >
      <div className="perspective-wrapper" style={{ perspective: '1000px' }}>
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-lg bg-white"
          style={{
            transformStyle: 'preserve-3d',
            transform: isHovered ? 'rotateY(5deg) rotateX(-5deg) translateZ(10px)' : 'rotateY(0) rotateX(0) translateZ(0)',
            transition: 'transform 0.3s ease'
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Card content */}
          <div className="h-48 overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: isHovered ? 'scale(1.1) translateZ(20px)' : 'scale(1) translateZ(0)',
                transition: 'transform 0.5s ease'
              }}
            />

            {/* Overlay gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
              animate={{ opacity: isHovered ? 0.7 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Card body */}
          <div className="p-6 relative">
            {/* Subtle 3D effect for text */}
            <motion.h3
              className="mb-2 text-xl font-semibold text-primary"
              style={{
                transformStyle: 'preserve-3d',
                transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)',
                transition: 'transform 0.3s ease'
              }}
            >
              {product.name}
            </motion.h3>

            <motion.p
              className="mb-4 text-gray-600"
              style={{
                transformStyle: 'preserve-3d',
                transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
                transition: 'transform 0.3s ease'
              }}
            >
              {product.description}
            </motion.p>

            <motion.div
              style={{
                transformStyle: 'preserve-3d',
                transform: isHovered ? 'translateZ(40px)' : 'translateZ(0)',
                transition: 'transform 0.3s ease'
              }}
            >
              <Link
                to={`/products#${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center px-4 py-2 rounded-md text-white bg-primary hover:bg-primary-dark font-medium transition-all duration-300"
              >
                <span>Learn More</span>
                <motion.svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </div>

          {/* 3D card effects */}
          <motion.div
            className="absolute inset-0 border border-primary-100 rounded-lg pointer-events-none"
            style={{
              transformStyle: 'preserve-3d',
              transform: isHovered ? 'translateZ(5px)' : 'translateZ(0)',
              boxShadow: isHovered ? '0 10px 30px -5px rgba(30, 58, 138, 0.3)' : '0 5px 15px -5px rgba(30, 58, 138, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
          />

          {/* Corner accents */}
          <motion.div
            className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary-300 rounded-tl-lg pointer-events-none"
            style={{
              transformStyle: 'preserve-3d',
              transform: isHovered ? 'translateZ(15px)' : 'translateZ(0)',
              transition: 'transform 0.3s ease'
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary-300 rounded-br-lg pointer-events-none"
            style={{
              transformStyle: 'preserve-3d',
              transform: isHovered ? 'translateZ(15px)' : 'translateZ(0)',
              transition: 'transform 0.3s ease'
            }}
          />
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="section py-16 bg-gray-50">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of high-quality minerals and metals for various industrial applications.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <Link to="/products" className="btn btn-primary">
            View All Products
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default FeaturedProducts
