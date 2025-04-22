// components/Topbar.jsx
import { MenuIcon, Bell, Search, User } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
// import { SidebarItems } from "./Sidebar";

const Topbar = () => {
//   const location = useLocation();
//   const currentItem = SidebarItems.find((item) => item.path === location.pathname);

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
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <User size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Topbar;