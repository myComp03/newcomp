import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      title: "Innovative Solutions",
      desc: "We craft cutting-edge digital solutions tailored to your business needs.",
      icon: "💡",
    },
    {
      title: "Expert Team",
      desc: "Our team of professionals brings expertise, creativity, and innovation.",
      icon: "👨‍💻",
    },
    {
      title: "Global Clients",
      desc: "Trusted by businesses across industries and geographies.",
      icon: "🌍",
    },
  ];

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white py-28 px-6 md:px-20 text-center relative overflow-hidden">
        {/* Background circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white opacity-10 rounded-full animate-ping"></div>
        <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-white opacity-10 rounded-full animate-pulse"></div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Welcome to Our IT Company
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          We help businesses embrace the digital era with scalable, secure, and
          innovative technology solutions.
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 md:px-20 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-600"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white py-20 px-6 text-center relative overflow-hidden"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Let’s collaborate to create innovative IT solutions that drive
          success.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 mt-6"
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
}
