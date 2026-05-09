import React, { useState, useEffect } from "react";
import profileImage from "../assets/Art26.jpeg";

const About = () => {
  const [hovered, setHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionStyle = {
    padding: "70px 20px",
    background: "#ffffff",
    color: "#111",
    fontFamily: "Arial",
    textAlign: "center",
  };

  const profileStyle = {
    width: windowWidth < 768 ? "90%" : "320px",
    borderRadius: "15px",
    border: hovered ? "3px solid #000" : "3px solid #222",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    transition: "0.3s",
    cursor: "pointer",
    objectFit: "cover",
  };

  const contentStyle = {
    marginTop: "30px",
    maxWidth: "950px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
    lineHeight: "1.8",
    fontSize: "16px",
    color: "#222",
  };

  const headingStyle = {
    marginTop: "20px",
    marginBottom: "6px",
    fontSize: "24px",
    color: "#000",
  };

  const paragraphStyle = {
    margin: "2px 0",
  };

  const biography = `
Zahid Rajper is a multidisciplinary visual artist, poet, writer, and art director from Sindh, Pakistan. Born in the rural district of Khairpur, his creative journey is deeply shaped by the land, language, traditions, struggles, and emotional memory of Sindhi society.
His work carries the voice of Sindhi language, the depth of Indus Valley roots, and the lived experience of ordinary people.
`;

  return (
    <section style={sectionStyle}>
      {/* TITLE */}
      <h1
        style={{
          fontSize: windowWidth < 768 ? "32px" : "48px",
          marginBottom: "25px",
          fontWeight: "bold",
          color: "#000",
        }}
      >
        About Artist
      </h1>

      {/* IMAGE */}
      <img
        src={profileImage}
        alt=""
        style={profileStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />

      {/* CONTENT */}
      <div style={contentStyle}>
        <p style={{ whiteSpace: "pre-line", marginBottom: "6px" }}>
          {biography}
        </p>

        {/* BASIC INFO */}
        <h2 style={headingStyle}>Basic Information</h2>
        <p style={paragraphStyle}>
          <strong>
            Multidisciplinary Artist | Visual Artist | Poet | Writer | Art Director
          </strong>
        </p>
        <p style={paragraphStyle}>
          <strong>Based In:</strong> Sindh, Pakistan
        </p>
        <p style={paragraphStyle}>
          <strong>Born:</strong> Khairpur District, Sindh, Pakistan
        </p>
        <p style={paragraphStyle}>
          <strong>Year of Birth:</strong> 22 - 11 - 1970
        </p>

        {/* EDUCATION */}
        <h2 style={headingStyle}>Education</h2>
        <p style={paragraphStyle}>
          Bachelor of Arts — Shah Abdul Latif University, Khairpur
        </p>
        <p style={paragraphStyle}>
          Associate Degree in Art & Design
        </p>
        <p style={paragraphStyle}>
          Sindh Board of Technical Education (SBTE), Karachi (1993)
        </p>

        {/* PRACTICE */}
        <h2 style={headingStyle}>Practice</h2>
        <p style={paragraphStyle}>
          Painting, visual art, poetry, writing, art direction, conceptual direction.
        </p>

        {/* THEMES */}
        <h2 style={headingStyle}>Themes</h2>
        <p style={paragraphStyle}>
          Sindhi language, Indus Valley heritage, rural life, identity, climate change, social justice.
        </p>

        {/* EXHIBITIONS */}
        <h2 style={headingStyle}>Exhibitions</h2>
        <ul style={{ paddingLeft: "18px", margin: "2px 0" }}>
          <li>Karachi Arts Council, Pakistan</li>
          <li>Pakistan National Council of Arts</li>
          <li>Shah Abdul Latif University, Khairpur</li>
          <li>Khairpur Arts Council</li>
          <li>World Sindhi Congress — 2024</li>
          <li>Sindhi Association of North America, Houston — 2025</li>
        </ul>
      </div>
    </section>
  );
};

export default About;