"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ExternalLink } from "lucide-react";
import { useState } from "react";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [toaster, setToaster] = useState<{show: boolean, message: string}>({show: false, message: ''});
  const [clickedDot, setClickedDot] = useState<number | null>(null);

  const showToaster = (message: string, index: number) => {
    setClickedDot(index);
    setToaster({show: true, message});
    setTimeout(() => {
      setToaster({show: false, message: ''});
      setClickedDot(null);
    }, 3000); // 3 seconds
  };

  const education = [
    {
      degree: "Online MBA",
      institution: "Amity University",
      location: "Varanasi, India",
      period: "06/2023 - 12/2025",
      grade: "Pursuing",
      description: "Pursuing Online MBA to enhance business acumen and leadership skills while continuing professional work. Focus on strategic management, operations, and business analytics.",
      achievements: [
        "Balancing full-time work with advanced business education",
        "Applying MBA concepts directly to current projects",
        "Developing strategic thinking for enterprise implementations"
      ],
      courses: ["Strategic Management", "Operations Management", "Business Analytics", "Leadership", "Finance"],
      type: "mba"
    },
    {
      degree: "Bachelor of Technology",
      institution: "Manipal Institute of Technology",
      location: "Karnataka, India",
      period: "07/2011 - 06/2015",
      grade: "Computer Science",
      description: "Completed B.Tech in Computer Science with focus on software engineering, algorithms, and system design. Built strong foundation in programming and problem-solving.",
      achievements: [
        "Implemented UTS project for Centre for Railway Information Systems in the final year major project",
        "Worked as category head in vigilance department in the cultural and technical festivals of College",
        "Implemented obstruction detection metro boggie feature for embedded systems subject"
      ],
      courses: ["Data Structures & Algorithms", "Computer Networks", "Database Systems", "Software Engineering", "Operating Systems"],
      type: "graduation"
    }
  ];

  const certifications = [
    {
      name: "Qollabb Certificate of Completion - AI in Credit Scoring",
      issuer: "Qollabb & EmpowerTech Solutions",
      date: "June 22, 2025",
      credential: "Certificate No. 07191062025 - Rating: 4.75/5.00",
      description: "Successfully completed project on 'Artificial Intelligence in Credit Scoring: Evaluating the Business Value and Ethical Implications with GRC Integration' with EmpowerTech Solutions, demonstrating practical AI/ML skills and industry knowledge",
      verificationUrl: "/images/qollabb-certificate.png",
      hasImage: false
    },
    {
      name: "DevOps Prerequisite Course",
      issuer: "KodeKloud",
      date: "September 2025",
      credential: "Credential ID: 2Z3UDF566UC4",
      description: "Comprehensive DevOps fundamentals covering essential tools and practices for modern software development and deployment",
      verificationUrl: "https://kodekloud.com/certificate/2Z3UDF566UC4",
      hasImage: false
    },
    {
      name: "Enterprise Product Management Fundamentals",
      issuer: "Microsoft",
      date: "September 28, 2025",
      credential: "Course Certificate - Completed by Deepak Singh",
      description: "Advanced product management skills focusing on enterprise-level product strategy, planning, and execution. 18 hours completion with skills in Product Requirements, Strategy, Roadmaps, Compliance Management, and Microsoft 365 integration.",
      verificationUrl: "https://coursera.org/share/7e1fbe755a0d2eb58f7483dcd81175cf",
      hasImage: false
    },
    {
      name: "Git Basics for DevOps",
      issuer: "KodeKloud",
      date: "September 2025",
      credential: "Credential ID: GRRCKLJAOE8W",
      description: "Essential Git version control skills for DevOps professionals, covering branching, merging, and collaboration workflows",
      verificationUrl: "https://coursera.org/share/087e11899f306bef11eeff4d81626779",
      hasImage: false
    },
    {
      name: "Jenkins for Beginners",
      issuer: "KodeKloud",
      date: "September 2025",
      credential: "Credential ID: 1VRFKZG4XIR5",
      description: "Introduction to Jenkins CI/CD pipeline automation, covering build automation, deployment, and continuous integration practices",
      verificationUrl: "https://kodekloud.com/certificate/1VRFKZG4XIR5",
      hasImage: false
    },
    {
      name: "Developing Front-End Apps with React",
      issuer: "IBM",
      date: "August 2025",
      credential: "Credential ID: VV12R0IBL6I6",
      description: "Advanced React development skills including component architecture, state management, and modern front-end development practices",
      verificationUrl: "https://coursera.org/share/44ac33349bac906a0c3227b4b90d7d18",
      hasImage: false
    },
    {
      name: "Machine Learning with Python",
      issuer: "IBM",
      date: "August 2025",
      credential: "Credential ID: CL51521A2YB1",
      description: "Comprehensive machine learning course covering algorithms, data preprocessing, model training, and evaluation using Python",
      verificationUrl: "https://www.credly.com/badges/CL51521A2YB1/public_url",
      hasImage: false
    },
    {
      name: "Automation and Scripting with Python",
      issuer: "Microsoft",
      date: "July 2025",
      credential: "Credential ID: PBQEG0351M0V",
      description: "Advanced Python scripting and automation techniques for system administration, testing, and process optimization",
      verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-us/PBQEG0351M0V",
      hasImage: false
    },
    {
      name: "Data Analysis and Visualization with Python",
      issuer: "Microsoft",
      date: "July 2025",
      credential: "Credential ID: C5BLVVQZD0E7",
      description: "Data analysis and visualization skills using Python libraries including pandas, matplotlib, and seaborn for business intelligence",
      verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-us/C5BLVVQZD0E7",
      hasImage: false
    },
    {
      name: "Microsoft Python Development Professional Certificate",
      issuer: "Microsoft",
      date: "July 2025",
      credential: "Credential ID: 8NVWDWDR0GGV",
      description: "Comprehensive Python development certification covering advanced programming, web development, and Microsoft development tools",
      verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-us/8NVWDWDR0GGV",
      hasImage: false
    },
    {
      name: "Python Programming Fundamentals",
      issuer: "Microsoft",
      date: "July 2025",
      credential: "Credential ID: 05MQWN5FT197",
      description: "Core Python programming concepts including syntax, data structures, object-oriented programming, and best practices",
      verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-us/05MQWN5FT197",
      hasImage: false
    },
    {
      name: "Web Development with Python",
      issuer: "Microsoft",
      date: "July 2025",
      credential: "Credential ID: EOWJ2P3DL5LW",
      description: "Full-stack web development using Python frameworks including Django and Flask for building scalable web applications",
      verificationUrl: "https://learn.microsoft.com/api/credentials/share/en-us/EOWJ2P3DL5LW",
      hasImage: false
    },
    {
      name: "Introduction to LLM",
      issuer: "Google",
      date: "April 2025",
      credential: "Credential ID: 15156340",
      description: "Understanding Large Language Models, their architecture, applications, and implementation in real-world scenarios",
      verificationUrl: "https://www.cloudskillsboost.google/public_profiles/15156340/badges",
      hasImage: false
    },
    {
      name: "Introduction to Responsible AI",
      issuer: "Google",
      date: "April 2025",
      credential: "Credential ID: 15156579",
      description: "Ethical AI development principles, bias mitigation, fairness, and responsible AI practices for enterprise applications",
      verificationUrl: "https://www.cloudskillsboost.google/public_profiles/15156579/badges",
      hasImage: false
    },
    {
      name: "AI Tutor",
      issuer: "KodeKloud",
      date: "January 2025",
      credential: "Credential ID: eb06c5ec-4a37-43fa-b854-5e1ba95407bc",
      description: "AI-powered tutoring system development and implementation for educational technology solutions",
      verificationUrl: "https://kodekloud.com/certificate/eb06c5ec-4a37-43fa-b854-5e1ba95407bc",
      hasImage: false
    },
    {
      name: "EFK Stack: Enterprise-Grade Logging and Monitoring",
      issuer: "KodeKloud",
      date: "January 2025",
      credential: "Credential ID: 71d36fb1-fd7f-4f0b-946e-cdaa55bfedf1",
      description: "Enterprise logging and monitoring using Elasticsearch, Fluentd, and Kibana for centralized logging and real-time analytics",
      verificationUrl: "https://kodekloud.com/certificate/71d36fb1-fd7f-4f0b-946e-cdaa55bfedf1",
      hasImage: false
    }
  ];

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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span> & Certifications
          </h2>
          <p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            My academic journey and professional certifications
          </p>
        </div>

        {/* Education Timeline */}
        <div
          variants={containerVariants}
          className="mb-20"
        >
          <div className="relative">
            {/* Timeline Line with 3D Effect */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-2xl shadow-purple-500/30"></div>
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400 rounded-full"></div>

            {education.map((edu, index) => (
              <div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot with Tooltip */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2">
                  {/* Timeline Dot with 3D Effect */}
                  <motion.div 
                    className="relative group cursor-pointer" 
                    onClick={() => showToaster(`${edu.degree} - ${edu.period}`, index)}
                    whileTap={{ scale: 0.8 }}
                    animate={clickedDot === index ? {
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360],
                      boxShadow: [
                        "0 0 0 0 rgba(147, 51, 234, 0.4)",
                        "0 0 0 20px rgba(147, 51, 234, 0)",
                        "0 0 0 0 rgba(147, 51, 234, 0)"
                      ]
                    } : {}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 border-white/20 shadow-2xl ${
                      edu.type === "mba" ? "shadow-purple-500/50" : "shadow-gray-500/30"
                    }`}></div>
                    <div className={`absolute top-1 left-1 w-4 h-4 rounded-full border-2 border-white ${
                      edu.type === "mba" ? "bg-gradient-to-br from-purple-400 to-pink-400" : "bg-gradient-to-br from-gray-500 to-gray-700"
                    } shadow-lg`}></div>
                    <div className={`absolute top-2 left-2 w-2 h-2 rounded-full ${
                      edu.type === "mba" ? "bg-white/60" : "bg-white/40"
                    } shadow-sm`}></div>
                    
                    {/* Ripple Effect */}
                    {clickedDot === index && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-purple-400"
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    )}
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <motion.div 
                        className="flex items-center text-xs font-medium text-white bg-gray-800/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-600/50 shadow-xl"
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        whileHover={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Calendar className="w-3 h-3 mr-2 text-purple-400" />
                        <span className="font-semibold whitespace-nowrap">{edu.period}</span>
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800/95"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 2,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(147, 51, 234, 0.1)"
                    }}
                    className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 shadow-2xl shadow-gray-900/30"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Header */}
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                        <div className="text-purple-400 font-semibold mb-2">{edu.institution}</div>
                        <div className="flex items-center text-sm text-gray-400 mb-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Award className="w-4 h-4 mr-1" />
                          {edu.grade}
                        </div>
                      </div>
                    </div>


                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Courses */}
                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Key Courses:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h3
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8"
          >
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certifications</span>
          </h3>
        </div>

        <div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-center">
                {/* Certificate Icon */}
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-sm font-bold text-white mb-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{cert.name}</h4>
                <p className="text-purple-400 font-semibold text-xs mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-xs mb-2">{cert.date}</p>
                <p className="text-gray-300 text-xs mb-2 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{cert.description}</p>
                <p className="text-xs text-gray-500 mb-2 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>{cert.credential}</p>
                
                <button 
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open(cert.verificationUrl, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toaster - Below Navigation */}
      {toaster.show && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl shadow-2xl border border-purple-400/50 backdrop-blur-sm"
        >
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-white" />
            <div>
              <p className="font-semibold text-sm">{toaster.message}</p>
              <p className="text-xs text-purple-100">Click on timeline dots to see dates</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Education;
