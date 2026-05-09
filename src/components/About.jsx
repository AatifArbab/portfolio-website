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
    padding: "90px 20px",
    background: "#ffffff",
    color: "#111",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    maxWidth: "1250px",
    margin: "0 auto",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "60px",
    alignItems: "flex-start",
  };

  const imageWrapperStyle = {
    width: isMobile ? "100%" : "420px",
    display: "flex",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "18px",
    objectFit: "cover",
    border: hovered ? "4px solid #000" : "4px solid #222",
    boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
    transition: "0.3s ease",
    cursor: "pointer",
  };

  const contentStyle = {
    flex: 1,
    color: "#222",
    lineHeight: "1.9",
  };

  const titleStyle = {
    fontSize: isMobile ? "38px" : "54px",
    marginBottom: "20px",
    color: "#000",
    fontWeight: "700",
  };

  const headingStyle = {
    fontSize: "28px",
    marginTop: "35px",
    marginBottom: "18px",
    color: "#000",
    borderBottom: "2px solid #eee",
    paddingBottom: "8px",
  };

  const textStyle = {
    fontSize: "17px",
    marginBottom: "14px",
    color: "#333",
    textAlign: "justify",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* IMAGE */}
        <div style={imageWrapperStyle}>
          <img
            src={profileImage}
            alt="Artist"
            style={imageStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>
        {/* CONTENT */}
        <div style={contentStyle}>
          {/* BIOGRAPHY (TOP) */}
          <h1 style={titleStyle}>About Artist</h1>

          <p style={textStyle}>
            Zahid Rajper is a multidisciplinary visual artist, poet, writer, and  art director from Sindh, Pakistan. Born in the rural district of Khairpur, his creative journey is deeply shaped by the land,language, traditions, struggles, and emotional memory of Sindhisociety. His work carries the voice of Sindhi language, the depth ofIndus Valley roots, and the lived experience of ordinary people whose stories often remain outside mainstream cultural spaces. Zahid’sartistic path is grounded in both creative training and social observation. He holds an Associate Degree in Art & Design and aBachelor of Arts from Shah Abdul Latif University, Khairpur. Hisacademic and creative background has helped shape a practice that is not limited to visual form alone, but also engages with society,culture, language, history, and human struggle.
             <br /><br />
             His work as a visualartist reflects the landscape and memory of Sindh while speaking to wider human concerns. His paintings, poetry and creative projects often explore Sindhi identity, rural life, migration, climate change, water rights, social justice, love, loss, resistance, and the dignity of common people. The colors, figures, symbols, and emotional textures in his work are connected to the soil of Sindh, but the feelings they carry are universal.
             <br /><br />
               Zahid does not separate image from word. As a poet and writer, he brings language into his visual  practice, allowing poetry, memory, and social reflection to inform his paintings and concepts. His creative process often begins with a word, a line of poetry, a social concern, or a remembered image from daily life. From there, it becomes a painting, a visual idea, a written piece, or a collaborative artistic direction.
             <br /><br />
             Alongside his work as a visual artist, Zahid has contributed significantly to Sindhi poetry,  writing, music-related creative projects, and art direction. He has  worked as Art Director at Audio Lab Pakistan, where he contributed to  music selection, music composition, and the visual direction of creative projects. He has also worked with Sindh TV in art direction,  strengthening his experience in visual storytelling across media. His  creative collaborations include work connected with Sindhi music and cultural projects, where his role has included poetry, central idea, concept development, art direction, and visual selection. These contributions show his ability to move between poetry, sound, image, and visual narrative. 
           <br /><br />
            Zahid is also an active writer whose voice has addressed climate change, water rights, and social justice for marginalized communities. During Pakistan’s difficult political period of martial law in the early 2000s, he wrote articles for Khabrain  Group, engaging with issues of public concern at a time when speaking  openly required courage and conviction. His writing continues to   reflect his commitment to people, water crises, land justice, and  cultural memory. As a published poet, Zahid’s literary work has reached readers in Sindhi and through translation. His Sindhi poetry  book Sada was published in 2002 by Sambara Academy. His selected poetry was later translated by Qadir Ansari and published as Melan Chony by Sindhi Sangat United Kingdom in 2008. Another translation of  his selected poetry, Black Banded Time, translated by Ibrahim Khokhar,  is currently in the publishing process with SCALA Canada.
          <br /><br />
           Zahid’s visual work has been exhibited and presented at important cultural and artistic spaces, including Karachi Arts Council, Pakistan National  Council of Arts, Shah Abdul Latif University Khairpur, Khairpur Arts Council, World Sindhi Congress 2024, and the Sindhi Association of  North America, Houston 2025. These platforms reflect his growing engagement with audiences in Pakistan and the Sindhi diaspora.
          <br /><br />
             During his upcbroming visit to the United States, Zahid seeks to connect with  galleries, curators, artists, studios, universities, cultural  organizations, and community art spaces. He is open to solo exhibitions, group shows, artist talks, studio visits, collaborative  projects, poetry and visual art programs, cultural presentations, and cross-cultural creative exchange.
          <br /><br />
            His work speaks from Sindh, but it reaches beyond one geography. At its heart, Zahid Rajper’s art is about memory, language, resistance, belonging, and the human stories carried by land, people, and time.
          </p>

      {/* PROFESSIONAL PROFILE (BOTTOM) */}
          <div style={{ display: "flex", justifyContent: "flex-start" }}> {/* CHANGE 2: Content ko right ki jagah left par aligned kiya gaya */}
            <div style={{ textAlign: "left", maxWidth: "600px" }}> {/* CHANGE 3: Text right se left par aligned */}

              <p style={textStyle}>
                <b>Name:</b> Zahid Rajper
              </p>
              <p style={textStyle}>
                <b>Professional Title:</b> Multidisciplinary Artist | Visual
                Artist | Poet | Writer | Art Director | Conceptual Director
              </p>

              <p style={textStyle}>
                <b>Based In:</b> Sindh, Pakistan 
              </p>

              <p style={textStyle}>
                <b>Born:</b> Khairpur District, Sindh, Pakistan
              </p>

              <p style={textStyle}>
                <b>Year of Birth:</b> (22-11-1970)
              </p>

              <p style={textStyle}>
                <b>Education:</b>
                <br />
                Bachelor of Arts — Shah Abdul Latif University, Khairpur
                <br />
                Associate Degree in Art & Design 
              </p>

              <p style={textStyle}>
                <b>Main Practice Areas:</b>
                <br />
                Painting, visual art, poetry, writing, art direction, conceptual
                direction, cultural storytelling.
              </p>

              <p style={textStyle}>
                <b>Themes in Work:</b>
                <br />
                Sindhi language, Indus Valley roots, rural life, memory,
                identity, climate change, water rights, social justice,
                migration, belonging.
              </p>

              <p style={textStyle}>
                <b>Selected Exhibitions:</b>
                <br />
                Karachi Arts Council
                <br />
                Pakistan National Council of Arts
                <br />
                Shah Abdul Latif University Khairpur
                <br />
                Khairpur Arts Council
                <br />
                World Sindhi Congress 2024
                <br />
                Sindhi Association of North America Houston 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;