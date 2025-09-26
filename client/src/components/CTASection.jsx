import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection({ title, desc, button }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white py-16 sm:py-20 px-4 sm:px-12 text-center relative overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute -top-12 -left-12 w-24 sm:w-40 md:w-72 h-24 sm:h-40 md:h-72 bg-white opacity-10 rounded-full animate-ping pointer-events-none"></div>
      <div className="absolute bottom-[-30px] right-[-20px] w-36 sm:w-60 md:w-96 h-36 sm:h-60 md:h-96 bg-white opacity-10 rounded-full animate-pulse pointer-events-none"></div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>

      {/* Description */}
      <p className="mb-6 text-sm sm:text-lg md:text-lg max-w-2xl mx-auto">
        {desc}
      </p>

      {/* Button */}
      {button && (
        <Link
          to={button.link}
          className="bg-white text-blue-600 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 mt-6 inline-block"
        >
          {button.text}
        </Link>
      )}
    </motion.div>
  );
}
