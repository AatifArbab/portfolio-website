import React, { useState, useEffect } from "react";
import profileImage from "../assets/image35.jpg";
import background4 from "../assets/background4.jpg";

const About = () => {
  const [hovered, setHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Window resize listener for responsiveness
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Base styles
  const sectionStyle = {
    padding: "60px 20px",
    minHeight: "82vh",
    backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${background4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#332525",
    fontFamily: "'Roboto', sans-serif",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "38px",
    fontWeight: 700,
  };

  const containerStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const profileStyle = {
    flex: "1 1 300px",
    width: "100%",
    maxWidth: "380px",
    borderRadius: "12px",
    border: hovered ? "3px solid #86728a" : "3px solid #ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const textStyle = {
    flex: "2 1 200px",
    minWidth: "280px",
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "25px",
    fontWeight: 400,
  };

  // Mobile adjustments
  if (windowWidth <= 480) {
    titleStyle.fontSize = "calc(18px + 4vw)";
    containerStyle.flexDirection = "column";
    containerStyle.alignItems = "center";
    containerStyle.gap = "20px";
    profileStyle.maxWidth = "90%";
    textStyle.fontSize = "calc(12px + 2.5vw)";
  }

  return (
    <section id="about" style={sectionStyle}>
      <h1 style={titleStyle}>About Me</h1>

      <div style={containerStyle}>
        {/* LEFT: Profile Image */}
        <div>
          <img
            src={profileImage}
            alt="Zahid Rajper"
            style={profileStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>

        {/* RIGHT: About Text */}
        <div style={textStyle}>
          <p>
            Hello! I am <b>Zahid Rajper</b>, a passionate artist, calligrapher, and creative visionary.
            My journey in the world of art is driven by my love for <b>hand-painted portraits, stencil-style artworks, and calligraphy</b>, where each creation tells a unique story.
            <br /><br />
            I strive to bring <b>creativity, precision, and emotion</b> together in every piece I craft. Each artwork is designed to leave a lasting impression and connect deeply with viewers.
            <br /><br />
            Through my art, I aim to <b>connect with people globally</b> and deliver <b>high-quality, original artworks</b> that inspire and captivate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
