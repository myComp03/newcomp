import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { SiTelegram } from "react-icons/si"; // Telegram icon
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12">
        {/* Company Info */}
        <div className="flex-1 md:flex-[2]">
          <h2 className="text-2xl font-bold text-white mb-4">MyIT Company</h2>
          <p className="text-gray-400 leading-relaxed">
            We deliver innovative technology solutions. End-to-end services
            including web development, cloud solutions, and AI-powered systems
            tailored to your business needs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "Service", "About", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative group text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            {[
              FaFacebookF,
              FaTwitter,
              FaLinkedinIn,
              FaGithub,
              FaInstagram,
              FaWhatsapp,
              SiTelegram,
            ].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 shadow-lg 
                   transition-transform duration-300 transform hover:scale-110 hover:-rotate-6 hover:bg-blue-500 hover:text-white"
                style={{ flexBasis: "calc(25% - 1rem)" }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 border-t border-gray-700 pt-6 flex flex-col items-center justify-center text-center">
        <p className="text-gray-400 text-sm font-medium">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">MyIT Company</span>. All
          rights reserved.
        </p>
        <p className="mt-1 text-gray-500 text-xs">
          Designed & Developed with ❤️ Our Company
        </p>
      </div>
    </footer>
  );
}
