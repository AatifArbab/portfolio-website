import React from "react";
import profile from "../assets/zahid1.jpeg";
import background from "../assets/background.jpg";

const Hero = () => {
  const fullAbout = `
Zahid Rajper is a Pakistani multidisciplinary artist, poet, writer, and art director from Khairpur, Sindh. Rooted in Sindhi language, Indus Valley heritage, and the struggles of ordinary life, his work explores memory, identity, social justice, climate concerns, water rights, and the dignity of marginalized communities.

He studied Art & Design and earned a Bachelor of Arts from Shah Abdul Latif University, Khairpur. He has worked with Audio Lab Pakistan and Sindh TV in art direction, music selection, and creative production.

His exhibitions and presentations include Karachi Arts Council, Pakistan National Council of Arts, Shah Abdul Latif University Khairpur, Khairpur Arts Council, World Sindhi Congress 2024, and the Sindhi Association of North America, Houston 2025.

Zahid is also the author of Sada, a Sindhi poetry collection published in 2002, with selected poetry translated internationally.

He is preparing for new exhibitions, gallery engagements, and artistic collaborations in the United States.
`;

  const styles = {
    visitBox: {
      marginTop: "25px",
      padding: "15px",
      background: "rgba(255,255,255,0.1)",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.2)",
    },
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        color: "#fff",
        textAlign: "center",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          background: "rgba(0,0,0,0.45)",
          padding: "30px",
          borderRadius: "20px",
          backdropFilter: "blur(4px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        {/* PROFILE IMAGE */}
        <img
          src={profile}
          alt="Zahid Rajper"
          style={{
            width: "220px",
            height: "220px",
            objectFit: "cover",
            borderRadius: "15px",
            marginBottom: "25px",
            border: "4px solid #fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          }}
        />

        {/* NAME */}
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "20px",
            fontWeight: "bold",
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
          }}
        >
          {fullAbout}
        </p>

        {/* VISIT BOX */}
        <section style={styles.visitBox}>
          <h2>🌍 Upcoming U.S. Visit</h2>
          <p>
            <strong>June - July 2026:</strong> Visiting Houston & Richmond.
          </p>
        </section>
      </div>
    </section>
  );
};

export default Hero;