import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import apLogo from '@/assets/ap-aerospace-logo.png';

interface LogoIntroAnimationProps {
  onComplete: () => void;
}

export default function LogoIntroAnimation({ onComplete }: LogoIntroAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-aerospace-blue via-aerospace-dark to-black"
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 aerospace-grid opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-aerospace-glow rounded-full"
                animate={{
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Main Logo Animation */}
          <div className="relative text-center">
            {/* Logo with Advanced Animations */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 1], 
                rotate: [0, 360, 0], 
                opacity: [0, 1, 1] 
              }}
              transition={{ 
                duration: 2,
                times: [0, 0.6, 1],
                ease: "easeInOut"
              }}
              className="relative mb-8"
            >
              {/* Glow Effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-aerospace-glow rounded-full blur-xl"
              />
              
              {/* Logo Image */}
              <motion.img
                src={apLogo}
                alt="AP Aerospace"
                className="relative z-10 w-32 h-32 mx-auto drop-shadow-2xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 360]
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 4, repeat: Infinity, ease: "linear" }
                }}
              />
              
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-aerospace-glow rounded-full opacity-60"
              />
            </motion.div>

            {/* Company Text with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="space-y-2"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
              >
                <motion.span
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%"],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="bg-gradient-to-r from-white via-aerospace-glow to-white bg-[length:200%_100%] bg-clip-text text-transparent"
                >
                  AP AEROSPACE
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="text-aerospace-glow text-lg md:text-xl font-light tracking-widest"
              >
                Next Generation Solutions
              </motion.p>

              {/* Loading Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.4 }}
                className="mt-8 mx-auto w-64 h-1 bg-white/20 rounded-full overflow-hidden"
              >
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2.2, duration: 0.8, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-aerospace-glow to-white rounded-full"
                />
              </motion.div>
            </motion.div>

            {/* Pulse Effect */}
            <motion.div
              animate={{ 
                scale: [1, 2, 1],
                opacity: [0.2, 0, 0.2]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-aerospace-glow rounded-full -z-10"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}