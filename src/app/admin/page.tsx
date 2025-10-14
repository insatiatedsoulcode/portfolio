"use client";

import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/LoginForm";
import AdminDashboard from "@/components/AdminDashboard";
import { AnimatePresence } from "framer-motion";

const AdminPage = () => {
  const { isAuthenticated, login, logout, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <div key="login" className="flex items-center justify-center min-h-screen p-4">
            <LoginForm onLogin={login} isLoading={isLoading} />
          </div>
        ) : (
          <div key="dashboard">
            <AdminDashboard onLogout={logout} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminPage;
