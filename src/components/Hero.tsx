"use client";

import { Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const [modalTimer, setModalTimer] = useState<NodeJS.Timeout | null>(null);

  // Track window scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate badge opacity and scale based on scroll position
  const maxScroll = 300; // Fade out after 300px scroll
  const badgeOpacity = Math.max(0, 1 - scrollY / maxScroll);
  const badgeScale = Math.max(0.8, 1 - (scrollY / maxScroll) * 0.2);

  // Handle availability modal
  const handleAvailabilityClick = () => {
    setShowAvailabilityModal(true);
    
    // Clear existing timer if any
    if (modalTimer) {
      clearTimeout(modalTimer);
    }
    
    // Set new timer to hide modal after 60 seconds
    const timer = setTimeout(() => {
      setShowAvailabilityModal(false);
    }, 60000);
    
    setModalTimer(timer);
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (modalTimer) {
        clearTimeout(modalTimer);
      }
    };
  }, [modalTimer]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={heroRef} id="home" className="professional-section min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            {/* Animated Hello Text */}
            <motion.div
              className="text-center lg:text-left mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-4"
                animate={{
                  opacity: [1, 0, 1],
                  color: [
                    "#10b981", // emerald
                    "#3b82f6", // blue
                    "#8b5cf6", // purple
                    "#f59e0b", // amber
                    "#ef4444", // red
                    "#06b6d4", // cyan
                    "#10b981"  // back to emerald
                  ],
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 5, // Longer duration for home page
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Hello I'm 👋
              </motion.h2>
            </motion.div>


            <motion.h1
              variants={itemVariants}
              className="text-display text-white mb-6"
            >
              Deepak Kumar
              <span className="block bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Singh
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Senior Full-Stack Software Engineer at INTECH Creative Services
              <br />
              Building innovative software solutions and leading development teams
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#contact"
                className="professional-button inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2" size={20} />
                Start a Project
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download="Deepak_Kumar_Singh_Resume.pdf"
                className="professional-button-secondary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </motion.a>
            </motion.div>
            
            {/* Professional Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              <div className="professional-stat">
                <div className="professional-stat-value">9+</div>
                <div className="professional-stat-label">Years Experience</div>
              </div>
              <div className="professional-stat">
                <div className="professional-stat-value">&lt; 2hrs</div>
                <div className="professional-stat-label">Response Time</div>
              </div>
              <div className="professional-stat">
                <div className="professional-stat-value">5.0/5</div>
                <div className="professional-stat-label">Client Rating</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6"
            >
              <motion.a
                href="https://github.com/deepakkumarsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/insatiatedsoul/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:deepak@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div className="relative">
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 relative"
                animate={{
                  rotateY: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-4 border-purple-500/30">
                  <div className="w-72 h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-6xl lg:text-8xl">👨‍💻</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xl">💡</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Side Availability Button */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={handleAvailabilityClick}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🚀</span>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.button>

      {/* Availability Modal */}
      {showAvailabilityModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAvailabilityModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAvailabilityModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Available for Projects!</h3>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white">Currently accepting new projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white">Response time: &lt; 2 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-white">5.0/5 client rating</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-white">9+ years experience</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <motion.a
                  href="#contact"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAvailabilityModal(false)}
                >
                  Start a Project
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  download="Deepak_Kumar_Singh_Resume.pdf"
                  className="block w-full bg-white/10 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </div>
              
              <p className="text-xs text-white/60 mt-4">
                This modal will auto-close in 60 seconds
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;