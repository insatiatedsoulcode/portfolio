import type { Metadata } from "next";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Blog | Deepak Kumar Singh | Java, Spring Boot, AI/ML Articles",
  description: "Technical blog featuring articles on Java development, Spring Boot, AI/ML, microservices, and software engineering best practices by Deepak Kumar Singh.",
  keywords: [
    "Java Blog", "Spring Boot Tutorial", "AI/ML Articles", "Microservices Guide", 
    "Software Engineering Blog", "DevOps Articles", "Full Stack Development",
    "Technical Writing", "Programming Tutorials", "Code Examples"
  ],
  openGraph: {
    title: "Tech Blog | Deepak Kumar Singh | Java, Spring Boot, AI/ML Articles",
    description: "Technical blog featuring articles on Java development, Spring Boot, AI/ML, microservices, and software engineering best practices.",
    type: "website",
    url: "https://singhdeepak.me/blog",
  },
};

const blogPosts = [
  {
    id: 1,
    title: "Java Performance Optimization: Advanced Techniques",
    excerpt: "Learn advanced techniques to optimize Java applications for better performance, memory management, and scalability in enterprise environments.",
    author: "Deepak Kumar Singh",
    date: "2025-01-27",
    readTime: "8 min read",
    category: "Java",
    tags: ["Java", "Performance", "Optimization", "Enterprise"],
    status: "coming-soon"
  },
  {
    id: 2,
    title: "AI Integration in Enterprise Applications",
    excerpt: "Explore how to integrate AI capabilities into existing enterprise applications using Spring Boot, microservices, and modern AI frameworks.",
    author: "Deepak Kumar Singh",
    date: "2025-02-01",
    readTime: "12 min read",
    category: "AI/ML",
    tags: ["AI", "Spring Boot", "Microservices", "Enterprise"],
    status: "coming-soon"
  },
  {
    id: 3,
    title: "Microservices Architecture Patterns",
    excerpt: "Design patterns and best practices for building scalable microservices using Spring Boot, Docker, and Kubernetes in production environments.",
    author: "Deepak Kumar Singh",
    date: "2025-02-15",
    readTime: "15 min read",
    category: "Architecture",
    tags: ["Microservices", "Spring Boot", "Docker", "Kubernetes"],
    status: "coming-soon"
  },
  {
    id: 4,
    title: "DevOps Best Practices for Java Applications",
    excerpt: "Complete guide to implementing DevOps practices for Java applications including CI/CD pipelines, monitoring, and deployment strategies.",
    author: "Deepak Kumar Singh",
    date: "2025-03-01",
    readTime: "10 min read",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Jenkins", "Docker"],
    status: "coming-soon"
  },
  {
    id: 5,
    title: "Building Scalable React Applications",
    excerpt: "Modern React development patterns, state management, and performance optimization techniques for building scalable frontend applications.",
    author: "Deepak Kumar Singh",
    date: "2025-03-15",
    readTime: "9 min read",
    category: "Frontend",
    tags: ["React", "JavaScript", "Performance", "State Management"],
    status: "coming-soon"
  },
  {
    id: 6,
    title: "AWS Cloud Architecture for Enterprise",
    excerpt: "Designing and implementing cloud-native architectures on AWS for enterprise applications with focus on scalability and cost optimization.",
    author: "Deepak Kumar Singh",
    date: "2025-04-01",
    readTime: "14 min read",
    category: "Cloud",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">
                  {post.status === "coming-soon" ? "Coming Soon" : "Published"}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Read More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 opacity-50 cursor-not-allowed"
                disabled
              >
                {post.status === "coming-soon" ? "Coming Soon" : "Read More"}
              </motion.button>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
        >
          <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Latest Articles
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get notified when I publish new articles about Java development, 
            AI/ML, microservices, and software engineering best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
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
