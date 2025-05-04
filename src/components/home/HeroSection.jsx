import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import FloatingElement from '../utils/FloatingElement'
import FuturisticButton from '../ui/FuturisticButton'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position as percentage of screen width/height
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.section
      ref={containerRef}
      className="relative h-screen flex items-center overflow-hidden text-dark"
      animate={controls}
      style={{ perspective: "1000px" }}
    >
      {/* Futuristic dark background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#0a0a14]"></div>

      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(15, 52, 96, 0.4) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduced number of geometric shapes - static */}
        {[...Array(5)].map((_, i) => {
          const size = 80 + (i * 20);
          const isSquare = i % 2 === 0;

          return (
            <div
              key={i}
              className="absolute"
              style={{
                width: size + 'px',
                height: size + 'px',
                top: (20 + i * 15) + '%',
                left: (10 + i * 18) + '%',
                opacity: 0.05,
                background: 'transparent',
                border: `1px solid ${i % 2 === 0 ? 'rgba(15, 52, 96, 0.2)' : 'rgba(201, 166, 100, 0.2)'}`,
                borderRadius: isSquare ? '4px' : '50%',
                boxShadow: `0 0 20px ${i % 2 === 0 ? 'rgba(15, 52, 96, 0.1)' : 'rgba(201, 166, 100, 0.1)'}`,
                transform: `translateZ(${i * 10}px) rotate(${i * 15}deg)`,
                transformStyle: 'preserve-3d',
              }}
            />
          );
        })}

        {/* Reduced number of static particles */}
        {[...Array(10)].map((_, i) => {
          const size = 2 + (i % 3);
          const isBlue = i % 2 === 0;
          const color = isBlue ? 'rgba(15, 52, 96, 0.7)' : 'rgba(201, 166, 100, 0.7)';

          return (
            <div
              key={i + 'particle'}
              className="absolute rounded-full"
              style={{
                width: size + 'px',
                height: size + 'px',
                top: (10 + i * 8) + '%',
                left: (5 + i * 9) + '%',
                opacity: 0.4,
                background: color,
                boxShadow: `0 0 ${size * 2}px ${size/2}px ${color}`,
              }}
            />
          );
        })}

        {/* Static grid lines */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 52, 96, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15, 52, 96, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Static horizontal light beam */}
        <div
          className="absolute h-[1px] w-full top-1/2 left-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(15, 52, 96, 0.6) 50%, transparent 100%)',
            boxShadow: '0 0 15px 1px rgba(15, 52, 96, 0.4)',
            opacity: 0.5,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <motion.div
            className="max-w-2xl mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="perspective-wrapper mb-6">
              <motion.div
                className="origin-left"
                style={{
                  transform: `rotateY(${(mousePosition.x - 0.5) * -5}deg) rotateX(${(mousePosition.y - 0.5) * 5}deg)`
                }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <h1 className="text-5xl font-display font-bold leading-tight md:text-6xl mb-2"
                  style={{
                    background: 'linear-gradient(to right, #ffffff, #c9a664)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 15px rgba(201, 166, 100, 0.3)'
                  }}>
                  Anuradha Minerals & Metals
                </h1>
                <p className="text-xl text-gray-300 font-medium mb-4">Delivering quality. Building trust. Shaping industries.</p>
                <p className="text-sm text-gray-400 opacity-90 mb-4">www.ammindia.in</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <FuturisticButton
                to="/products"
                variant="primary"
                size="lg"
                glowIntensity={0.7}
              >
                Explore Products
              </FuturisticButton>

              <FuturisticButton
                to="/contact"
                variant="secondary"
                size="lg"
                glowIntensity={0.6}
              >
                Contact Us
              </FuturisticButton>
            </motion.div>
          </motion.div>

          {/* Right elegant element */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FloatingElement
              depth={30}
              rotateIntensity={15}
              floatIntensity={10}
              glowColor="rgba(201, 166, 100, 0.5)"
              glowIntensity={0.7}
              className="w-80"
            >
              <div
                className="relative rounded-lg overflow-hidden p-8"
                style={{
                  background: "linear-gradient(145deg, rgba(15, 52, 96, 0.8), rgba(9, 37, 69, 0.9))",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(201, 166, 100, 0.3)",
                  backdropFilter: "blur(10px)"
                }}
              >
                {/* Company Logo */}
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    className="relative"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="text-center">
                      <span className="text-4xl font-display font-bold"
                        style={{
                          background: 'linear-gradient(to right, #c9a664, #b08d3c)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          textShadow: '0 2px 10px rgba(201, 166, 100, 0.3)'
                        }}>
                        AMM
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Company Info */}
                <div className="space-y-4">
                  {['Premium Quality Products', 'Global Supply Network', 'Industry Leading Standards', 'Trusted Since 1995'].map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-[#C9A664]"
                        animate={{
                          boxShadow: [
                            '0 0 0px rgba(201, 166, 100, 0.5)',
                            '0 0 10px rgba(201, 166, 100, 0.8)',
                            '0 0 0px rgba(201, 166, 100, 0.5)'
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                      <p className="text-white font-medium">{item}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom info */}
                <motion.div
                  className="mt-6 pt-4 border-t border-[#C9A664]/20 flex justify-between items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <p className="text-xs text-[#C9A664]">www.ammindia.in</p>
                  <p className="text-xs text-[#C9A664]">Excellence in Minerals & Metals</p>
                </motion.div>

                {/* Futuristic elements */}
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A664] to-transparent opacity-50" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A664] to-transparent opacity-50" />
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#C9A664] to-transparent opacity-50" />
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#C9A664] to-transparent opacity-50" />
              </div>
            </FloatingElement>
          </motion.div>
        </div>
      </div>

      {/* Bottom floating elements - simplified */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div
          className="flex gap-8"
        >
          {['Aluminium', 'Calcined Lime', 'Glycerin'].map((item) => (
            <div
              key={item}
              className="text-center hover:translate-y-[-5px] transition-transform duration-300"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'translateZ(10px)'
              }}
            >
              <div
                className="w-3 h-3 bg-[#C9A664] rounded-full mx-auto mb-2"
                style={{
                  boxShadow: '0 0 8px rgba(201, 166, 100, 0.6)'
                }}
              />
              <p className="text-sm text-gray-300 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Simplified decorative elements */}
      <div className="absolute bottom-10 left-10">
        <div
          className="w-16 h-16 border-l-2 border-b-2 border-[#C9A664]/40"
          style={{
            transform: 'translateZ(5px)',
            transformStyle: 'preserve-3d',
            boxShadow: '0 0 8px rgba(201, 166, 100, 0.15)'
          }}
        />
      </div>
      <div className="absolute top-10 right-10">
        <div
          className="w-16 h-16 border-t-2 border-r-2 border-[#C9A664]/40"
          style={{
            transform: 'translateZ(5px)',
            transformStyle: 'preserve-3d',
            boxShadow: '0 0 8px rgba(201, 166, 100, 0.15)'
          }}
        />
      </div>

      {/* Simplified floating elements */}
      <div className="absolute bottom-20 right-20">
        <div
          className="w-24 h-24 rounded-full backdrop-blur-md"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(15px) rotate(30deg)',
            border: '1px solid rgba(201, 166, 100, 0.4)',
            background: 'rgba(15, 52, 96, 0.1)',
            boxShadow: '0 0 15px rgba(201, 166, 100, 0.2)'
          }}
        />
      </div>
      <div className="absolute top-20 left-20">
        <div
          className="w-16 h-16 rounded-md backdrop-blur-md"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(10px) rotate(45deg)',
            border: '1px solid rgba(201, 166, 100, 0.4)',
            background: 'rgba(15, 52, 96, 0.1)',
            boxShadow: '0 0 10px rgba(201, 166, 100, 0.2)'
          }}
        />
      </div>
    </motion.section>
  )
}

export default HeroSection
