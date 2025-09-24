import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./Login";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const touchStartX = useRef(0);

  const navItems = ["Home", "Service", "Contact", "About"];

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX.current - touchEndX > 80) setIsOpen(false);
    };

    const sidebar = sidebarRef.current;
    if (sidebar) {
      sidebar.addEventListener("touchstart", handleTouchStart);
      sidebar.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener("touchstart", handleTouchStart);
        sidebar.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  const handleMenuClick = () => setIsOpen(false);

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: { x: "-100%" },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 h-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-6">
        {/* Left: Logo + Desktop Menu */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            MyLogo
          </Link>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative group"
                >
                  <span className="transition-colors duration-300 group-hover:text-blue-500">
                    {item}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Login + Hamburger */}
        <div className="flex items-center space-x-4">
          <Login />
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              ref={sidebarRef}
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 rounded-r-2xl"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <span className="text-lg font-bold">Menu</span>
                <button onClick={() => setIsOpen(false)}>
                  <X size={24} className="text-gray-700" />
                </button>
              </div>

              <motion.ul className="flex flex-col p-6 space-y-6 text-gray-700 font-medium">
                {navItems.map((item, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={handleMenuClick}
                      className="relative group"
                    >
                      <span className="transition-colors duration-300 group-hover:text-blue-500">
                        {item}
                      </span>
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
