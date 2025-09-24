import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      await axios.post("http://localhost:8000/api/contact", formData);
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // 🔹 Custom Location for map
  const customLocation = {
    lat: 28.6139, // Delhi latitude
    lng: 77.209, // Delhi longitude
    zoom: 15,
  };

  // Normal Google Maps embed without API key
  const mapSrc = `https://www.google.com/maps?q=${customLocation.lat},${customLocation.lng}&z=${customLocation.zoom}&output=embed`;

  return (
    <div className="flex flex-col">
      {/* Contact Form Section */}
      <div className="min-h-screen relative flex items-center justify-center p-4 bg-gray-100 overflow-hidden">
        {/* Side circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 animate-pulse bg-blue-300"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 animate-pulse bg-pink-200"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-3xl bg-white text-gray-800 rounded-xl shadow-lg p-8 md:p-12 z-10"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          {success && (
            <p className="text-green-600 mb-4 text-center">{success}</p>
          )}
          {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex flex-col">
              <label className="mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border-gray-300 text-gray-800"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col">
              <label className="mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border-gray-300 text-gray-800"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col">
              <label className="mb-1 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border-gray-300 text-gray-800"
                rows="5"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              variants={itemVariants}
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Contact Info + Map Section */}
      <div className="w-full mt-12 px-4 md:px-20 py-16 bg-gray-50">
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-stretch">
          {/* Contact Details */}
          <div className="flex-1 space-y-6 text-gray-800">
            <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-3 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                <span className="text-blue-500 text-xl">📍</span> 123 Street,
                City, Country
              </p>
              <p className="flex items-center gap-3 hover:text-blue-500 transition-colors duration-300">
                <span className="text-blue-500 text-xl">📞</span>
                <a
                  href="tel:+911234567890"
                  className="underline hover:text-blue-700"
                >
                  +91 1234567890
                </a>
              </p>
              <p className="flex items-center gap-3 hover:text-blue-500 transition-colors duration-300">
                <span className="text-blue-500 text-xl">✉️</span>
                <a
                  href="mailto:contact@company.com"
                  className="underline hover:text-blue-700"
                >
                  contact@company.com
                </a>
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 h-80 w-full overflow-hidden rounded-xl shadow-lg border border-gray-200">
            <iframe
              title="Company Location"
              src={mapSrc}
              width="100%"
              height="100%"
              className="transform transition-transform duration-300 hover:scale-105"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
