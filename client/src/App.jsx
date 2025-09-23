import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Contact from "./pages/Contact"; 
// import Home from "./Home";
// import Service from "./Service";
// import About from "./About";
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* padding so content is not hidden behind navbar */}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  )}


export default App
