import React from "react";
import profile from "../assets/zahid1.jpeg";
import background from "../assets/background.jpg";

const Hero = () => {
  const fullAbout = `
Zahid Rajper is a multidisciplinary visual artist, poet, writer, and art director from Sindh, Pakistan. Born in Khairpur, his work is deeply shaped by land, language, memory, and culture.

His practice explores identity, rural life, migration, climate change, water crisis, social justice, love, loss, resistance, and human dignity.

He works across painting, poetry, writing, and visual storytelling where image and word become one language.

At its core, his art is about memory, resistance, and belonging.
  `;

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        color: "#fff",
        textAlign: "center",
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        
        {/* IMAGE TOP (SQUARE) */}
        <img
          src={profile}
          alt="Zahid Rajper"
          style={{
            width: "220px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "20px",
            border: "4px solid #fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          }}
        />

        {/* NAME */}
        <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
          Hello, I'm Zahid Rajper
        </h1>

        {/* ABOUT TEXT */}
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8",
            whiteSpace: "pre-line",
            opacity: 0.9,
          }}
        >
          {fullAbout}
        </p>

      </div>
    </section>
  );
};

export default Hero;