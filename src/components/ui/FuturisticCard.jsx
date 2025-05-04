import { useState } from 'react';
import { motion } from 'framer-motion';

const FuturisticCard = ({
  children,
  className = '',
  glowColor = 'rgba(201, 166, 100, 0.5)',
  depth = 30,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        rotateY: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Simple glow effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, transparent 70%)`,
          opacity: isHovered ? 0.5 : 0,
          filter: 'blur(15px)',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          border: '1px solid',
          borderColor: glowColor,
          opacity: isHovered ? 0.6 : 0.3,
          boxShadow: isHovered ? `0 0 15px ${glowColor}` : 'none',
          transition: 'opacity 0.3s ease, box-shadow 0.3s ease',
        }}
      />

      {/* Simplified 3D content */}
      <div
        style={{
          transform: `translateZ(${depth/2}px)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.3s ease',
        }}
      >
        {children}
      </div>

      {/* Simple reflection effect */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            opacity: 0.3,
          }}
        />
      )}
    </motion.div>
  );
};

export default FuturisticCard;
