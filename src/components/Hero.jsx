import React from "react";
import profile from "../assets/Art1.jpeg";

const Hero = () => {
  const fullAbout = `
Zahid Rajper is a Pakistani multidisciplinary artist, poet, writer, and art director from Khairpur, Sindh. Rooted in Sindhi language, Indus Valley heritage, and the struggles of ordinary life, his work explores memory, identity, social justice, climate concerns, water rights, and the dignity of marginalized communities.

He studied Art & Design and earned a Bachelor of Arts from Shah Abdul Latif University, Khairpur. He has worked with Audio Lab Pakistan and Sindh TV in art direction, music selection, and creative production.

His exhibitions and presentations include Karachi Arts Council, Pakistan National Council of Arts, Shah Abdul Latif University Khairpur, Khairpur Arts Council, World Sindhi Congress 2024, and the Sindhi Association of North America, Houston 2025.

Zahid is also the author of Sada, a Sindhi poetry collection published in 2002, with selected poetry translated internationally. He is preparing for new exhibitions in the United States.
`;

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
        color: "#111",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          display: "flex",
          gap: "60px",
          flexWrap: "wrap",
          alignItems: "flex-start", // IMAGE UPPER AJAEGI
        }}
      >
       {/* IMAGE */}
<div
  style={{
    flex: "1",
    display: "flex",
    justifyContent: "center",
    marginTop: "40px", // IMAGE THORI NEECHE
  }}
>
  <img
    src={profile}
    alt="Zahid Rajper"
    style={{
      width: "100%",
      maxWidth: "450px",
      height: "auto",
      aspectRatio: "3 / 4",
      objectFit: "cover",
      borderRadius: "30px",
      border: "6px solid #111",
      boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
    }}
  />
</div>
        {/* TEXT */}
        <div style={{ flex: "1", minWidth: "320px" }}>
          <h1
            style={{
              fontSize: "64px",
              marginBottom: "12px", // SPACE KAM
              letterSpacing: "2px",
              color: "#000",
              lineHeight: "1.1",
            }}
          >
            Zahid Rajper
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "2",
              whiteSpace: "pre-line",
              textAlign: "justify",
              color: "#222",
              marginTop: "0",
            }}
          >
            {fullAbout}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;