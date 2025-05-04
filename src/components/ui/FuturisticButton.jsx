import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FuturisticButton = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  glowIntensity = 0.5,
  hoverScale = 1.05
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define styles based on variant - simplified
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: 'linear-gradient(135deg, #0F3460, #1A4980)',
          border: '1px solid rgba(201, 166, 100, 0.3)',
          color: '#ffffff',
          boxShadow: isHovered
            ? `0 8px 20px rgba(15, 52, 96, 0.4), 0 0 15px rgba(201, 166, 100, ${glowIntensity * 0.7})`
            : '0 4px 12px rgba(15, 52, 96, 0.3)',
        };
      case 'secondary':
        return {
          background: 'rgba(15, 52, 96, 0.1)',
          border: '2px solid rgba(201, 166, 100, 0.5)',
          color: '#C9A664',
          boxShadow: isHovered
            ? `0 8px 20px rgba(0, 0, 0, 0.15), 0 0 15px rgba(201, 166, 100, ${glowIntensity * 0.7})`
            : '0 4px 12px rgba(0, 0, 0, 0.1)',
        };
      case 'ghost':
        return {
          background: 'transparent',
          border: '1px solid rgba(201, 166, 100, 0.3)',
          color: '#ffffff',
          boxShadow: isHovered
            ? `0 0 15px rgba(201, 166, 100, ${glowIntensity * 0.7})`
            : 'none',
        };
      default:
        return {
          background: 'linear-gradient(135deg, #0F3460, #1A4980)',
          border: '1px solid rgba(201, 166, 100, 0.3)',
          color: '#ffffff',
          boxShadow: isHovered
            ? `0 8px 20px rgba(15, 52, 96, 0.4), 0 0 15px rgba(201, 166, 100, ${glowIntensity * 0.7})`
            : '0 4px 12px rgba(15, 52, 96, 0.3)',
        };
    }
  };

  // Define styles based on size
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const buttonStyles = {
    ...getVariantStyles(),
    borderRadius: '50px',
    fontWeight: 600,
    transform: 'translateZ(10px)',
    transformStyle: 'preserve-3d',
    transition: 'all 0.3s ease',
  };

  // Common props for both button and link
  const commonProps = {
    className: `relative overflow-hidden ${getSizeStyles()} ${className}`,
    style: buttonStyles,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  // Simplified button content
  const ButtonContent = () => (
    <>
      {/* Simple overlay for primary buttons */}
      {variant === 'primary' && isHovered && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0F3460] via-[#C9A664] to-[#0F3460]"
          style={{
            opacity: 0.5,
            backgroundSize: '200% 100%',
          }}
        />
      )}

      {/* Text with simple hover effect */}
      <div
        className="relative z-10 flex items-center justify-center"
        style={{
          letterSpacing: isHovered ? "0.5px" : "0px",
          textShadow: isHovered ? '0 0 5px rgba(201, 166, 100, 0.4)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        {children}

        {/* Arrow for hover effect */}
        <span
          className="ml-2 transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateX(0)' : 'translateX(-5px)'
          }}
        >
          →
        </span>
      </div>
    </>
  );

  // Render as Link or button based on 'to' prop
  return to ? (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to={to} {...commonProps}>
        <ButtonContent />
      </Link>
    </motion.div>
  ) : (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...commonProps}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default FuturisticButton;
