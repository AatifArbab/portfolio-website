import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Art from "./components/Art";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Hero />
        <About />
          <Art />
            <Contact />
     
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/contact" 
          element={
            <>
              <Contact />
              <Footer />   {/* ✅ Footer sirf yahan */}
            </>
          } 
        />
      </Routes>

    </Router>
  );
}

export default App;
