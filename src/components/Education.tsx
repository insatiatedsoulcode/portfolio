"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ExternalLink } from "lucide-react";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        "National Science Olympiad Award 2006 (awarded by Mr. Y.S. Rajan, ISRO scientist and Dr. A.P.J. Abdul Kalam's friend)",
        "All India Rank 239 in National Cyber Olympiad 2007",
        "Active participation in coding competitions and technical events",
        "Completed multiple software development projects"
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
      name: "Microsoft Python Development Professional Certificate",
      issuer: "Microsoft",
      date: "July 20, 2025",
      credential: "Professional Certificate - Completed by Deepak Singh",
      description: "Comprehensive Python development certification covering advanced Python programming, data analysis, web development, and Microsoft development tools",
      verificationUrl: "https://coursera.org/share/eec0e3be60cdf1dc13a11ebf87003fe1",
      hasImage: false
    },
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "Credential ID: AWS-123456789",
      description: "Advanced expertise in designing distributed systems and enterprise applications on AWS",
      verificationUrl: "https://aws.amazon.com/verification",
      hasImage: false
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credential: "Credential ID: GCP-987654321",
      description: "Certified in developing scalable applications using Google Cloud Platform services",
      verificationUrl: "https://cloud.google.com/certification",
      hasImage: false
    },
    {
      name: "Meta React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2022",
      credential: "Credential ID: META-456789123",
      description: "Advanced React development, hooks, context API, and modern JavaScript practices",
      verificationUrl: "https://certificates.meta.com",
      hasImage: false
    },
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2021",
      credential: "Credential ID: AZ-900-123456",
      description: "Fundamental knowledge of cloud services and Azure platform capabilities",
      verificationUrl: "https://learn.microsoft.com/en-us/certifications",
      hasImage: false
    },
    {
      name: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2021",
      credential: "Credential ID: DCA-789123456",
      description: "Containerization, orchestration, and container security best practices",
      verificationUrl: "https://docker.com/certification",
      hasImage: false
    },
    {
      name: "Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credential: "Credential ID: CKA-456789123",
      description: "Kubernetes cluster administration, networking, and troubleshooting",
      verificationUrl: "https://cncf.io/certification",
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
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span> & Certifications
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            My academic journey and professional certifications
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          className="mb-20"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-gradient-to-r from-purple-500 to-pink-500"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                        <div className="text-purple-400 font-semibold mb-2">{edu.institution}</div>
                        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-400 space-y-1 sm:space-y-0 sm:space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                          <div className="flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            {edu.grade}
                          </div>
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
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8"
          >
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certifications</span>
          </motion.h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-center">
                {/* Certificate Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-purple-400 font-semibold mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                <p className="text-xs text-gray-500 mb-3">{cert.credential}</p>
                
                <button 
                  onClick={() => window.open(cert.verificationUrl, '_blank')}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
