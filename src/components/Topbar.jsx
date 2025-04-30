// components/Topbar.jsx
import { useState } from 'react'
import { MenuIcon, Bell, Search, User } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()

  function handleProfile() {
    navigate('/profile')
    setShowDropdown(false);
  }

  function handleLogout() {
    navigate('/auth/login')
    setShowDropdown(false)
  }


  return (
    <motion.div
      className="h-16 w-full bg-gray-800 bg-opacity-50 backdrop-blur-md border-b border-gray-700 flex items-center px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.99 }}
            className="relative"
          >
            <label className="relative block">
              <input
                className="bg-gray-700 text-sm text-gray-100 h-10 w-48 md:w-56 px-4 pr-10 rounded-full border border-gray-600 
          focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 transition-all duration-200"
                type="text"
                name="search"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search
                  size={20}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                />
              </div>
            </label>
          </motion.div>
        </div>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors relative"
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </motion.button>
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <User size={20} />
            </motion.button>

            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700"
              >
                <div className="p-2">
                  <button
                    onClick={handleProfile}
                    className="w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md text-left transition-colors"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-md text-left transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Topbar;
