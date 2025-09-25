import { motion } from "framer-motion";
import Contact from "./Contact";
import { Link } from "react-router-dom";

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
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white py-28 px-6 md:px-20 text-center relative overflow-hidden">
        {/* Animated circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white opacity-10 rounded-full animate-ping"></div>
        <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-white opacity-10 rounded-full animate-pulse"></div>

        <motion.h1
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          About Our Company
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          We are a forward-thinking IT company delivering innovative solutions
          that empower businesses to thrive in the digital era. Our team of
          experts combines technology, creativity, and strategy to bring your
          vision to life.
        </motion.p>
      </div>

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

      {/* Founders Section */}
      <div className="py-16 px-6 md:px-20 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-600"
        >
          Meet Our Founders
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Raju Kumar",
              skill: "AI/ML Engineer",
              img: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg",
              about:
                "Amit specializes in machine learning algorithms and predictive modeling for business solutions.",
              color: "from-green-400 to-blue-500",
            },
            {
              name: "Shubham Vats Jha",
              skill: "UI/UX Designer",
              img: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg",
              about:
                "Priya designs intuitive and beautiful user interfaces that enhance user experience across platforms.",
              color: "from-yellow-400 to-orange-500",
            },

            {
              name: "Randhir Singh Randhawa",
              skill: "Cloud Architect",
              img: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg",
              about:
                "Rahul is an expert in cloud infrastructure and scalable backend solutions for modern applications.",
              color: "from-blue-400 to-indigo-500",
            },
            {
              name: "Suyash Tripathi",
              skill: "MERN Developer",
              img: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg",
              about:
                "Yash is a full-stack MERN developer with expertise in AI/ML solutions and modern web apps.",
              color: "from-pink-400 to-purple-500",
            },
          ].map((founder, i) => (
            <div
              key={i}
              className="relative group bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Profile Image */}
              <img
                src={founder.img}
                alt={founder.name}
                className="w-full h-72 object-cover rounded-t-xl transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Name & Skill */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {founder.name}
                </h3>
                <p className="text-gray-500 font-medium">{founder.skill}</p>
              </div>

              {/* Hover About Card */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${founder.color} text-white p-6 flex items-center justify-center text-center 
            transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-95 transition-all duration-500`}
              >
                <p className="text-sm md:text-base">{founder.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white py-28 md:py-20 px-6 text-center relative overflow-hidden"
      >
        {/* Top-left circle */}
        <div className="absolute -top-16 -left-16 w-36 sm:w-40 md:w-72 md:h-72 h-36 sm:h-40 bg-white opacity-10 rounded-full animate-ping"></div>

        {/* Bottom-right circle */}
        <div className="absolute bottom-[-50px] right-[-30px] w-52 sm:w-60 md:w-96 md:h-96 h-52 sm:h-60 bg-white opacity-10 rounded-full animate-pulse"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Connect with our experts today and discover how our IT solutions can
          help you achieve your goals.
        </p>
        <Link
          to="/contact"
          className=" mx-auto bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 mt-6"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}
