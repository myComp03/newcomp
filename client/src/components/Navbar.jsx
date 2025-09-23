import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";   // ✅ import Link
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const touchStartX = useRef(0);

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

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Left: Logo + Menu */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold text-blue-600">MyLogo</Link>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/service" className="hover:text-blue-500">Service</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          </ul>
        </div>

        {/* Right: Sign Up + Hamburger */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Sign Up
          </button>
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        <ul className="flex flex-col p-6 space-y-6 text-gray-700 font-medium">
          <li><Link to="/" onClick={handleMenuClick} className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/service" onClick={handleMenuClick} className="hover:text-blue-500">Service</Link></li>
          <li><Link to="/contact" onClick={handleMenuClick} className="hover:text-blue-500">Contact</Link></li>
          <li><Link to="/about" onClick={handleMenuClick} className="hover:text-blue-500">About</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
