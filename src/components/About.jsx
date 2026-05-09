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

  const isMobile = windowWidth < 768;

  const sectionStyle = {
    padding: "70px 20px",
    background: "#ffffff",
    color: "#111",
    fontFamily: "Arial",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "flex-start",
  };

  const imageStyle = {
    width: isMobile ? "100%" : "380px",
    borderRadius: "12px",
    border: hovered ? "3px solid #000" : "3px solid #222",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    transition: "0.3s",
    cursor: "pointer",
    objectFit: "cover",
  };

  const contentStyle = {
    flex: 1,
    textAlign: "left",
    lineHeight: "1.8",
    fontSize: "16px",
    color: "#222",
  };

  const headingStyle = {
    marginTop: "18px",
    marginBottom: "8px",
    fontSize: "24px",
    color: "#000",
  };

  const paragraphStyle = {
    margin: "3px 0",
  };

  const biography = `
Zahid Rajper is a multidisciplinary visual artist, poet, writer, and art director from Sindh, Pakistan. Born in the rural district of Khairpur, his creative journey is deeply shaped by the land, language, traditions, struggles, and emotional memory of Sindhi society. His work carries the voice of Sindhi language, the depth of Indus Valley roots, and the lived experience of ordinary people whose stories often remain outside mainstream cultural spaces. 

Zahid’s artistic path is grounded in both creative training and social observation. He holds an Associate Degree in Art & Design and a Bachelor of Arts from Shah Abdul Latif University, Khairpur. His academic and creative background has helped shape a practice that is not limited to visual form alone, but also engages with society, culture, language, history, and human struggle.

His work as a visual artist reflects the landscape and memory of Sindh while speaking to wider human concerns. His paintings, poetry and creative projects often explore Sindhi identity, rural life, migration, climate change, water rights, social justice, love, loss, resistance, and the dignity of common people. The colors, figures, symbols, and emotional textures in his work are connected to the soil of Sindh, but the feelings they carry are universal.

Zahid does not separate image from word. As a poet and writer, he brings language into his visual practice, allowing poetry, memory, and social reflection to inform his paintings and concepts. His creative process often begins with a word, a line of poetry, a social concern, or a remembered image from daily life. From there, it becomes a painting, a visual idea, a written piece, or a collaborative artistic direction. 

Alongside his work as a visual artist, Zahid has contributed significantly to Sindhi poetry, writing, music-related creative projects, and art direction. He has worked as Art Director at Audio Lab Pakistan, where he contributed to music selection, music composition, and the visual direction of creative projects. He has also worked with Sindh TV in art direction, strengthening his experience in visual storytelling across media. His creative collaborations include work connected with Sindhi music and cultural projects, where his role has included poetry, central idea, concept development, art direction, and visual selection. These contributions show his ability to move between poetry, sound, image, and visual narrative.

Zahid is also an active writer whose voice has addressed climate change, water rights, and social justice for marginalized communities. During Pakistan’s difficult political period of martial law in the early 2000s, he wrote articles for Khabrain Group, engaging with issues of public concern at a time when speaking openly required courage and conviction. His writing continues to reflect his commitment to people, water crises, land justice, and cultural memory. As a published poet, Zahid’s literary work has reached readers in Sindhi and through translation. His Sindhi poetry book Sada was published in 2002 by Sambara Academy. His selected poetry was later translated by Qadir Ansari and published as Melan Chony by Sindhi Sangat United Kingdom in 2008. Another translation of his selected poetry, Black Banded Time, translated by Ibrahim Khokhar, is currently in the publishing process with SCALA Canada.

Zahid’s visual work has been exhibited and presented at important cultural and artistic spaces, including Karachi Arts Council, Pakistan National Council of Arts, Shah Abdul Latif University Khairpur, Khairpur Arts Council, World Sindhi Congress 2024, and the Sindhi Association of North America, Houston 2025. These platforms reflect his growing engagement with audiences in Pakistan and the Sindhi diaspora.

During his upcoming visit to the United States, Zahid seeks to connect with galleries, curators, artists, studios, universities, cultural organizations, and community art spaces. He is open to solo exhibitions, group shows, artist talks, studio visits, collaborative projects, poetry and visual art programs, cultural presentations, and cross-cultural creative exchange. 

His work speaks from Sindh, but it reaches beyond one geography. At its heart, Zahid Rajper’s art is about memory, language, resistance, belonging, and the human stories carried by land, people, and time.
`;

  return (
    <section style={sectionStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "42px" }}>
        About Artist
      </h1>

      <div style={containerStyle}>
        {/* LEFT IMAGE */}
        <div>
          <img
            src={profileImage}
            alt="Zahid Rajper"
            style={imageStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={contentStyle}>
          <p style={{ whiteSpace: "pre-line", marginBottom: "10px" }}>
            {biography}
          </p>

          <h2 style={headingStyle}>Basic Information</h2>
          <p style={paragraphStyle}>
            <strong>Multidisciplinary Artist | Poet | Writer | Art Director</strong>
          </p>
          <p style={paragraphStyle}><strong>Based In:</strong> Sindh, Pakistan</p>
          <p style={paragraphStyle}><strong>Born:</strong> Khairpur, Sindh</p>
          <p style={paragraphStyle}><strong>Year:</strong> 1970</p>

          <h2 style={headingStyle}>Education</h2>
          <p style={paragraphStyle}>BA — Shah Abdul Latif University</p>
          <p style={paragraphStyle}>Associate Degree in Art & Design</p>

          <h2 style={headingStyle}>Exhibitions</h2>
          <ul style={{ paddingLeft: "18px" }}>
            <li>Karachi Arts Council</li>
            <li>PNCA Islamabad</li>
            <li>World Sindhi Congress 2024</li>
            <li>Houston 2025</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;