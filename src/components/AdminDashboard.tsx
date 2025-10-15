"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LogOut, 
  MessageSquare, 
  FileText, 
  Trash2, 
  Eye,
  RefreshCw,
  Download,
  Globe,
  TrendingUp,
  BookOpen
} from "lucide-react";
import { visitorTracker } from "@/utils/visitorTracking";

interface FormSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  ip?: string;
  userAgent?: string;
}

interface AIQuery {
  id: string;
  prompt: string;
  provider: string;
  response: string;
  timestamp: string;
  userAgent?: string;
}

const AdminDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [activeTab, setActiveTab] = useState<"submissions" | "queries" | "analytics">("submissions");
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [queries, setQueries] = useState<AIQuery[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<FormSubmission | AIQuery | null>(null);
  const [visitorStats, setVisitorStats] = useState({
    totalVisits: 0,
    uniqueVisitors: 0,
    todayVisits: 0,
    blogVisits: 0,
    homePageVisits: 0
  });

  // Load data from localStorage
  useEffect(() => {
    const loadData = () => {
      try {
        // Load form submissions
        const storedSubmissions = localStorage.getItem('form_submissions');
        if (storedSubmissions) {
          setSubmissions(JSON.parse(storedSubmissions));
        }

        // Load AI queries
        const storedQueries = localStorage.getItem('ai_queries');
        if (storedQueries) {
          setQueries(JSON.parse(storedQueries));
        }

        // Load visitor stats
        const stats = {
          totalVisits: visitorTracker.getTotalVisits(),
          uniqueVisitors: visitorTracker.getUniqueVisitors(),
          todayVisits: visitorTracker.getTodayVisits(),
          blogVisits: visitorTracker.getBlogVisits(),
          homePageVisits: visitorTracker.getHomePageVisits()
        };
        setVisitorStats(stats);

        // Add some mock data if no data exists
        if (!storedSubmissions && !storedQueries) {
          const mockSubmissions: FormSubmission[] = [
            {
              id: "1",
              name: "John Doe",
              email: "john.doe@example.com",
              subject: "Freelance Opportunity",
              message: "Hi Deepak, I&apos;m interested in hiring you for a React project. Could we discuss the details?",
              timestamp: new Date().toISOString(),
              ip: "192.168.1.1",
              userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            }
          ];

          const mockQueries: AIQuery[] = [
            {
              id: "1",
              prompt: "Tell me about Deepak&apos;s experience with React and Next.js",
              provider: "openai",
              response: "Deepak has extensive experience with React and Next.js, having built multiple portfolio websites and web applications...",
              timestamp: new Date().toISOString(),
              userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            }
          ];

          setSubmissions(mockSubmissions);
          setQueries(mockQueries);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(loadData, 1000);
  }, []);

  const handleDelete = (id: string, type: "submission" | "query") => {
    if (type === "submission") {
      const updatedSubmissions = submissions.filter(item => item.id !== id);
      setSubmissions(updatedSubmissions);
      localStorage.setItem('form_submissions', JSON.stringify(updatedSubmissions));
    } else {
      const updatedQueries = queries.filter(item => item.id !== id);
      setQueries(updatedQueries);
      localStorage.setItem('ai_queries', JSON.stringify(updatedQueries));
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      (activeTab === "submissions" 
        ? "Name,Email,Subject,Message,Timestamp\n" + 
          submissions.map((item: FormSubmission) => `"${item.name}","${item.email}","${item.subject}","${item.message}","${item.timestamp}"`).join("\n")
        : "Prompt,Provider,Response,Timestamp\n" + 
          queries.map((item: AIQuery) => `"${item.prompt}","${item.provider}","${item.response}","${item.timestamp}"`).join("\n")
      );
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${activeTab}_export.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage form submissions and AI queries</p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Visitors</p>
                <p className="text-2xl font-bold text-white">{visitorStats.uniqueVisitors}</p>
                <p className="text-xs text-gray-500">{visitorStats.totalVisits} total visits</p>
              </div>
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Blog Visits</p>
                <p className="text-2xl font-bold text-white">{visitorStats.blogVisits}</p>
                <p className="text-xs text-gray-500">Blog page views</p>
              </div>
              <BookOpen className="w-8 h-8 text-purple-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Form Submissions</p>
                <p className="text-2xl font-bold text-white">{submissions.length}</p>
                <p className="text-xs text-gray-500">Contact forms</p>
              </div>
              <MessageSquare className="w-8 h-8 text-green-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Today&apos;s Activity</p>
                <p className="text-2xl font-bold text-white">{visitorStats.todayVisits}</p>
                <p className="text-xs text-gray-500">Page views today</p>
              </div>
              <TrendingUp className="w-8 h-8 text-yellow-400" />
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("submissions")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
              activeTab === "submissions"
                ? "bg-purple-600 text-white"
                : "bg-gray-800/50 text-gray-400 hover:text-white"
            }`}
          >
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Form Submissions
          </button>
          <button
            onClick={() => setActiveTab("queries")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
              activeTab === "queries"
                ? "bg-purple-600 text-white"
                : "bg-gray-800/50 text-gray-400 hover:text-white"
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            AI Queries
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
              activeTab === "analytics"
                ? "bg-purple-600 text-white"
                : "bg-gray-800/50 text-gray-400 hover:text-white"
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-2" />
            Visitor Analytics
          </button>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => {
                setIsLoading(true);
                // Reload data from localStorage
                const storedSubmissions = localStorage.getItem('form_submissions');
                const storedQueries = localStorage.getItem('ai_queries');
                
                if (storedSubmissions) {
                  setSubmissions(JSON.parse(storedSubmissions));
                }
                if (storedQueries) {
                  setQueries(JSON.parse(storedQueries));
                }

                // Reload visitor stats
                const stats = {
                  totalVisits: visitorTracker.getTotalVisits(),
                  uniqueVisitors: visitorTracker.getUniqueVisitors(),
                  todayVisits: visitorTracker.getTodayVisits(),
                  blogVisits: visitorTracker.getBlogVisits(),
                  homePageVisits: visitorTracker.getHomePageVisits()
                };
                setVisitorStats(stats);
                
                setTimeout(() => setIsLoading(false), 500);
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
            <button
              onClick={exportData}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center py-12"
            >
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
              <span className="ml-3 text-white">Loading...</span>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
            >
              {activeTab === "analytics" ? (
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Visitor Analytics</h3>
                  
                  {/* Page Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-3">Page Statistics</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Home Page</span>
                          <span className="text-white">{visitorStats.homePageVisits} visits</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Blog Page</span>
                          <span className="text-white">{visitorStats.blogVisits} visits</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Total Pages</span>
                          <span className="text-white">{visitorStats.totalVisits} visits</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-3">Visitor Overview</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Unique Visitors</span>
                          <span className="text-white">{visitorStats.uniqueVisitors}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Total Visits</span>
                          <span className="text-white">{visitorStats.totalVisits}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Today&apos;s Visits</span>
                          <span className="text-white">{visitorStats.todayVisits}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Visits */}
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">Recent Visits</h4>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {visitorTracker.getRecentVisits(10).map((visit, index) => (
                        <div key={index} className="flex justify-between items-center text-sm py-2 border-b border-gray-600/50 last:border-b-0">
                          <div>
                            <span className="text-white">{visit.page}</span>
                            <span className="text-gray-400 ml-2">
                              {new Date(visit.timestamp).toLocaleString()}
                            </span>
                          </div>
                          <div className="text-gray-400">
                            {visit.isNewVisitor ? (
                              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">New</span>
                            ) : (
                              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Returning</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : activeTab === "submissions" ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-medium">Name</th>
                        <th className="px-6 py-4 text-left text-white font-medium">Email</th>
                        <th className="px-6 py-4 text-left text-white font-medium">Subject</th>
                        <th className="px-6 py-4 text-left text-white font-medium">Date</th>
                        <th className="px-6 py-4 text-left text-white font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map((submission) => (
                        <tr key={submission.id} className="border-t border-gray-700/50 hover:bg-gray-700/30">
                          <td className="px-6 py-4 text-white">{submission.name}</td>
                          <td className="px-6 py-4 text-gray-300">{submission.email}</td>
                          <td className="px-6 py-4 text-gray-300">{submission.subject}</td>
                          <td className="px-6 py-4 text-gray-400">{formatDate(submission.timestamp)}</td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setSelectedItem(submission)}
                                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-200"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(submission.id, "submission")}
                                className="p-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors duration-200"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-medium">Prompt</th>
                        <th className="px-6 py-4 text-left text-white font-medium">Provider</th>
                        <th className="px-6 py-4 text-left text-white font-medium">Date</th>
                        <th className="px-6 py-4 text-left text-white font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {queries.map((query) => (
                        <tr key={query.id} className="border-t border-gray-700/50 hover:bg-gray-700/30">
                          <td className="px-6 py-4 text-white max-w-xs truncate">{query.prompt}</td>
                          <td className="px-6 py-4 text-gray-300 capitalize">{query.provider}</td>
                          <td className="px-6 py-4 text-gray-400">{formatDate(query.timestamp)}</td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setSelectedItem(query)}
                                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-200"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(query.id, "query")}
                                className="p-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors duration-200"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {activeTab === "submissions" ? "Form Submission Details" : "AI Query Details"}
                  </h3>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    ×
                  </button>
                </div>

                {activeTab === "submissions" ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Name</label>
                      <p className="text-white">{(selectedItem as FormSubmission).name}</p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Email</label>
                      <p className="text-white">{(selectedItem as FormSubmission).email}</p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Subject</label>
                      <p className="text-white">{(selectedItem as FormSubmission).subject}</p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Message</label>
                      <p className="text-white bg-gray-700/50 p-3 rounded-lg">
                        {(selectedItem as FormSubmission).message}
                      </p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Timestamp</label>
                      <p className="text-white">{formatDate((selectedItem as FormSubmission).timestamp)}</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Prompt</label>
                      <p className="text-white bg-gray-700/50 p-3 rounded-lg">
                        {(selectedItem as AIQuery).prompt}
                      </p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Provider</label>
                      <p className="text-white capitalize">{(selectedItem as AIQuery).provider}</p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Response</label>
                      <p className="text-white bg-gray-700/50 p-3 rounded-lg">
                        {(selectedItem as AIQuery).response}
                      </p>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Timestamp</label>
                      <p className="text-white">{formatDate((selectedItem as AIQuery).timestamp)}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;
