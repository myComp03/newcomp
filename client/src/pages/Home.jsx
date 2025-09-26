import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";

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
      <HeroSection
        title="Welcome to Our IT Company"
        subtitle="We help businesses embrace the digital era with scalable, secure, and innovative technology solutions."
        primaryBtn={{ text: "Our Services", link: "/service" }}
        secondaryBtn={{ text: "Contact Us", link: "/contact" }}
      />

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
      <CTASection
        title="Ready to Grow Your Business?"
        desc="Let’s collaborate to create innovative IT solutions that drive success."
        button={{ text: "Get in Touch", link: "/contact" }}
      />
    </div>
  );
}
