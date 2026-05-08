import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Books from "./components/Books";
import Art from "./components/Art";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// HOME PAGE (sirf hero + footer)
function Home() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}

// ABOUT PAGE
function AboutPage() {
  return (
    <>
      <About />
      <Footer />
    </>
  );
}

// ART PAGE
function ArtPage() {
  return (
    <>
      <Art />
      <Footer />
    </>
  );
}

// BOOKS PAGE
function BooksPage() {
  return (
    <>
      <Books />
      <Footer />
    </>
  );
}

// CONTACT PAGE
function ContactPage() {
  return (
    <>
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;