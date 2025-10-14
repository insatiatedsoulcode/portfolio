"use client";

import dynamic from "next/dynamic";

const motion = dynamic(() => import("framer-motion").then((mod) => ({ default: mod.motion })), {
  ssr: false,
});
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Zap, Users } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "AI in Credit Scoring: Business Value & Ethical Implications with GRC Integration",
      description: "A comprehensive project evaluating artificial intelligence in credit scoring, analyzing business value, ethical implications, and GRC (Governance, Risk, and Compliance) integration for EmpowerTech Solutions.",
      image: "🤖",
      technologies: ["Python", "AI/ML", "Credit Scoring Models", "GRC", "Risk Modeling", "Data Analysis", "Ethical AI"],
      features: [
        "AI-driven credit scoring model evaluation",
        "Business value assessment and ROI analysis",
        "Ethical implications and bias detection",
        "GRC integration and compliance framework",
        "Risk modeling and mitigation strategies",
        "Stakeholder recommendations and insights"
      ],
      links: {
        live: "https://qollabb.com",
        github: "https://github.com/deepakkumarsingh/ai-credit-scoring-grc"
      },
      category: "AI/ML",
      status: "completed",
      impact: "Rating: 4.75/5.00 - EmpowerTech Solutions Project"
    },
    {
      title: "College Website with LMS and EMS",
      description: "A comprehensive college website that incorporates learning management systems (LMS) and enrollment management systems (EMS) with responsive design and secure authentication.",
      image: "🎓",
      technologies: ["React", "Node.js", "MongoDB", "Authentication", "VPS", "Cloud Deployment"],
      features: [
        "Integrated LMS and EMS functionalities",
        "Responsive college website design",
        "Modular React components",
        "Secure authentication flows",
        "VPS cloud deployment",
        "Scalable and fault-tolerant architecture"
      ],
      links: {
        live: "https://www.udaypratapcollege.com",
        github: "https://github.com/deepakkumarsingh/college-website"
      },
      category: "Full Stack",
      status: "completed",
      impact: "Enhanced college digital infrastructure"
    },
    
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
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
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A showcase of my recent work and the technologies I love to work with
          </p>
        </div>

        <div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4 text-gray-300" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-purple-400" />
                    Key Features:
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600/50">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Impact */}
                <div className="flex items-center text-sm text-green-400">
                  <Users className="w-4 h-4 mr-2" />
                  {project.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/insatiatedsoulcode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-2" size={20} />
            View My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
