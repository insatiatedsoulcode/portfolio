"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Microservices with Spring Boot",
    excerpt: "Learn how to design and implement microservices architecture using Spring Boot, Docker, and Kubernetes for enterprise applications.",
    content: "In this comprehensive guide, we'll explore how to build scalable microservices using Spring Boot...",
    author: "Deepak Kumar Singh",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Java", "Spring Boot", "Microservices", "Docker"],
    status: "published"
  },
  {
    id: 2,
    title: "AI/ML Integration in Enterprise Applications",
    excerpt: "Discover best practices for integrating AI and Machine Learning capabilities into existing enterprise systems and workflows.",
    content: "Artificial Intelligence and Machine Learning are revolutionizing enterprise applications...",
    author: "Deepak Kumar Singh",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["AI/ML", "Enterprise", "Python", "TensorFlow"],
    status: "published"
  },
  {
    id: 3,
    title: "Modern Frontend Development with React and TypeScript",
    excerpt: "A deep dive into building robust, type-safe React applications with TypeScript, covering best practices and advanced patterns.",
    content: "TypeScript brings type safety and better developer experience to React development...",
    author: "Deepak Kumar Singh",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["React", "TypeScript", "Frontend", "JavaScript"],
    status: "published"
  },
  {
    id: 4,
    title: "DevOps Best Practices for Java Applications",
    excerpt: "Comprehensive guide to implementing DevOps practices for Java applications, including CI/CD, monitoring, and deployment strategies.",
    content: "DevOps practices are essential for modern Java application development...",
    author: "Deepak Kumar Singh",
    date: "2024-01-01",
    readTime: "15 min read",
    tags: ["DevOps", "Java", "CI/CD", "Jenkins"],
    status: "published"
  },
  {
    id: 5,
    title: "Database Design Patterns for High-Performance Applications",
    excerpt: "Explore advanced database design patterns and optimization techniques for building high-performance applications.",
    content: "Database design is crucial for application performance and scalability...",
    author: "Deepak Kumar Singh",
    date: "2023-12-28",
    readTime: "14 min read",
    tags: ["Database", "Performance", "SQL", "Architecture"],
    status: "published"
  },
  {
    id: 6,
    title: "Cloud-Native Application Development with AWS",
    excerpt: "Learn how to build and deploy cloud-native applications using AWS services, including Lambda, API Gateway, and DynamoDB.",
    content: "Cloud-native development offers scalability, reliability, and cost-effectiveness...",
    author: "Deepak Kumar Singh",
    date: "2023-12-25",
    readTime: "11 min read",
    tags: ["AWS", "Cloud Architecture", "Enterprise", "Scalability"],
    status: "coming-soon"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tech <span className="text-purple-400">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and best practices in software development, AI/ML, 
            and enterprise architecture from my 9+ years of experience
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <BookOpen size={16} className="text-purple-400" />
                  <span className="text-purple-400 text-sm font-medium">
                    {post.status === "published" ? "Published" : "Coming Soon"}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {post.title}
              </h2>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User size={14} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={14} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
              </div>

              {post.status === "published" && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
                >
                  Read Article
                </motion.button>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Latest Tech Insights
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get notified when I publish new articles about software development, 
            AI/ML, and enterprise architecture. No spam, just valuable content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}