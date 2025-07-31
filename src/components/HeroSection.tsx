import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeJsScene from './ThreeJsScene';
import aerospaceHero from '@/assets/aerospace-hero.jpg';
import apAerospaceLogo from '@/assets/ap-aerospace-logo.png';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={aerospaceHero} 
          alt="Aerospace Technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aerospace-dark/80 to-aerospace-blue/60"></div>
      </div>

      {/* Three.js Animation */}
      <div className="absolute inset-0 opacity-30">
        <ThreeJsScene />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              className="mb-8 flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <motion.div
                className="relative group"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <img 
                  src={apAerospaceLogo} 
                  alt="AP Aerospace" 
                  className="h-24 w-24 animate-float hover:animate-pulse-glow transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-aerospace-blue to-aerospace-glow opacity-20 rounded-full animate-pulse"></div>
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Next
              <span className="block text-gradient bg-gradient-to-r from-white via-aerospace-light to-aerospace-glow bg-clip-text text-transparent animate-pulse">
                Generation of
              </span>
              <span className="block">Aerospace</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The initial small-scale industries in India to receive credit for EDM process
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "var(--shadow-hover)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="btn-aerospace text-lg px-8 py-4 relative overflow-hidden group">
                  <span className="relative z-10">Explore Services</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-aerospace-glow to-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-aerospace-glow text-lg px-8 py-4 backdrop-blur-sm group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-aerospace-light mr-2" />
                  <span className="text-2xl font-bold">11+</span>
                </div>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-aerospace-light mr-2" />
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <p className="text-sm text-gray-300">Operations</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-aerospace-light mr-2" />
                  <span className="text-2xl font-bold">AS9100</span>
                </div>
                <p className="text-sm text-gray-300">Certified</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Animation Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative h-96">
              <motion.div
                className="absolute top-0 right-0 bg-white/10 backdrop-blur-md rounded-xl p-6 float-animation"
                style={{ animationDelay: '0s' }}
              >
                <h3 className="text-white font-semibold mb-2">Wire EDM</h3>
                <p className="text-gray-300 text-sm">Precision machining solutions</p>
              </motion.div>
              
              <motion.div
                className="absolute top-32 left-0 bg-white/10 backdrop-blur-md rounded-xl p-6 float-animation"
                style={{ animationDelay: '2s' }}
              >
                <h3 className="text-white font-semibold mb-2">32+ Machines</h3>
                <p className="text-gray-300 text-sm">Advanced manufacturing capacity</p>
              </motion.div>
              
              <motion.div
                className="absolute bottom-0 right-12 bg-white/10 backdrop-blur-md rounded-xl p-6 float-animation"
                style={{ animationDelay: '4s' }}
              >
                <h3 className="text-white font-semibold mb-2">Trusted Partner</h3>
                <p className="text-gray-300 text-sm">Since 2014</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}