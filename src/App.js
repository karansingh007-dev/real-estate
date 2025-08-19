import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
// import Footer from "./components/footer";
// import Home from "./components/pages/home";
import Features from "./components/pages/features";
import Sales from "./components/pages/onsale";
import About from "./components/pages/about";
import HeroSection from "./components/HeroSection.jsx"
// import Client from "./components/pages/clients";
import Service from "./components/pages/service";
import Contact from "./components/pages/contact";
import Demo from "./components/pages/demo";
import Residential from "./components/pages/residential.js"; // Add this import
import Commercial from "./components/pages/commercial";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop"; // Add this import
import Carousel from "./components/Carousel";
import CommunitiesPage from "./components/pages/CommunitiesPage";
import LatestProjects from "./components/LatestProjects";
import Footer from "./components/Footer.jsx";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // only animate once per scroll
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Main Home Page Route */}
        <Route
          path="/"
          element={
            <div className="overflow-x-hidden">
              <HeroSection/>
              <Carousel />
              <Features />
              <Sales />
              <Service />
              <Demo />
              {/* <Client /> */}

              <Contact />
            </div>
          }
        />

        {/* Residential Page Route */}
        <Route path="/communities" element={<CommunitiesPage />} />
        <Route path="/projects" element={<LatestProjects />} />

        <Route path="/about" element={<About />} />
        <Route path="/residentials" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
      </Routes>
     
<Footer/>
    </Router>
  );
}

export default App;
