import React from "react";
import profile from "../assets/art12.jpeg";
import background from "../assets/background.jpg";

const Hero = () => {
  const fullAbout = `
Zahid Rajper is a Pakistani multidisciplinary artist, poet, writer, and art director from Khairpur, Sindh. Rooted in Sindhi language, Indus Valley heritage, and the struggles of ordinary life, his work explores memory, identity, social justice, climate concerns, water rights, and the dignity of marginalized communities.

He studied Art & Design and earned a Bachelor of Arts from Shah Abdul Latif University, Khairpur. He has worked with Audio Lab Pakistan and Sindh TV in art direction, music selection, and creative production.

His exhibitions and presentations include Karachi Arts Council, Pakistan National Council of Arts, Shah Abdul Latif University Khairpur, Khairpur Arts Council, World Sindhi Congress 2024, and the Sindhi Association of North America, Houston 2025.

Zahid is also the author of Sada, a Sindhi poetry collection published in 2002.

He is preparing for new exhibitions in the United States.
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
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 20px",
        color: "#fff",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          gap: "60px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* IMAGE */}
        <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
          <img
            src={profile}
            alt="Zahid Rajper"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              aspectRatio: "3 / 4",
              objectFit: "cover",
              borderRadius: "30px",
              border: "6px solid rgba(255,255,255,0.95)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.85)",
            }}
          />
        </div>

        {/* TEXT */}
        <div style={{ flex: "2", minWidth: "320px" }}>
          <h1
            style={{
              fontSize: "58px",
              marginBottom: "20px",
              letterSpacing: "2px",
            }}
          >
            Zahid Rajper
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "2",
              whiteSpace: "pre-line",
              background: "rgba(0,0,0,0.35)",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "justify",
            }}
          >
            {fullAbout}
          </p>

          {/* UPCOMING VISIT BOX */}
          <div
            style={{
              marginTop: "25px",
              padding: "20px",
              borderRadius: "15px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
          >
            <h3 style={{ marginBottom: "10px", fontSize: "22px" }}>
              Upcoming U.S. Visit
            </h3>

            <p style={{ fontSize: "15px", lineHeight: "1.8" }}>
              Zahid Rajper will be visiting the United States in{" "}
              <strong>Houston, Texas</strong> and{" "}
              <strong>Richmond, Virginia</strong> in June–July 2026 for gallery
              meetings, exhibitions, studio visits, artist collaborations, and
              cultural exchange opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;