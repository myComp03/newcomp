import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites and web apps built with modern frameworks and scalable architecture.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      desc: "Native & cross-platform apps delivering seamless experiences on iOS and Android.",
      icon: "📱",
    },
    {
      title: "Cloud Solutions",
      desc: "Secure, scalable, and cost-effective cloud infrastructure for your business.",
      icon: "☁️",
    },
    {
      title: "UI/UX Design",
      desc: "Intuitive and engaging designs that elevate user experiences.",
      icon: "🎨",
    },
    {
      title: "IT Consulting",
      desc: "Strategic technology consulting to align IT with your business goals.",
      icon: "📊",
    },
    {
      title: "Cybersecurity",
      desc: "Protect your business with advanced security solutions and best practices.",
      icon: "🔒",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Understanding Needs",
      desc: "We analyze your requirements and goals.",
    },
    {
      step: "2",
      title: "Planning & Strategy",
      desc: "Crafting a roadmap tailored to your business.",
    },
    {
      step: "3",
      title: "Design & Development",
      desc: "Building user-friendly and scalable solutions.",
    },
    {
      step: "4",
      title: "Testing & Deployment",
      desc: "Ensuring quality and launching successfully.",
    },
    {
      step: "5",
      title: "Support & Growth",
      desc: "Continuous monitoring, support, and scaling.",
    },
  ];

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="From web to mobile, cloud to cybersecurity – we deliver comprehensive IT solutions that empower your business."
      />

      {/* Services Grid */}
      <div className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 px-6 md:px-20 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-600"
        >
          Our Work Process
        </motion.h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Step {step.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Let’s Build Something Amazing Together 🚀"
        desc="Partner with us to design, develop, and deploy IT solutions that make an impact."
        button={{ text: "Get Started", link: "/contact" }}
      />
    </div>
  );
}
