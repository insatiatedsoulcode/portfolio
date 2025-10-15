"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, GraduationCap, Code, Award, Mail, PenTool, Sparkles, BookOpen, Star, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/#about", icon: User },
    { name: "Experience", href: "/#experience", icon: Briefcase },
    { name: "Education", href: "/#education", icon: GraduationCap },
    { name: "Projects", href: "/#projects", icon: Code },
    { name: "Achievements", href: "/#achievements", icon: Award },
    { name: "Testimonials", href: "/#testimonials", icon: Star },
    // { name: "Pricing", href: "/#pricing", icon: DollarSign },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "AI", href: "/ai", icon: Sparkles },
    { name: "Poetry", href: "/poetry", icon: PenTool },
    { name: "Contact", href: "/#contact", icon: Mail },
    { name: "Admin", href: "/admin", icon: Settings },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`professional-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link href="/">
              <Logo size="md" showText={true} animated={true} />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 360,
                      transition: { duration: 0.6, ease: "easeOut" }
                    }}
                    whileTap={{ 
                      scale: 0.9,
                      rotateY: 180,
                      transition: { duration: 0.3 }
                    }}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="md:hidden"
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        rotateZ: 360,
                        transition: { duration: 0.5, ease: "easeOut" }
                      }}
                      whileTap={{ 
                        scale: 0.95,
                        rotateZ: 180,
                        transition: { duration: 0.3 }
                      }}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-300 hover:text-white block px-3 py-2 rounded-full text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2 cursor-pointer"
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
