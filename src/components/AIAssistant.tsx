"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const motion = dynamic(() => import("framer-motion").then((mod) => ({ default: mod.motion })), {
  ssr: false,
});

const AnimatePresence = dynamic(() => import("framer-motion").then((mod) => ({ default: mod.AnimatePresence })), {
  ssr: false,
});
import { Bot, X, Send, Lightbulb, Code, Briefcase, BookOpen, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  type?: "text" | "suggestion" | "recommendation";
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your AI assistant. I can help you learn more about Deepak's work, suggest projects, or answer questions about his experience. What would you like to know?",
      sender: "ai",
      timestamp: new Date(),
      type: "text"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    {
      icon: Code,
      label: "View Projects",
      action: "Tell me about Deepak's recent projects and technologies he uses.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Briefcase,
      label: "Work Experience",
      action: "What is Deepak's professional experience and achievements?",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BookOpen,
      label: "Education",
      action: "Tell me about Deepak's educational background and certifications.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      label: "Get Recommendations",
      action: "Based on my needs, what projects or skills would you recommend?",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const message = userMessage.toLowerCase();
    
    // Simple AI responses based on keywords
    if (message.includes("project") || message.includes("work")) {
      return "Deepak has worked on several impressive projects including: 1) AI in Credit Scoring: Business Value & Ethical Implications with GRC Integration - A comprehensive project for EmpowerTech Solutions evaluating AI in credit scoring, analyzing business value, ethical implications, and GRC integration (Rating: 4.75/5.00). 2) College Website with LMS and EMS - A comprehensive college website with integrated learning and enrollment management systems, deployed on VPS cloud with responsive design and secure authentication. 3) AI-Based Credit Scoring Analysis - A sophisticated project analyzing credit scoring data using AI methodologies with Power BI dashboards and React prototype integration. 4) Yard Management System (YMS) with multilingual support for global logistics operations. 5) Government portals (Fancy Number Portal & Vahaan Portal) with 99.9% uptime. His projects showcase expertise in Java, Spring Boot, Angular, React, AI/ML, microservices architecture, and enterprise implementations. Would you like to know more about any specific project?";
    }
    
    if (message.includes("experience") || message.includes("work")) {
      return "Deepak has worked with top-tier companies including INTECH Creative Services, Complinity Technology, Tashee Linux Services, Quality Council of India, and Nav Info Tech. He's currently a Senior Full-Stack Software Engineer at INTECH Creative Services Private Limited, leading development of Yard Management System (YMS) with multilingual support. His experience spans 9+ years in Java development, AI/ML solutions, enterprise implementations, and government project management. He's successfully optimized system performance by 30% and led teams across diverse technology domains.";
    }
    
    if (message.includes("education") || message.includes("certification") || message.includes("academic")) {
      return "Deepak holds a B.Tech from Manipal Institute of Technology and is currently pursuing an Online MBA from Amity University. He received the National Science Olympiad Award 2006, presented by Mr. Y.S. Rajan (ISRO scientist and Dr. A.P.J. Abdul Kalam's friend), and achieved All India Rank 239 in National Cyber Olympiad 2007, showing early excellence in science and computer science. He has 15+ professional certifications including: DevOps Prerequisite Course (KodeKloud, Sep 2025), Enterprise Product Management Fundamentals (Microsoft, Sep 2025), Git Basics for DevOps (KodeKloud, Sep 2025), Jenkins for Beginners (KodeKloud, Sep 2025), Developing Front-End Apps with React (IBM, Aug 2025), Machine Learning with Python (IBM, Aug 2025), Automation and Scripting with Python (Microsoft, Jul 2025), Data Analysis and Visualization with Python (Microsoft, Jul 2025), Microsoft Python Development Professional Certificate (Microsoft, Jul 2025), Python Programming Fundamentals (Microsoft, Jul 2025), Web Development with Python (Microsoft, Jul 2025), Introduction to LLM (Google, Apr 2025), Introduction to Responsible AI (Google, Apr 2025), AI Tutor (KodeKloud, Jan 2025), EFK Stack: Enterprise-Grade Logging and Monitoring (KodeKloud, Jan 2025), and Qollabb Certificate of Completion - AI in Credit Scoring (Rating: 4.75/5.00, June 2025). His key professional achievements include Performance Enhancement (30% improvement across systems), Government Project Success (99.9% uptime), and Team Leadership Excellence (20% reduction in onboarding time).";
    }
    
    if (message.includes("recommend") || message.includes("suggest")) {
      return "Based on Deepak's expertise, I'd recommend projects involving: 1) Enterprise applications with Java and Spring Boot, 2) AI/ML solutions with prompt engineering, 3) Microservices architecture with API design, 4) Government compliance systems, 5) Performance optimization projects, or 6) Team leadership and mentoring initiatives. What type of project are you considering?";
    }
    
    if (message.includes("skill") || message.includes("technology")) {
      return "Deepak's key skills include: Programming & Frameworks (Core Java, Spring Boot, Python, Node.js, React, Angular, Next.js, CSS), AI/ML & Data (AI/ML Strategy, Prompt Engineering, Credit-Scoring Models, Risk Modeling, Feature Engineering, Microsoft Power BI, Data Visualization), Cloud & DevOps (AWS, Docker, Kubernetes, Jenkins, Terraform, VPS, Linux, Microservices), Databases & APIs (MongoDB, SQL, Redis, REST, API Design, Postman), Enterprise & Management (ERP, SAP, SDLC, Project Documentation, Cybersecurity, ISO 27001, CMMI, LMS), and Version Control (Git, GitHub).";
    }
    
    if (message.includes("contact") || message.includes("hire")) {
      return "You can contact Deepak through the contact form on this website or via email at deepak@example.com. He's available for freelance projects, full-time opportunities, and consulting work. He's particularly interested in innovative projects involving AI, web applications, and cloud solutions.";
    }
    
    // Default response
    const responses = [
      "That's an interesting question! Deepak has extensive experience in full-stack development and AI integration. Could you be more specific about what you'd like to know?",
      "I'd be happy to help! Deepak specializes in creating modern web applications with AI features. What aspect of his work interests you most?",
      "Great question! Based on Deepak's portfolio, he's worked on diverse projects from e-commerce platforms to AI-powered applications. What would you like to explore?",
      "I can help you learn more about Deepak's projects, skills, or experience. What specific information are you looking for?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
      type: "text"
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    const aiResponse = await generateAIResponse(inputValue);
    
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      sender: "ai",
      timestamp: new Date(),
      type: "text"
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: [
            "0 0 0 0 rgba(147, 51, 234, 0.4)",
            "0 0 0 10px rgba(147, 51, 234, 0)",
            "0 0 0 0 rgba(147, 51, 234, 0)"
          ]
        }}
        transition={{ 
          boxShadow: { duration: 2, repeat: Infinity }
        }}
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-8 z-50 w-96 h-[600px] bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                  <p className="text-white/80 text-xs">Powered by AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px]">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-gray-700/50 text-gray-100 border border-gray-600/50"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-700/50 text-gray-100 border border-gray-600/50 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 1 && (
              <div className="p-4 border-t border-gray-700/50">
                <h4 className="text-white text-sm font-medium mb-3">Quick Actions:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickAction(action.action)}
                        className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-left transition-colors duration-200 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-6 h-6 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-gray-300 text-xs">{action.label}</p>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-700/50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask me anything about Deepak's work..."
                  className="flex-1 px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
