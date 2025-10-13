"use client";

import { Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="home" className="professional-section min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">
                  👋 Hello, I&apos;m
                </span>
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-full">
                  🚀 Available for Projects
                </span>
              </div>
            </div>

            <h1 className="text-display text-white mb-6">
              Deepak Kumar
              <span className="block bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Singh
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Senior Full-Stack Software Engineer at INTECH Creative Services
              <br />
              Building innovative software solutions and leading development teams
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#contact"
                className="professional-button inline-flex items-center"
              >
                <Mail className="mr-2" size={20} />
                Start a Project
              </a>
              
              <a
                href="/resume.pdf"
                download="Deepak_Kumar_Singh_Resume.pdf"
                className="professional-button-secondary inline-flex items-center"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </div>
            
            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
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
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/deepakkumarsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/insatiatedsoul/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:deepak@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
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
              </div>
              
              {/* Floating Elements */}
              <div
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
              </div>
              
              <div
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
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
