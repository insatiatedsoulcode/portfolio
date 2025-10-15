"use client";

import { useState } from "react";
// import dynamic from "next/dynamic";

// const motion = dynamic(() => import("framer-motion").then((mod) => ({ default: mod.motion })), {
//   ssr: false,
// });
import { useInView } from "react-intersection-observer";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { apiService, ContactFormData, ContactResponse } from "../services/api";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
    aiResponse?: string;
  }>({ type: null, message: "" });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Store submission in localStorage for admin dashboard
      const submission = {
        id: Date.now().toString(),
        ...formData,
        timestamp: new Date().toISOString(),
        ip: "demo_ip", // In production, get real IP
        userAgent: navigator.userAgent
      };

      // Get existing submissions
      const existingSubmissions = JSON.parse(localStorage.getItem('form_submissions') || '[]');
      existingSubmissions.push(submission);
      localStorage.setItem('form_submissions', JSON.stringify(existingSubmissions));

      // Try API call (fallback to local storage if API fails)
      try {
        const response: ContactResponse = await apiService.submitContactForm(formData);
        
        setSubmitStatus({
          type: "success",
          message: response.message,
          aiResponse: response.ai_response,
        });
      } catch {
        // API failed, but we stored locally
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
      }

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-20"
    >
      <div className="container mx-auto px-6">
        <div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-purple-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;m currently available for freelance projects.
              Send me a message and I&apos;ll respond within 2 hours.
            </p>
            
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div variants={itemVariants} className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Let&apos;s Connect
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">deepak@singhdeepak.me</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Send className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Response Time</p>
                      <p className="text-gray-300">Usually within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-300">Varanasi, Uttar Pradesh, India</p>
                      <p className="text-gray-400 text-sm">Available for remote work worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <p className="text-sm text-purple-200">
                    💡 <strong>AI-Powered:</strong> I&apos;ll receive an AI-generated response to your message, 
                    ensuring you get a quick acknowledgment while I prepare a detailed reply.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, idea, or just say hello..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Status Messages */}
                {submitStatus.type && (
                  <div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-lg border"
                    style={{
                      backgroundColor: submitStatus.type === "success" ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)",
                      borderColor: submitStatus.type === "success" ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)",
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                      )}
                      <div>
                        <p className={`font-medium ${
                          submitStatus.type === "success" ? "text-green-300" : "text-red-300"
                        }`}>
                          {submitStatus.message}
                        </p>
                        
                        {submitStatus.aiResponse && (
                          <div className="mt-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                            <p className="text-sm text-purple-200 mb-2">
                              <strong>AI Response Preview:</strong>
                            </p>
                            <p className="text-purple-100 italic">
                              &ldquo;{submitStatus.aiResponse}&rdquo;
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;