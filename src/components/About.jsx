import React, { useState, useEffect } from "react";
import profileImage from "../assets/image35.jpg";
import background4 from "../assets/background4.jpg";

const About = () => {
  const [hovered, setHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyle = {
    padding: "60px 20px",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    fontFamily: "Arial",
    textAlign: "center",
  };

  const profileStyle = {
    width: windowWidth < 768 ? "90%" : "300px",
    borderRadius: "12px",
    border: hovered ? "3px solid #00c6ff" : "3px solid #fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
    transition: "0.3s",
    cursor: "pointer",
  };

  const card = {
    background: "rgba(255,255,255,0.1)",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    backdropFilter: "blur(8px)",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <section style={sectionStyle}>
      
      {/* TITLE */}
      <h1 style={{ fontSize: "40px", marginBottom: "30px" }}>
        About Artist
      </h1>

      {/* IMAGE TOP */}
      <img
        src={profileImage}
        alt="Zahid Rajper"
        style={profileStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />

      {/* ABOUT CONTENT BELOW IMAGE */}
      <div style={{ marginTop: "40px" }}>

        {/* BASIC INFO */}
        <div style={card}>
          <h2>Zahid Rajper</h2>
          <p><strong>Multidisciplinary Artist | Visual Artist | Poet | Writer | Art Director</strong></p>
          <p><strong>Based In:</strong> Sindh, Pakistan</p>
          <p><strong>Born:</strong> Khairpur District, Sindh, Pakistan</p>
          <p><strong>Year of Birth:</strong> (Add Year)</p>
        </div>

        {/* EDUCATION */}
        <div style={card}>
          <h3>🎓 Education</h3>
          <p>Bachelor of Arts — Shah Abdul Latif University, Khairpur</p>
          <p>Associate Degree in Art & Design — (Add Institution)</p>
        </div>

        {/* PRACTICE */}
        <div style={card}>
          <h3>🎨 Practice</h3>
          <p>
            Painting, visual art, poetry, writing, art direction, conceptual direction,
            cultural storytelling, Sindhi language-based creative work.
          </p>
        </div>

        {/* THEMES */}
        <div style={card}>
          <h3>🌿 Themes</h3>
          <p>
            Sindhi language, Indus Valley heritage, rural life, identity, climate change,
            water crisis, social justice, migration, belonging, memory, and resistance.
          </p>
        </div>

        {/* EXHIBITIONS */}
        <div style={card}>
          <h3>🖼️ Exhibitions</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Karachi Arts Council, Pakistan</li>
            <li>Pakistan National Council of Arts</li>
            <li>Shah Abdul Latif University, Khairpur</li>
            <li>Khairpur Arts Council</li>
            <li>World Sindhi Congress — 2024</li>
            <li>Sindhi Association of North America, Houston — 2025</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;