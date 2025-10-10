"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Sparkles, 
  FileText, 
  Globe, 
  Code, 
  Loader2, 
  Copy, 
  Check,
  Brain,
  Zap
} from "lucide-react";
import { apiService, AIGenerationRequest, BlogPostRequest } from "../services/api";

const AIContentGenerator = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState<"generate" | "blog">("generate");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [copied, setCopied] = useState(false);

  // Content Generation State
  const [contentRequest, setContentRequest] = useState<AIGenerationRequest>({
    prompt: "",
    provider: "openai",
    content_type: "blog_post",
    max_tokens: 500,
    temperature: 0.7,
  });

  // Blog Post Generation State
  const [blogRequest, setBlogRequest] = useState<BlogPostRequest>({
    topic: "",
    style: "professional",
    length: "medium",
    keywords: [],
    target_audience: "general",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleContentGeneration = async () => {
    if (!contentRequest.prompt.trim()) return;

    setIsGenerating(true);
    try {
      const response = await apiService.generateContent(contentRequest);
      setGeneratedContent(response.content);
    } catch (error) {
      console.error("Content generation error:", error);
      setGeneratedContent("Sorry, there was an error generating content. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleBlogGeneration = async () => {
    if (!blogRequest.topic.trim()) return;

    setIsGenerating(true);
    try {
      const response = await apiService.generateBlogPost(blogRequest);
      const blogContent = `
# ${response.title}

${response.content}

## Meta Information
- **Word Count**: ${response.word_count}
- **Reading Time**: ${response.reading_time} minutes
- **Tags**: ${response.tags.join(", ")}
- **Meta Description**: ${response.meta_description}
      `;
      setGeneratedContent(blogContent);
    } catch (error) {
      console.error("Blog generation error:", error);
      setGeneratedContent("Sorry, there was an error generating the blog post. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const contentTypes = [
    { value: "blog_post", label: "Blog Post", icon: FileText },
    { value: "email_response", label: "Email Response", icon: Globe },
    { value: "seo_description", label: "SEO Description", icon: Sparkles },
    { value: "code_snippet", label: "Code Snippet", icon: Code },
  ];

  const providers = [
    { value: "openai", label: "OpenAI GPT", icon: Brain },
    { value: "gemini", label: "Google Gemini", icon: Zap },
    { value: "claude", label: "Anthropic Claude", icon: Sparkles },
  ];

  return (
    <section
      ref={ref}
      id="ai-generator"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-20"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered <span className="text-blue-400">Content Generator</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI in content creation. Generate blog posts, 
              email responses, SEO descriptions, and code snippets using advanced AI models.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
              <button
                onClick={() => setActiveTab("generate")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "generate"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Content Generation
              </button>
              <button
                onClick={() => setActiveTab("blog")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "blog"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Blog Post Creator
              </button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  {activeTab === "generate" ? "Generate Content" : "Create Blog Post"}
                </h3>

                {activeTab === "generate" ? (
                  <div className="space-y-6">
                    {/* Content Type Selection */}
                    <div>
                      <label className="block text-white font-medium mb-3">
                        Content Type
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {contentTypes.map((type) => (
                          <button
                            key={type.value}
                            onClick={() => setContentRequest({
                              ...contentRequest,
                              content_type: type.value
                            })}
                            className={`p-3 rounded-lg border transition-all duration-300 ${
                              contentRequest.content_type === type.value
                                ? "bg-blue-600 border-blue-500 text-white"
                                : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
                            }`}
                          >
                            <type.icon className="w-5 h-5 mx-auto mb-1" />
                            <span className="text-sm">{type.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* AI Provider Selection */}
                    <div>
                      <label className="block text-white font-medium mb-3">
                        AI Provider
                      </label>
                      <div className="space-y-2">
                        {providers.map((provider) => (
                          <button
                            key={provider.value}
                            onClick={() => setContentRequest({
                              ...contentRequest,
                              provider: provider.value
                            })}
                            className={`w-full p-3 rounded-lg border transition-all duration-300 flex items-center space-x-3 ${
                              contentRequest.provider === provider.value
                                ? "bg-blue-600 border-blue-500 text-white"
                                : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
                            }`}
                          >
                            <provider.icon className="w-5 h-5" />
                            <span>{provider.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Prompt Input */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Prompt
                      </label>
                      <textarea
                        value={contentRequest.prompt}
                        onChange={(e) => setContentRequest({
                          ...contentRequest,
                          prompt: e.target.value
                        })}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Describe what you want to generate..."
                      />
                    </div>

                    {/* Advanced Options */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Max Tokens: {contentRequest.max_tokens}
                        </label>
                        <input
                          type="range"
                          min="100"
                          max="2000"
                          value={contentRequest.max_tokens}
                          onChange={(e) => setContentRequest({
                            ...contentRequest,
                            max_tokens: parseInt(e.target.value)
                          })}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Creativity: {contentRequest.temperature}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="2"
                          step="0.1"
                          value={contentRequest.temperature}
                          onChange={(e) => setContentRequest({
                            ...contentRequest,
                            temperature: parseFloat(e.target.value)
                          })}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <motion.button
                      onClick={handleContentGeneration}
                      disabled={isGenerating || !contentRequest.prompt.trim()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Generating...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          <span>Generate Content</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Blog Topic */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Blog Topic *
                      </label>
                      <input
                        type="text"
                        value={blogRequest.topic}
                        onChange={(e) => setBlogRequest({
                          ...blogRequest,
                          topic: e.target.value
                        })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="e.g., Introduction to Machine Learning"
                      />
                    </div>

                    {/* Style and Length */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Writing Style
                        </label>
                        <select
                          value={blogRequest.style}
                          onChange={(e) => setBlogRequest({
                            ...blogRequest,
                            style: e.target.value
                          })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="professional">Professional</option>
                          <option value="casual">Casual</option>
                          <option value="technical">Technical</option>
                          <option value="creative">Creative</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Length
                        </label>
                        <select
                          value={blogRequest.length}
                          onChange={(e) => setBlogRequest({
                            ...blogRequest,
                            length: e.target.value
                          })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="short">Short (300-500 words)</option>
                          <option value="medium">Medium (500-1000 words)</option>
                          <option value="long">Long (1000+ words)</option>
                        </select>
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Target Audience
                      </label>
                      <select
                        value={blogRequest.target_audience}
                        onChange={(e) => setBlogRequest({
                          ...blogRequest,
                          target_audience: e.target.value
                        })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="general">General Audience</option>
                        <option value="beginners">Beginners</option>
                        <option value="professionals">Professionals</option>
                        <option value="developers">Developers</option>
                        <option value="business">Business</option>
                      </select>
                    </div>

                    {/* Keywords */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Keywords (comma-separated)
                      </label>
                      <input
                        type="text"
                        value={blogRequest.keywords?.join(", ") || ""}
                        onChange={(e) => setBlogRequest({
                          ...blogRequest,
                          keywords: e.target.value.split(",").map(k => k.trim()).filter(k => k)
                        })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="AI, machine learning, technology"
                      />
                    </div>

                    <motion.button
                      onClick={handleBlogGeneration}
                      disabled={isGenerating || !blogRequest.topic.trim()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Creating Blog Post...</span>
                        </>
                      ) : (
                        <>
                          <FileText className="w-5 h-5" />
                          <span>Generate Blog Post</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Output Panel */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white">
                    Generated Content
                  </h3>
                  {generatedContent && (
                    <motion.button
                      onClick={copyToClipboard}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg border border-blue-500/30 transition-all duration-300"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5 text-blue-400" />
                      )}
                    </motion.button>
                  )}
                </div>

                <div className="h-96 overflow-y-auto">
                  {generatedContent ? (
                    <div className="prose prose-invert max-w-none">
                      <pre className="text-white whitespace-pre-wrap font-mono text-sm leading-relaxed">
                        {generatedContent}
                      </pre>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <div className="text-center">
                        <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>Generated content will appear here</p>
                        <p className="text-sm mt-2">Use the form to create amazing content with AI</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIContentGenerator;
