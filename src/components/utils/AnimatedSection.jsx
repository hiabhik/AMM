import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0.2,
  duration = 0.5,
  distance = 50,
  direction = 'up',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  // Set initial and animate properties based on direction
  let initial = { opacity: 0 }
  if (direction === 'up') initial.y = distance
  if (direction === 'down') initial.y = -distance
  if (direction === 'left') initial.x = distance
  if (direction === 'right') initial.x = -distance

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={initial}
        animate={
          isVisible
            ? { opacity: 1, x: 0, y: 0 }
            : initial
        }
        transition={{
          duration,
          delay,
          ease: 'easeOut'
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default AnimatedSection
