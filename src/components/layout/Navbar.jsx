import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-dark/10'
          : ''
      }`}
      style={{
        background: scrolled
          ? 'rgba(10, 10, 20, 0.85)'
          : 'rgba(10, 10, 20, 0.7)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled
          ? '0 4px 30px rgba(15, 52, 96, 0.2), 0 0 10px rgba(201, 166, 100, 0.1)'
          : '0 4px 20px rgba(0, 0, 0, 0.1)',
        transformStyle: 'preserve-3d',
        borderBottom: scrolled
          ? '1px solid rgba(201, 166, 100, 0.2)'
          : '1px solid rgba(201, 166, 100, 0.1)'
      }}
    >
      <div className="container flex items-center justify-between py-4 px-[10%]">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            animate={{ rotateY: [0, 5, 0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(10px)'
            }}
          >
            <img
              src="/images/amm-logo-simple.svg"
              alt="Anuradha Minerals & Metals"
              className="h-12 w-auto"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
              }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative ml-[30px]"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[1rem] font-medium transition-all duration-300 relative flex items-center ${
                      isActive
                        ? 'text-primary'
                        : 'text-dark-light hover:text-primary'
                    }`
                  }
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(10px)'
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <motion.span
                        className="relative z-10"
                        whileHover={{
                          scale: 1.05,
                          color: '#C9A664',
                          textShadow: '0 0 8px rgba(201, 166, 100, 0.5)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {link.name}
                      </motion.span>

                      {/* Futuristic underline effect */}
                      <motion.span
                        className="absolute left-0 bottom-[-5px] h-[2px]"
                        style={{
                          background: isActive
                            ? 'linear-gradient(90deg, #0F3460, #C9A664, #0F3460)'
                            : 'rgba(201, 166, 100, 0.7)',
                          boxShadow: isActive
                            ? '0 0 10px rgba(201, 166, 100, 0.5)'
                            : 'none',
                          backgroundSize: '200% 100%'
                        }}
                        initial={{ width: isActive ? '100%' : '0%' }}
                        animate={{
                          width: isActive ? '100%' : '0%',
                          backgroundPosition: isActive ? ['0% 50%', '100% 50%'] : '0% 50%'
                        }}
                        whileHover={{
                          width: '100%',
                          boxShadow: '0 0 15px rgba(201, 166, 100, 0.7)',
                          transition: { duration: 0.2 }
                        }}
                        transition={{
                          duration: 0.3,
                          backgroundPosition: {
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'linear'
                          }
                        }}
                      />
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="p-2 md:hidden relative"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          whileTap={{ scale: 0.9 }}
          style={{
            color: '#0F3460',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(10px)'
          }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-dark/10 relative overflow-hidden"
            style={{
              background: 'rgba(10, 10, 20, 0.9)',
              backdropFilter: 'blur(15px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(15, 52, 96, 0.1)',
              borderTop: '1px solid rgba(201, 166, 100, 0.2)',
              borderBottom: '1px solid rgba(201, 166, 100, 0.2)'
            }}
          >
            <nav className="container py-6 relative z-10">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="overflow-hidden"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: 'translateZ(5px)'
                    }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block text-lg transition-all duration-300 relative px-4 py-3 ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-300 hover:text-white'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      {({ isActive }) => (
                        <motion.div
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <motion.span
                            whileHover={{
                              scale: 1.05,
                              color: '#C9A664',
                              textShadow: '0 0 8px rgba(201, 166, 100, 0.5)'
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            {link.name}
                          </motion.span>

                          {/* Futuristic underline effect */}
                          <motion.span
                            className="absolute left-4 bottom-1 h-[2px]"
                            style={{
                              background: isActive
                                ? 'linear-gradient(90deg, #0F3460, #C9A664, #0F3460)'
                                : 'rgba(201, 166, 100, 0.7)',
                              boxShadow: isActive
                                ? '0 0 10px rgba(201, 166, 100, 0.5)'
                                : 'none',
                              backgroundSize: '200% 100%',
                              width: isActive ? '30px' : '0px'
                            }}
                            animate={{
                              width: isActive ? '30px' : '0px',
                              backgroundPosition: isActive ? ['0% 50%', '100% 50%'] : '0% 50%'
                            }}
                            whileHover={{
                              width: '30px',
                              boxShadow: '0 0 15px rgba(201, 166, 100, 0.7)'
                            }}
                            transition={{
                              duration: 0.3,
                              backgroundPosition: {
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'linear'
                              }
                            }}
                          />
                        </motion.div>
                      )}
                    </NavLink>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  className="pt-4"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(10px)'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      to="/contact"
                      className="block w-full text-center mt-4"
                      onClick={closeMenu}
                      style={{
                        padding: '12px 30px',
                        background: 'linear-gradient(135deg, #1A4980, #0F3460)',
                        color: '#ffffff',
                        fontWeight: 600,
                        borderRadius: '50px',
                        boxShadow: '0 4px 15px rgba(15, 52, 96, 0.3)'
                      }}
                    >
                      <motion.span
                        className="relative z-10"
                        whileHover={{ letterSpacing: "0.5px" }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        Explore Products
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
