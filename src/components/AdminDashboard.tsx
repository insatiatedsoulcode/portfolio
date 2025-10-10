"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Mail, 
  Calendar, 
  Trash2, 
  Eye, 
  RefreshCw,
  TrendingUp,
  Clock
} from "lucide-react";

interface FormSubmission {
  submission_id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  ai_response: string;
  timestamp: string;
  ip_address?: string;
  user_agent?: string;
}

interface Statistics {
  total_submissions: number;
  unique_emails: number;
  recent_submissions: number;
  average_per_day: number;
}

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch recent submissions
      const submissionsResponse = await fetch('https://portfolio-backend-524462978803.us-central1.run.app/api/admin/submissions/recent?limit=20');
      const submissionsData = await submissionsResponse.json();
      
      // Fetch statistics
      const statsResponse = await fetch('https://portfolio-backend-524462978803.us-central1.run.app/api/admin/statistics');
      const statsData = await statsResponse.json();
      
      if (submissionsData.status === 'success') {
        setSubmissions(submissionsData.submissions);
      }
      
      if (statsData.status === 'success') {
        setStatistics(statsData.statistics);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteSubmission = async (submissionId: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;
    
    try {
      const response = await fetch(`https://portfolio-backend-524462978803.us-central1.run.app/api/admin/submissions/${submissionId}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        // Refresh the data
        fetchData();
      } else {
        alert('Failed to delete submission');
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
      alert('Error deleting submission');
    }
  };

  const viewSubmission = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    setShowDetails(true);
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-white">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Admin Dashboard
          </h1>
          <p className="text-gray-300">
            Manage and view contact form submissions from your portfolio
          </p>
        </div>

        {/* Statistics Cards */}
        {statistics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{statistics.total_submissions}</p>
                  <p className="text-gray-300">Total Submissions</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{statistics.unique_emails}</p>
                  <p className="text-gray-300">Unique Emails</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{statistics.recent_submissions}</p>
                  <p className="text-gray-300">This Week</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{statistics.average_per_day}</p>
                  <p className="text-gray-300">Avg/Day</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Submissions Table */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-white">Recent Submissions</h2>
            <button
              onClick={fetchData}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
          </div>

          {submissions.length === 0 ? (
            <div className="text-center py-12">
              <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-300 text-lg">No submissions yet</p>
              <p className="text-gray-400">Contact form submissions will appear here</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="pb-4 text-white font-medium">Name</th>
                    <th className="pb-4 text-white font-medium">Email</th>
                    <th className="pb-4 text-white font-medium">Subject</th>
                    <th className="pb-4 text-white font-medium">Date</th>
                    <th className="pb-4 text-white font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission, index) => (
                    <motion.tr
                      key={submission.submission_id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                    >
                      <td className="py-4 text-white">{submission.name}</td>
                      <td className="py-4 text-gray-300">{submission.email}</td>
                      <td className="py-4 text-gray-300 truncate max-w-xs">{submission.subject}</td>
                      <td className="py-4 text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(submission.timestamp)}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => viewSubmission(submission)}
                            className="p-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors duration-300"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteSubmission(submission.submission_id)}
                            className="p-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors duration-300"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Submission Details Modal */}
        {showDetails && selectedSubmission && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold text-white">Submission Details</h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-gray-300 text-sm">Name</label>
                  <p className="text-white font-medium">{selectedSubmission.name}</p>
                </div>

                <div>
                  <label className="text-gray-300 text-sm">Email</label>
                  <p className="text-white">{selectedSubmission.email}</p>
                </div>

                <div>
                  <label className="text-gray-300 text-sm">Subject</label>
                  <p className="text-white">{selectedSubmission.subject}</p>
                </div>

                <div>
                  <label className="text-gray-300 text-sm">Message</label>
                  <p className="text-white bg-white/5 p-4 rounded-lg">{selectedSubmission.message}</p>
                </div>

                <div>
                  <label className="text-gray-300 text-sm">AI Response</label>
                  <p className="text-green-400 bg-green-500/10 p-4 rounded-lg">{selectedSubmission.ai_response}</p>
                </div>

                <div>
                  <label className="text-gray-300 text-sm">Submitted</label>
                  <p className="text-gray-400">{formatDate(selectedSubmission.timestamp)}</p>
                </div>

                <div>
                  <label className="text-gray-300 text-sm">Submission ID</label>
                  <p className="text-gray-400 font-mono text-sm">{selectedSubmission.submission_id}</p>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    deleteSubmission(selectedSubmission.submission_id);
                    setShowDetails(false);
                  }}
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300 flex items-center space-x-2"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
