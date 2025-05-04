import { motion } from 'framer-motion';

const FuturisticBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden">
      {/* Static background with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #092545, #0F3460)',
        }}
      />

      {/* Simple grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(201, 166, 100, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(201, 166, 100, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Light effects - reduced number and complexity */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(15, 52, 96, 0.4) 0%, rgba(15, 52, 96, 0) 70%)',
            filter: 'blur(60px)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(201, 166, 100, 0.2) 0%, rgba(201, 166, 100, 0) 70%)',
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Horizontal light beam - simplified */}
      <div
        className="absolute h-[1px] w-full top-1/2 left-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(201, 166, 100, 0.6) 50%, transparent 100%)',
          boxShadow: '0 0 15px 1px rgba(201, 166, 100, 0.4)',
          opacity: 0.4,
        }}
      />

      {/* Static particles - much fewer */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.4 + 0.2,
            background: Math.random() > 0.5 ? 'rgba(15, 52, 96, 0.8)' : 'rgba(201, 166, 100, 0.8)',
            boxShadow: '0 0 5px rgba(201, 166, 100, 0.5)',
          }}
        />
      ))}
    </div>
  );
};

export default FuturisticBackground;
