import { useState } from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({
  children,
  depth = 20,
  rotateIntensity = 10,
  floatIntensity = 15,
  glowColor = 'rgba(201, 166, 100, 0.5)',
  glowIntensity = 0.5,
  className = '',
  style = {}
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
      }}
      animate={{
        y: [0, floatIntensity/2, 0],
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Simple glow effect */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, transparent 70%)`,
          opacity: isHovered ? glowIntensity : glowIntensity * 0.5,
          filter: `blur(${glowIntensity * 15}px)`,
          transform: 'translateZ(-5px)',
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Main content with simplified 3D transform */}
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) translateZ(${depth}px)`,
        }}
        whileHover={{
          rotateX: [-rotateIntensity/2, rotateIntensity/2],
          rotateY: [rotateIntensity/2, -rotateIntensity/2],
          transition: {
            rotateX: {
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            },
            rotateY: {
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }
          }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FloatingElement;
