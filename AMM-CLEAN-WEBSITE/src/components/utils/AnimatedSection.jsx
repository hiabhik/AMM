import { motion } from 'framer-motion'

const AnimatedSection = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
