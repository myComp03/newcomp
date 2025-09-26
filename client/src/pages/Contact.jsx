// src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar"; // Ensure you have Navbar component

// Fix Leaflet default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    setError(false);
    try {
      await axios.post("http://localhost:8000/api/contact", formData);
      setResponseMsg("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setResponseMsg("Something went wrong. Try again!");
      setError(true);
    }
    setLoading(false);
  };

  const position = [28.615, 77.212]; // Custom coordinates

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Have a project in mind or just want to say hi? We’d love to hear from you. Let’s connect and make ideas happen together."
        primaryBtn={{ text: "Our Services", link: "/service" }}
        secondaryBtn={{ text: "About Us", link: "/about" }}
      />

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg space-y-6 max-w-3xl w-full mx-auto -mt-16 relative z-10"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {responseMsg && (
          <p
            className={`mt-2 text-center font-medium ${
              error ? "text-red-600" : "text-green-600"
            }`}
          >
            {responseMsg}
          </p>
        )}
      </motion.form>

      {/* Interactive Map */}
      <div className="my-16 flex justify-center relative z-0">
        <div className="w-full max-w-6xl h-[400px] rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <LayersControl position="topright">
              <LayersControl.BaseLayer checked name="Street Map">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
              </LayersControl.BaseLayer>

              {/* Satellite Map */}
              <LayersControl.BaseLayer name="Satellite Map">
                <TileLayer
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye"
                />
              </LayersControl.BaseLayer>
            </LayersControl>
            <Marker position={position}>
              <Popup>Our Office Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="py-20 px-6 md:px-20 max-w-6xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-600"
        >
          Get in Touch
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether you have a project in mind or just want to say hello, we’re
          here to listen. Reach out via email or phone and we’ll respond
          quickly.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <p className="text-lg font-semibold">📧 Email</p>
            <a
              href="mailto:suyatripath03@gmail.com"
              className="text-blue-600 hover:underline"
            >
              suyatripath03@gmail.com
            </a>
          </div>
          <div>
            <p className="text-lg font-semibold">📞 Phone</p>
            <a
              href="tel:+919876543210"
              className="text-blue-600 hover:underline"
            >
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
