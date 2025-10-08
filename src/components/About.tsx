"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              My expertise spans across Java development, Spring Boot, AI/ML solutions, microservices architecture, 
              and enterprise implementations. I&apos;ve successfully delivered government projects, optimized system 
              performance by 30%, and led teams across diverse technology domains. I hold a B.Tech from Manipal 
              Institute of Technology and am currently pursuing an Online MBA from Amity University. My academic 
              excellence includes the National Science Olympiad Award 2006, presented by Mr. Y.S. Rajan (ISRO 
              scientist and Dr. A.P.J. Abdul Kalam&apos;s friend), and All India Rank 239 in National Cyber Olympiad 2007.
            </motion.p>

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
                <div className="flex flex-wrap gap-2">
                  {["Core Java", "Spring Boot", "Python", "Node.js", "React", "Angular", "Next.js", "CSS"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI/ML & Data */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">AI/ML & Data</h4>
                <div className="flex flex-wrap gap-2">
                  {["AI/ML", "AI/ML Strategy", "Prompt Engineering", "Credit-Scoring Models", "Risk Modeling", "Feature Engineering", "Microsoft Power BI", "Data Visualization"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "VPS", "Linux", "Microservices", "CI/CD", "GitHub Actions", "Google Cloud Platform"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 text-sm rounded-full border border-green-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* SEO & Performance */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">SEO & Performance</h4>
                <div className="flex flex-wrap gap-2">
                  {["SEO Optimization", "Meta Tags", "Schema Markup", "Page Speed", "Core Web Vitals", "Google Analytics", "Search Console", "Performance Monitoring"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases & APIs */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Databases & APIs</h4>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "SQL", "Redis", "REST", "API Design", "Postman"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 text-sm rounded-full border border-yellow-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enterprise & Management */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Enterprise & Management</h4>
                <div className="flex flex-wrap gap-2">
                  {["ERP", "SAP", "SDLC", "Project Documentation", "Cybersecurity", "ISO 27001", "CMMI", "LMS"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 text-sm rounded-full border border-red-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Version Control */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Version Control & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-300 text-sm rounded-full border border-gray-500/30">
                      {skill}
                    </span>
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
