import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Books from "./components/Books";
import Art from "./components/Art";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// ❌ ArtistProfile hata diya (error isi se aa raha tha)

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Art />
      <Books />
      <Contact />
      <Footer />
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
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />

        {/* Contact page */}
        <Route 
          path="/contact" 
          element={
            <>
              <Contact />
              <Footer />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;