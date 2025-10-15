"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// Skill Icon Component with Mobile Touch Support
interface Skill {
  name: string;
  icon: string;
  color: string;
  textColor: string;
  borderColor: string;
}

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Check if this is a highlighted icon (React, Angular, AI)
  const isHighlighted = ['React', 'Angular', 'AI/ML', 'AI Strategy'].includes(skill.name);

  const handleTouchStart = () => {
    setShowTooltip(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setShowTooltip(false), 2000); // Hide after 2 seconds
  };

  return (
    <motion.div
      // ✨ Always floating (small amplitude)
      animate={{
        y: [0, -3, 0],
        rotateY: isHighlighted ? [0, 5, -5, 0] : [0, 2, -2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2, // Random delay for natural floating
      }}
      // 💡 Glow + scale on hover
      whileHover={{ 
        scale: 1.15,
        rotateY: 10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(59, 130, 246, 0.4)",
        filter: "brightness(1.2) saturate(1.3)"
      }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-12 h-12 bg-gradient-to-br ${skill.color} backdrop-blur-sm rounded-xl border ${skill.borderColor} shadow-lg cursor-pointer group overflow-hidden`}
      style={{ 
        transformStyle: "preserve-3d",
        // 💨 Hue rotation only for highlighted icons
        filter: isHighlighted ? "hue-rotate(0deg)" : "none",
      }}
      title={skill.name}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={() => {
        setShowTooltip(!showTooltip);
        setTimeout(() => setShowTooltip(false), 3000);
      }}
    >
      {/* Glow effect overlay for highlighted icons */}
      {isHighlighted && (
        <motion.div
          animate={{
            filter: "hue-rotate(360deg)",
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-blue-400/20 to-pink-400/20 rounded-xl"
        />
      )}
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.span 
          className="text-2xl"
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.2 }}
        >
          {skill.icon}
        </motion.span>
      </div>
      
      {/* Enhanced tooltip */}
      <motion.div 
        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900/95 backdrop-blur-sm text-white text-xs font-medium rounded-lg border border-gray-700/50 shadow-2xl transition-all duration-300 pointer-events-none whitespace-nowrap z-20 ${
          showTooltip ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: showTooltip || false ? 1 : 0.8, 
          opacity: showTooltip || false ? 1 : 0 
        }}
        transition={{ duration: 0.2 }}
      >
        {skill.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
      </motion.div>
      
      {/* Enhanced hover glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating particles effect for highlighted icons */}
      {isHighlighted && (
        <>
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400/60 rounded-full"
            animate={{
              y: [0, -8, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400/60 rounded-full"
            animate={{
              y: [0, -6, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 1,
            }}
          />
        </>
      )}
    </motion.div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              I&apos;m a passionate Senior Full-Stack Software Engineer with 9+ years of experience working at 
              top-tier companies like INTECH Creative Services, Complinity Technology, Tashee Linux Services, 
              Quality Council of India, and Nav Info Tech. I specialize in Java development, AI/ML solutions, 
              enterprise implementations, and government project management.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              My expertise spans across Java development, Spring Boot, AI/ML solutions, microservices architecture, 
              and enterprise implementations. I&apos;ve successfully delivered government projects, optimized system 
              performance by 30%, and led teams across diverse technology domains. I hold a B.Tech from Manipal 
              Institute of Technology and am currently pursuing an Online MBA from Amity University. My academic 
              excellence includes the National Science Olympiad Award 2006, presented by Mr. Y.S. Rajan (Former Distinguished Professor ISRO / DOS and Chairman, BOG, NIT Manipur. Member GoC M S Ramaiah UnivAS), and All India Rank 239 in National Cyber Olympiad 2007.
            </motion.p>

            {/* Location Information */}
            <motion.div
              variants={itemVariants}
              className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20"
            >
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">📍</span>
                Location & Background
              </h3>
              <p className="text-gray-300 mb-2">
                Currently based in <span className="text-blue-400 font-semibold">Varanasi</span>, 
                <span className="text-blue-400 font-semibold"> Uttar Pradesh, India</span>
              </p>
              <p className="text-gray-400 text-sm">
                Originally from the spiritual city of <span className="text-purple-400">Varanasi</span> - 
                the ancient city of temples and ghats, where tradition meets technology. 
                This cultural heritage has shaped my approach to building solutions that respect both 
                innovation and timeless values.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">9+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">1M+</div>
                <div className="text-gray-300">Users Served</div>
              </div>
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Let&apos;s Work Together
            </motion.a>
          </div>

          {/* Right Content - Skills & Hobbies */}
          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              
              {/* Programming Languages & Frameworks */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Programming & Frameworks</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Core Java", icon: "☕", color: "from-orange-500/20 to-red-500/20", textColor: "text-orange-300", borderColor: "border-orange-500/30" },
                    { name: "Spring Boot", icon: "🌱", color: "from-green-500/20 to-emerald-500/20", textColor: "text-green-300", borderColor: "border-green-500/30" },
                    { name: "Python", icon: "🐍", color: "from-yellow-500/20 to-blue-500/20", textColor: "text-yellow-300", borderColor: "border-yellow-500/30" },
                    { name: "Node.js", icon: "🟢", color: "from-green-500/20 to-lime-500/20", textColor: "text-green-300", borderColor: "border-green-500/30" },
                    { name: "React", icon: "⚛️", color: "from-blue-500/20 to-cyan-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" },
                    { name: "Angular", icon: "🅰️", color: "from-red-500/20 to-pink-500/20", textColor: "text-red-300", borderColor: "border-red-500/30" },
                    { name: "Next.js", icon: "▲", color: "from-gray-500/20 to-slate-500/20", textColor: "text-gray-300", borderColor: "border-gray-500/30" },
                    { name: "CSS", icon: "🎨", color: "from-blue-500/20 to-indigo-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" }
                  ].map((skill, index) => (
                    <SkillIcon 
                      key={index}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>

              {/* AI/ML & Data */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">AI/ML & Data</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "AI/ML", icon: "🤖", color: "from-purple-500/20 to-indigo-500/20", textColor: "text-purple-300", borderColor: "border-purple-500/30" },
                    { name: "AI Strategy", icon: "🧠", color: "from-purple-500/20 to-pink-500/20", textColor: "text-purple-300", borderColor: "border-purple-500/30" },
                    { name: "Prompt Engineering", icon: "✍️", color: "from-blue-500/20 to-purple-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" },
                    { name: "Credit Scoring", icon: "📊", color: "from-green-500/20 to-emerald-500/20", textColor: "text-green-300", borderColor: "border-green-500/30" },
                    { name: "Risk Modeling", icon: "⚖️", color: "from-red-500/20 to-pink-500/20", textColor: "text-red-300", borderColor: "border-red-500/30" },
                    { name: "Feature Engineering", icon: "⚙️", color: "from-yellow-500/20 to-orange-500/20", textColor: "text-yellow-300", borderColor: "border-yellow-500/30" },
                    { name: "Power BI", icon: "📈", color: "from-blue-500/20 to-cyan-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" },
                    { name: "Data Viz", icon: "📉", color: "from-indigo-500/20 to-purple-500/20", textColor: "text-indigo-300", borderColor: "border-indigo-500/30" }
                  ].map((skill, index) => (
                    <SkillIcon 
                      key={index}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "AWS", icon: "☁️", color: "from-orange-500/20 to-yellow-500/20", textColor: "text-orange-300", borderColor: "border-orange-500/30" },
                    { name: "Docker", icon: "🐳", color: "from-blue-500/20 to-cyan-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" },
                    { name: "Kubernetes", icon: "⚙️", color: "from-blue-500/20 to-indigo-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" },
                    { name: "Jenkins", icon: "🔧", color: "from-red-500/20 to-pink-500/20", textColor: "text-red-300", borderColor: "border-red-500/30" },
                    { name: "Terraform", icon: "🏗️", color: "from-purple-500/20 to-indigo-500/20", textColor: "text-purple-300", borderColor: "border-purple-500/30" },
                    { name: "Linux", icon: "🐧", color: "from-yellow-500/20 to-orange-500/20", textColor: "text-yellow-300", borderColor: "border-yellow-500/30" },
                    { name: "Microservices", icon: "🔗", color: "from-green-500/20 to-emerald-500/20", textColor: "text-green-300", borderColor: "border-green-500/30" },
                    { name: "CI/CD", icon: "🔄", color: "from-blue-500/20 to-purple-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" },
                    { name: "GitHub Actions", icon: "⚡", color: "from-gray-500/20 to-slate-500/20", textColor: "text-gray-300", borderColor: "border-gray-500/30" },
                    { name: "GCP", icon: "🌐", color: "from-blue-500/20 to-green-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" }
                  ].map((skill, index) => (
                    <SkillIcon 
                      key={index}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>

              {/* SEO & Performance */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">SEO & Performance</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "SEO", icon: "🔍", color: "from-indigo-500/20 to-blue-500/20", textColor: "text-indigo-300", borderColor: "border-indigo-500/30" },
                    { name: "Meta Tags", icon: "🏷️", color: "from-blue-500/20 to-cyan-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" },
                    { name: "Schema", icon: "📋", color: "from-purple-500/20 to-indigo-500/20", textColor: "text-purple-300", borderColor: "border-purple-500/30" },
                    { name: "Page Speed", icon: "⚡", color: "from-yellow-500/20 to-orange-500/20", textColor: "text-yellow-300", borderColor: "border-yellow-500/30" },
                    { name: "Web Vitals", icon: "📊", color: "from-green-500/20 to-emerald-500/20", textColor: "text-green-300", borderColor: "border-green-500/30" },
                    { name: "Analytics", icon: "📈", color: "from-red-500/20 to-pink-500/20", textColor: "text-red-300", borderColor: "border-red-500/30" },
                    { name: "Search Console", icon: "🔎", color: "from-blue-500/20 to-purple-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" },
                    { name: "Monitoring", icon: "📱", color: "from-gray-500/20 to-slate-500/20", textColor: "text-gray-300", borderColor: "border-gray-500/30" }
                  ].map((skill, index) => (
                    <SkillIcon 
                      key={index}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>

              {/* Databases & APIs */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Databases & APIs</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "MongoDB", icon: "🍃", color: "from-green-500/20 to-emerald-500/20", textColor: "text-green-300", borderColor: "border-green-500/30" },
                    { name: "SQL", icon: "🗄️", color: "from-blue-500/20 to-indigo-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" },
                    { name: "Redis", icon: "🔴", color: "from-red-500/20 to-pink-500/20", textColor: "text-red-300", borderColor: "border-red-500/30" },
                    { name: "REST", icon: "🔗", color: "from-purple-500/20 to-indigo-500/20", textColor: "text-purple-300", borderColor: "border-purple-500/30" },
                    { name: "API Design", icon: "⚙️", color: "from-yellow-500/20 to-orange-500/20", textColor: "text-yellow-300", borderColor: "border-yellow-500/30" },
                    { name: "Postman", icon: "📮", color: "from-orange-500/20 to-red-500/20", textColor: "text-orange-300", borderColor: "border-orange-500/30" }
                  ].map((skill, index) => (
                    <SkillIcon 
                      key={index}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>

              {/* Enterprise & Management */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Enterprise & Management</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "ERP", icon: "🏢", color: "from-blue-500/20 to-indigo-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" },
                    { name: "SAP", icon: "📊", color: "from-blue-500/20 to-cyan-500/20", textColor: "text-blue-300", borderColor: "border-blue-500/30" },
                    { name: "SDLC", icon: "🔄", color: "from-purple-500/20 to-pink-500/20", textColor: "text-purple-300", borderColor: "border-purple-500/30" },
                    { name: "Documentation", icon: "📝", color: "from-green-500/20 to-emerald-500/20", textColor: "text-green-300", borderColor: "border-green-500/30" },
                    { name: "Cybersecurity", icon: "🔒", color: "from-red-500/20 to-pink-500/20", textColor: "text-red-300", borderColor: "border-red-500/30" },
                    { name: "ISO 27001", icon: "🏆", color: "from-yellow-500/20 to-orange-500/20", textColor: "text-yellow-300", borderColor: "border-yellow-500/30" },
                    { name: "CMMI", icon: "📈", color: "from-indigo-500/20 to-purple-500/20", textColor: "text-indigo-300", borderColor: "border-indigo-500/30" },
                    { name: "LMS", icon: "🎓", color: "from-purple-500/20 to-indigo-500/20", textColor: "text-purple-300", borderColor: "border-purple-500/30" }
                  ].map((skill, index) => (
                    <SkillIcon 
                      key={index}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>

              {/* Version Control */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Version Control & Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Git", icon: "🌿", color: "from-orange-500/20 to-red-500/20", textColor: "text-orange-300", borderColor: "border-orange-500/30" },
                    { name: "GitHub", icon: "🐙", color: "from-gray-500/20 to-slate-500/20", textColor: "text-gray-300", borderColor: "border-gray-500/30" }
                  ].map((skill, index) => (
                    <SkillIcon 
                      key={index}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Hobbies & Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: "Poetry Writing",
                    icon: "✍️",
                    description: "Expressing thoughts through verses"
                  },
                  {
                    name: "Bike Riding",
                    icon: "🏍️",
                    description: "Exploring new places on two wheels"
                  },
                  {
                    name: "Chess",
                    icon: "♟️",
                    description: "Strategic thinking and problem-solving"
                  },
                  {
                    name: "Travel & Exploration",
                    icon: "🗺️",
                    description: "Discovering new cultures and perspectives"
                  }
                ].map((hobby, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group"
                  >
                    <div className="text-2xl mb-2">{hobby.icon}</div>
                    <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {hobby.name}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {hobby.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
