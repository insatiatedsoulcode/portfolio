"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const Experience = () => {
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

  const experiences = [
    {
      title: "Senior Full-Stack Software Engineer",
      company: "INTECH Creative Services Private Limited",
      location: "Pune, India",
      period: "08/2025 - Present",
      description: "Leading development of Yard Management System (YMS) with multilingual support for global logistics operations. Specializing in creative solutions and services for enterprise clients.",
      achievements: [
        "Designed and maintained monolithic Yard Management System (YMS) with multilingual support, enabling seamless global logistics operations",
        "Optimized backend performance using Java and Spring Boot, improving response times by 30% under heavy logistics workloads",
        "Led backend refactoring initiatives to prepare for microservices architecture, improving system scalability and maintainability",
        "Collaborated with cross-functional teams to align features with business goals, ensuring 100% on-time delivery",
        "Planned transition to microservices including service decomposition, API design, and containerized deployment using Docker and Kubernetes"
      ],
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "Microservices", "API Design", "System Architecture"],
      type: "current",
      companyLogo: "🚀",
      companyWebsite: "https://intechcreative.com"
    },
    {
      title: "Implementation Manager - Enterprise | Systems Analyst | Senior Programmer",
      company: "Complinity Technology Pvt Ltd",
      location: "Gurgaon, India",
      period: "07/2022 - 06/2025",
      description: "Led enterprise-level implementations for compliance and regulatory solutions. Focused on scalable web applications and automated legal updates.",
      achievements: [
        "Designed and developed scalable web applications using Java, Spring Boot, and Angular, improving system performance by 30%",
        "Automated legal updates using JSoup, reducing manual effort by 50% and improving compliance tracking",
        "Optimized user experience by refactoring legacy UI components into reusable React components, increasing user satisfaction by 25%",
        "Managed enterprise-level implementations, reducing client onboarding time by 20% through efficient deployment plans",
        "Conducted vulnerability assessments for 10+ projects, identifying and mitigating critical IT risks, improving system security compliance"
      ],
      technologies: ["Java", "Spring Boot", "Angular", "React", "JSoup", "Enterprise Implementation", "Cybersecurity", "Vulnerability Assessment"],
      type: "previous",
      companyLogo: "🏢",
      companyWebsite: "https://complinity.com"
    },
    {
      title: "Java Developer - Team Lead",
      company: "Tashee Linux Services Pvt + National Informatics Centre",
      location: "New Delhi, India",
      period: "05/2022 - 07/2022",
      description: "Developed critical portals for the Ministry of Road Transport and Highways. Led government project implementations ensuring compliance and usability standards.",
      achievements: [
        "Developed critical portals (Fancy Number Portal & Vahaan Portal) for the Ministry of Road Transport and Highways, ensuring 99.9% uptime",
        "Authored and maintained Software Requirements Specification (SRS) documents, aligning business requirements with technical specifications",
        "Conducted stakeholder interviews and workshops to gather and analyze requirements, ensuring 100% alignment with government standards",
        "Led team of developers for government project implementations"
      ],
      technologies: ["Java", "Government Systems", "SRS Documentation", "Stakeholder Management", "Project Leadership"],
      type: "previous",
      companyLogo: "🏛️",
      companyWebsite: "https://nic.in"
    },
    {
      title: "Analyst Management Trainee",
      company: "Quality Council of India",
      location: "New Delhi, India",
      period: "02/2021 - 03/2022",
      description: "Managed ERP implementation (SAP) and IT projects for quality standards organization. Analyzed performance indicators and generated actionable insights.",
      achievements: [
        "Managed ERP implementation (SAP) and IT projects, reducing project delivery time by 15% through optimized workflows",
        "Analyzed performance indicators for Swachh Survekshan 2021, providing actionable insights that improved city sanitation KPIs by 20%",
        "Generated insights and reports for stakeholders, summarizing key findings and recommendations for urban sanitation strategies"
      ],
      technologies: ["SAP", "ERP Implementation", "Data Analysis", "Project Management", "Performance Indicators"],
      type: "previous",
      companyLogo: "📊",
      companyWebsite: "https://qcin.org"
    },
    {
      title: "Software Engineer",
      company: "Nav Info Tech",
      location: "Bhopal, India",
      period: "06/2015 - 06/2020",
      description: "Developed AI-based projects and foundational web applications. Conducted Java training sessions and created SRS documentation for government compliance.",
      achievements: [
        "Developed and documented SRS for AI-based projects, ensuring compliance with government standards",
        "Conducted Java training sessions for freshers, enhancing their skills in web development and problem-solving",
        "Created foundational web applications using Java Server Pages (JSP) and introduced Spring Boot for building APIs"
      ],
      technologies: ["Java", "JSP", "Spring Boot", "AI/ML", "SRS Documentation", "Training & Mentoring"],
      type: "previous",
      companyLogo: "💻",
      companyWebsite: "https://navinfotech.com"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
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
            Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            My professional journey and the impact I&apos;ve made along the way
          </p>
        </div>

        <div
          variants={containerVariants}
          className="relative"
        >
          {/* Timeline Line with 3D Effect */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-2xl shadow-purple-500/30"></div>
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400 rounded-full"></div>

          {experiences.map((exp, index) => (
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
                  onClick={() => showToaster(`${exp.title} - ${exp.period}`, index)}
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
                    exp.type === "current" ? "shadow-purple-500/50" : "shadow-gray-500/30"
                  }`}></div>
                  <div className={`absolute top-1 left-1 w-4 h-4 rounded-full border-2 border-white ${
                    exp.type === "current" ? "bg-gradient-to-br from-purple-400 to-pink-400" : "bg-gradient-to-br from-gray-500 to-gray-700"
                  } shadow-lg`}></div>
                  <div className={`absolute top-2 left-2 w-2 h-2 rounded-full ${
                    exp.type === "current" ? "bg-white/60" : "bg-white/40"
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
                      <span className="font-semibold whitespace-nowrap">{exp.period}</span>
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
                    <div className="text-3xl">{exp.companyLogo}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center text-purple-400 font-semibold mb-2">
                        <span>{exp.company}</span>
                        <a 
                          href={exp.companyWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 hover:text-white transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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

export default Experience;