import {
  BarChart2,
  ListCollapse,
  ListCollapseIcon,
  Menu,
  MenuIcon,
  MenuSquare,
  Upload,
  User,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SidebarItems = [
  {
    name: "Dashboard",
    icon: BarChart2,
    color: "#6366f1",
    path: "/",
  },
  {
    name: "Upload Files",
    icon: Upload,
    color: "#EC4899",
    path: "/uploads",
  },
  {
    name: "Profile",
    icon: User,
    color: "#F59E00",
    path: "/profile",
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-200 ease-out flex-shrink-0 ${
        !isCollapsed ? `w-64` : `w-20`
      }`}
      animate={{ width: !isCollapsed ? 226 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md flex flex-col border-r border-gray-700">
        <div className="flex justify-start gap-2 items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.0 }}
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
          >
            <MenuIcon size={24} />
          </motion.button>

          <AnimatePresence>
            {!isCollapsed && (
                <motion.span
                    className={`text-xl font-semibold p-1`}
                    initial={{ opacity: 0, width: 0}}
                    animate={{ opacity: 1, width: "auto"}}
                    exit={{ opacity: 0, width: 0}}
                    transition={{ duration: 0.2, delay: 0.1 }}
                >
                    Dashboard
                </motion.span>
            )}
          </AnimatePresence>
        </div>

        <nav className="mt-8">
          {SidebarItems.map((item, index) => {
            const Icon = item.icon;

            return (
            <Link key={index} to={item.path}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-600 transition-colors mb-2">
                <Icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                    {!isCollapsed && (
                        <motion.span
                            className="ml-4 whitespace-nowrap"
                            initial={{ opacity: 0, width: 0}}
                            animate={{ opacity: 1, width: "auto"}}
                            exit={{ opacity: 0, width: 0}}
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                         { item.name }
                        </motion.span>
                    )}
                </AnimatePresence>
              </motion.div>
            </Link>

            )
          })}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
