import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const DirectorMessage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position as percentage of screen width/height
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dark background with gradient */}
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

      {/* Grid lines */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 52, 96, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 52, 96, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          backgroundPosition: [`0px 0px`, `30px 30px`],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Message from the <span className="text-[#C9A664]">Managing Director</span>
          </h2>
          <div className="w-24 h-1 bg-[#C9A664] mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Director Image */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="relative rounded-lg overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 5}deg) rotateX(${(mousePosition.y - 0.5) * -5}deg)`,
                transition: 'transform 0.2s ease-out',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(201, 166, 100, 0.3)'
              }}
            >
              <img
                src="/images/anuimage.svg"
                alt="Anuradha Singh - Managing Director"
                className="w-full rounded-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/400x500/0F3460/C9A664?text=Anuradha+Singh';
                }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-[#C9A664] rounded-lg"
                animate={{
                  boxShadow: [
                    '0 0 0 rgba(201, 166, 100, 0)',
                    '0 0 20px rgba(201, 166, 100, 0.5)',
                    '0 0 0 rgba(201, 166, 100, 0)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
              />
            </motion.div>
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-bold text-[#C9A664]">Anuradha Singh</h3>
              <p className="text-gray-300">Managing Director</p>
            </motion.div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-[rgba(15,52,96,0.2)] backdrop-blur-sm p-8 rounded-lg border border-[rgba(201,166,100,0.2)]">
              <motion.div
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 2}deg) rotateX(${(mousePosition.y - 0.5) * -2}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "At Anuradha Minerals & Metals, we are committed to excellence in every aspect of our business.
                  Our journey began with a vision to become a leading provider of high-quality minerals and metals,
                  and today, I am proud to say that we have established ourselves as a trusted name in the industry."
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "Our success is built on the foundation of quality, integrity, and customer satisfaction.
                  We continuously strive to innovate and improve our processes to deliver products that meet
                  the highest standards of quality and reliability."
                </p>
                <p className="text-gray-300 leading-relaxed">
                  "As we look to the future, we remain dedicated to sustainable growth and development,
                  creating value for our customers, employees, and stakeholders. Thank you for your trust and support."
                </p>

                <motion.div
                  className="mt-8 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="w-16 h-[2px] bg-[#C9A664] mr-4"></div>
                  <p className="text-[#C9A664] font-semibold">Anuradha Singh</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-[#C9A664]/30"
        animate={{
          borderColor: ['rgba(201, 166, 100, 0.3)', 'rgba(201, 166, 100, 0.6)', 'rgba(201, 166, 100, 0.3)'],
          boxShadow: [
            '0 0 5px rgba(201, 166, 100, 0.1)',
            '0 0 15px rgba(201, 166, 100, 0.3)',
            '0 0 5px rgba(201, 166, 100, 0.1)'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-[#C9A664]/30"
        animate={{
          borderColor: ['rgba(201, 166, 100, 0.3)', 'rgba(201, 166, 100, 0.6)', 'rgba(201, 166, 100, 0.3)'],
          boxShadow: [
            '0 0 5px rgba(201, 166, 100, 0.1)',
            '0 0 15px rgba(201, 166, 100, 0.3)',
            '0 0 5px rgba(201, 166, 100, 0.1)'
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1
        }}
      />
    </section>
  );
};

export default DirectorMessage;
