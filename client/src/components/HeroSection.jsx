import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
}) {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white py-20 sm:py-28 px-4 sm:px-12 md:px-20 text-center relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute -top-16 -left-16 w-28 sm:w-56 md:w-72 h-28 sm:h-56 md:h-72 bg-white opacity-10 rounded-full animate-ping pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-10 w-40 sm:w-72 md:w-96 h-40 sm:h-72 md:h-96 bg-white opacity-10 rounded-full animate-pulse pointer-events-none"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4"
      >
        {title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        {primaryBtn && (
          <Link
            to={primaryBtn.link}
            className="bg-white text-blue-600 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            {primaryBtn.text}
          </Link>
        )}
        {secondaryBtn && (
          <Link
            to={secondaryBtn.link}
            className="bg-blue-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-800 transition-all duration-300"
          >
            {secondaryBtn.text}
          </Link>
        )}
      </div>
    </div>
  );
}
