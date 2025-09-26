import { motion } from "framer-motion";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const stats = [
    { label: "Projects Completed", value: "120+" },
    { label: "Happy Clients", value: "80+" },
    { label: "Team Members", value: "25+" },
    { label: "Years of Experience", value: "5+" },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "UI/UX Design",
    "IT Consulting",
  ];

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="About Our Company"
        subtitle="We are a team of passionate developers and innovators, delivering cutting-edge IT solutions tailored to your business needs."
        // primaryBtn={{ text: "Our Projects", link: "/projects" }}
        secondaryBtn={{ text: "Contact Us", link: "/contact" }}
      />

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-0 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To provide cutting-edge IT solutions that drive digital
            transformation and create measurable value for our clients.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            To be a global leader in technology services, recognized for
            innovation, excellence, and creating impactful solutions.
          </p>
        </motion.div>
      </div>

      {/* Core Services */}
      <div className="py-16 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-600"
        >
          Our Expertise
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
              className="bg-gradient-to-tr from-blue-50 to-indigo-50 text-indigo-800 p-6 rounded-xl shadow hover:shadow-2xl hover:scale-105 transform transition-all duration-300 text-center font-semibold"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats / Achievements */}
      {/* <div className="py-16 px-6 md:px-20 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-600"
        >
          Our Achievements
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-4xl font-bold text-blue-500 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* Call To Action */}
      <CTASection
        title="Want to Know More About Us?"
        desc="Discover how our journey, vision, and expertise can bring your ideas to life with the power of technology."
        button={{ text: "Get in Touch", link: "/contact" }}
      />
    </div>
  );
}
