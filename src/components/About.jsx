import React, { useState, useEffect } from "react";
import profileImage from "../assets/image35.jpg";
import background4 from "../assets/background6.avif";

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
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    fontFamily: "Arial",
    textAlign: "center",
  };

  const profileStyle = {
    width: windowWidth < 768 ? "90%" : "320px",
    borderRadius: "15px",
    border: hovered ? "3px solid #00c6ff" : "3px solid #fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
    transition: "0.3s",
    cursor: "pointer",
    objectFit: "cover",
  };

  const card = {
    background: "rgba(255,255,255,0.1)",
    padding: "25px",
    borderRadius: "15px",
    marginBottom: "25px",
    backdropFilter: "blur(8px)",
    maxWidth: "950px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "justify",
    lineHeight: "1.9",
    fontSize: "16px",
  };

  const biography = `
Zahid Rajper is a multidisciplinary visual artist, poet, writer, and art director from Sindh, Pakistan. Born in the rural district of Khairpur, his creative journey is deeply shaped by the land, language, traditions, struggles, and emotional memory of Sindhi society. His work carries the voice of Sindhi language, the depth of Indus Valley roots, and the lived experience of ordinary people whose stories often remain outside mainstream cultural spaces.

Zahid’s artistic path is grounded in both creative training and social observation. He holds an Associate Degree in Art & Design and a Bachelor of Arts from Shah Abdul Latif University, Khairpur. His academic and creative background has helped shape a practice that is not limited to visual form alone, but also engages with society, culture, language, history, and human struggle.

His work as a visual artist reflects the landscape and memory of Sindh while speaking to wider human concerns. His paintings, poetry and creative projects often explore Sindhi identity, rural life, migration, climate change, water rights, social justice, love, loss, resistance, and the dignity of common people. The colors, figures, symbols, and emotional textures in his work are connected to the soil of Sindh, but the feelings they carry are universal.

Zahid does not separate image from word. As a poet and writer, he brings language into his visual practice, allowing poetry, memory, and social reflection to inform his paintings and concepts. His creative process often begins with a word, a line of poetry, a social concern, or a remembered image from daily life.

Alongside his work as a visual artist, Zahid has contributed significantly to Sindhi poetry, writing, music-related creative projects, and art direction. He has worked as Art Director at Audio Lab Pakistan and also worked with Sindh TV in art direction and visual storytelling.

Zahid is also an active writer whose voice has addressed climate change, water rights, and social justice for marginalized communities. During Pakistan’s difficult political period of martial law in the early 2000s, he wrote articles for Khabrain Group.

As a published poet, Zahid’s literary work has reached readers in Sindhi and through translation. His Sindhi poetry book Sada was published in 2002 by Sambara Academy.

His visual work has been exhibited and presented at Karachi Arts Council, Pakistan National Council of Arts, Shah Abdul Latif University Khairpur, Khairpur Arts Council, World Sindhi Congress 2024, and the Sindhi Association of North America, Houston 2025.

During his upcoming visit to the United States, Zahid seeks to connect with galleries, curators, artists, studios, universities, cultural organizations, and community art spaces for exhibitions and collaborations.

His work speaks from Sindh, but it reaches beyond one geography. At its heart, Zahid Rajper’s art is about memory, language, resistance, belonging, and the human stories carried by land, people, and time.
`;

  return (
    <section style={sectionStyle}>
      {/* TITLE */}
      <h1
        style={{
          fontSize: windowWidth < 768 ? "32px" : "48px",
          marginBottom: "35px",
          fontWeight: "bold",
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

      {/* BIOGRAPHY BELOW IMAGE */}
      <div style={{ marginTop: "40px" }}>
        <div style={card}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "25px",
              fontSize: "32px",
            }}
          >
            
          </h2>

          <p style={{ whiteSpace: "pre-line" }}>
            {biography}
          </p>
        </div>

        {/* BASIC INFO */}
        <div style={card}>
          <h3>📌 Basic Information</h3>

          <p>
            <strong>
              Multidisciplinary Artist | Visual Artist | Poet | Writer | Art Director
            </strong>
          </p>

          <p>
            <strong>Based In:</strong> Sindh, Pakistan
          </p>

          <p>
            <strong>Born:</strong> Khairpur District, Sindh, Pakistan
          </p>

          <p>
            <strong>Year of Birth:</strong> 22 - 11 - 1970
          </p>
        </div>

        {/* EDUCATION */}
        <div style={card}>
          <h3>🎓 Education</h3>

          <p>
            Bachelor of Arts — Shah Abdul Latif University, Khairpur
          </p>

          <p>
            Diploma of Associate Engineer (DAE) — Textile Weaving Technology
          </p>

          <p>
            Sindh Board of Technical Education (SBTE), Karachi (1993)
          </p>
        </div>

        {/* PRACTICE */}
        <div style={card}>
          <h3>🎨 Practice</h3>

          <p>
            Painting, visual art, poetry, writing, art direction, conceptual
            direction, cultural storytelling, Sindhi language-based creative work.
          </p>
        </div>

        {/* THEMES */}
        <div style={card}>
          <h3>🌿 Themes</h3>

          <p>
            Sindhi language, Indus Valley heritage, rural life, identity,
            climate change, water crisis, social justice, migration,
            belonging, memory, and resistance.
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