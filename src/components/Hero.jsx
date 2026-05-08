import React from "react";
import profile from "../assets/art12.jpeg";
import background from "../assets/background.jpg";

const Hero = () => {
  const fullAbout = `
Zahid Rajper is a Pakistani multidisciplinary artist, poet, writer, and art director from Khairpur, Sindh. Rooted in Sindhi language, Indus Valley heritage, and the struggles of ordinary life, his work explores memory, identity, social justice, climate concerns, water rights, and the dignity of marginalized communities.

He studied Art & Design and earned a Bachelor of Arts from Shah Abdul Latif University, Khairpur. He has worked with Audio Lab Pakistan and Sindh TV in art direction, music selection, and creative production.

His exhibitions and presentations include Karachi Arts Council, Pakistan National Council of Arts, Shah Abdul Latif University Khairpur, Khairpur Arts Council, World Sindhi Congress 2024, and the Sindhi Association of North America, Houston 2025.

Zahid is also the author of Sada, a Sindhi poetry collection published in 2002, with selected poetry translated internationally.

He is preparing for new exhibitions, gallery engagements, and artistic collaborations in the United States.
`;

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        color: "#fff",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* LARGE FIXED PROFESSIONAL IMAGE */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <img
            src={profile}
            alt="Zahid Rajper"
            style={{
              width: "320px",
              height: "420px",
              objectFit: "cover",
              borderRadius: "18px",
              border: "4px solid rgba(255,255,255,0.9)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
              transform: "scale(1)",
              transition: "0.4s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.03)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>

        {/* NAME */}
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
            letterSpacing: "2px",
          }}
        >
          Zahid Rajper
        </h1>

        {/* ABOUT TEXT */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.9",
            whiteSpace: "pre-line",
            opacity: 0.95,
            textAlign: "justify",
            background: "rgba(0,0,0,0.35)",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          {fullAbout}
        </p>
      </div>
    </section>
  );
};

export default Hero;