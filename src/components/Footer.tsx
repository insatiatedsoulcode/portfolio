"use client";

import dynamic from "next/dynamic";

const motion = dynamic(() => import("framer-motion").then((mod) => ({ default: mod.motion })), {
  ssr: false,
});
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Deepak Kumar Singh</h3>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer with 9+ years of experience in crafting robust and scalable web applications.
            </p>
            <div className="flex items-center space-x-2 text-purple-400">
              <span>Made with</span>
              <div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <span>in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/#about" className="block text-gray-300 hover:text-purple-400 transition-colors">
                About Me
              </Link>
              <Link href="/#experience" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Experience
              </Link>
              <Link href="/#projects" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Projects
              </Link>
              <Link href="/ai" className="block text-gray-300 hover:text-purple-400 transition-colors">
                AI
              </Link>
              <Link href="/#contact" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Contact
              </Link>
              <Link href="/poetry" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Poetry
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/insatiatedsoulcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/insatiatedsoul/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:deepak@example.com"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-800/50 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Deepak Kumar Singh. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built with Next.js & Tailwind CSS</span>
              <span>•</span>
              <span>Deployed on Google Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
