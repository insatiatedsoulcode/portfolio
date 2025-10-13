"use client";

import dynamic from "next/dynamic";

const motion = dynamic(() => import("framer-motion").then((mod) => ({ default: mod.motion })), {
  ssr: false,
});
import { useInView } from "react-intersection-observer";
import { Trophy, Award, Star, Target, TrendingUp, Users, Zap } from "lucide-react";
import Image from "next/image";

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "National Science Olympiad Award",
      organization: "Science Olympiad Foundation",
      date: "2006",
      description: "Received National Science Olympiad Award 2006, presented by Mr. Y.S. Rajan (ISRO scientist and Dr. A.P.J. Abdul Kalam's friend), recognizing excellence in science at a young age.",
      icon: Trophy,
      type: "academic",
      impact: "Awarded by distinguished ISRO scientist and Dr. A.P.J. Abdul Kalam's friend",
      hasImage: true,
      imagePath: "/images/science-olympiad-award.jpeg",
      imageAlt: "Deepak Kumar Singh receiving National Science Olympiad award from Mr. Y.S. Rajan"
    },
    {
      title: "All India Rank 239 - National Cyber Olympiad",
      organization: "Science Olympiad Foundation",
      date: "2007",
      description: "Achieved All India Rank 239 in National Cyber Olympiad 2007, demonstrating early excellence in computer science and cyber technologies at a young age.",
      icon: Trophy,
      type: "academic",
      impact: "All India Rank 239 among 10,000+ participants"
    },
    {
      title: "Performance Enhancement Achievement",
      organization: "Multiple Projects",
      date: "2015-2025",
      description: "Achieved significant improvement in system performance by applying advanced optimization techniques across multiple projects, improving response times by 30% and reducing manual effort by 50%.",
      icon: TrendingUp,
      type: "professional",
      impact: "30% performance improvement across multiple systems"
    },
    {
      title: "Government Project Success",
      organization: "Ministry of Road Transport and Highways",
      date: "2022",
      description: "Led successful implementation of complex systems for government agencies including Fancy Number Portal & Vahaan Portal, ensuring 99.9% uptime and 100% compliance with government standards.",
      icon: Award,
      type: "professional",
      impact: "99.9% uptime and 100% compliance with government standards"
    },
    {
      title: "Team Leadership Excellence",
      organization: "Multiple Companies",
      date: "2015-2025",
      description: "Consistently improved team productivity and satisfaction through effective leadership and mentoring. Led backend refactoring initiatives, managed enterprise implementations, and conducted Java training sessions.",
      icon: Users,
      type: "professional",
      impact: "Improved team productivity and reduced onboarding time by 20%"
    },
  
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "Ongoing",
      description: "Active contributor to major open-source projects with 1000+ commits",
      icon: Star,
      type: "contribution",
      impact: "1000+ GitHub contributions"
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "6+",
      label: "Professional Certifications",
      icon: Trophy,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "1000+",
      label: "GitHub Contributions",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    {
      number: "5+",
      label: "Conference Talks",
      icon: Users,
      color: "from-green-500 to-emerald-500"
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
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements</span> & Recognition
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Milestones and recognition in my professional journey
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group ${
                  achievement.hasImage ? 'p-0 overflow-hidden' : 'p-6'
                }`}
              >
                {/* Image for achievements with photos */}
                {achievement.hasImage && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={achievement.imagePath}
                      alt={achievement.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${
                        achievement.type === 'academic' ? 'from-yellow-500 to-orange-500' :
                        achievement.type === 'award' ? 'from-yellow-500 to-orange-500' :
                        achievement.type === 'competition' ? 'from-purple-500 to-pink-500' :
                        achievement.type === 'certification' ? 'from-blue-500 to-cyan-500' :
                        achievement.type === 'contribution' ? 'from-green-500 to-emerald-500' :
                        achievement.type === 'speaking' ? 'from-indigo-500 to-purple-500' :
                        'from-pink-500 to-rose-500'
                      }`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className={`inline-block px-3 py-1 text-xs rounded-full border ${
                        achievement.type === 'academic' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                        achievement.type === 'award' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                        achievement.type === 'competition' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                        achievement.type === 'certification' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                        achievement.type === 'contribution' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                        achievement.type === 'speaking' ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' :
                        'bg-pink-500/20 text-pink-300 border-pink-500/30'
                      }`}>
                        {achievement.type}
                      </span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className={`${achievement.hasImage ? 'p-6' : ''}`}>
                  {/* Icon for achievements without photos */}
                  {!achievement.hasImage && (
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${
                        achievement.type === 'academic' ? 'from-yellow-500 to-orange-500' :
                        achievement.type === 'award' ? 'from-yellow-500 to-orange-500' :
                        achievement.type === 'competition' ? 'from-purple-500 to-pink-500' :
                        achievement.type === 'certification' ? 'from-blue-500 to-cyan-500' :
                        achievement.type === 'contribution' ? 'from-green-500 to-emerald-500' :
                        achievement.type === 'speaking' ? 'from-indigo-500 to-purple-500' :
                        'from-pink-500 to-rose-500'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-3 py-1 text-xs rounded-full border ${
                        achievement.type === 'academic' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                        achievement.type === 'award' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                        achievement.type === 'competition' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                        achievement.type === 'certification' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                        achievement.type === 'contribution' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                        achievement.type === 'speaking' ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' :
                        'bg-pink-500/20 text-pink-300 border-pink-500/30'
                      }`}>
                        {achievement.type}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <div className="text-purple-400 font-semibold mb-2">
                    {achievement.organization}
                  </div>
                  
                  <div className="text-gray-400 text-sm mb-3">
                    {achievement.date}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-green-400">
                    <Zap className="w-4 h-4 mr-2" />
                    {achievement.impact}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Achieve Great Things Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let&apos;s collaborate on your next big project and create something amazing that makes a real impact.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
