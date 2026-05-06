import React from "react";
import profile from "../assets/zahid1.jpeg";
import background from "../assets/background.jpg";

const Hero = () => {
  const fullAbout = `
Zahid Rajper is a multidisciplinary visual artist, poet, writer, and art director from Sindh, Pakistan. Born in the rural district of Khairpur, his creative journey is deeply shaped by the land, language, traditions, struggles, and emotional memory of Sindhi society. His work carries the voice of Sindhi language, the depth of Indus Valley roots, and the lived experience of ordinary people whose stories often remain outside mainstream cultural spaces.

Zahid’s artistic path is grounded in both creative training and social observation. He holds an Associate Degree in Art & Design and a Bachelor of Arts from Shah Abdul Latif University, Khairpur. His academic and creative background has helped shape a practice that is not limited to visual form alone, but also engages with society, culture, language, history, and human struggle.

His work as a visual artist reflects the landscape and memory of Sindh while speaking to wider human concerns. His paintings, poetry and creative projects often explore Sindhi identity, rural life, migration, climate change, water rights, social justice, love, loss, resistance, and the dignity of common people. The colors, figures, symbols, and emotional textures in his work are connected to the soil of Sindh, but the feelings they carry are universal.

Zahid does not separate image from word. As a poet and writer, he brings language into his visual practice, allowing poetry, memory, and social reflection to inform his paintings and concepts. His creative process often begins with a word, a line of poetry, a social concern, or a remembered image from daily life. From there, it becomes a painting, a visual idea, a written piece, or a collaborative artistic direction.

Alongside his work as a visual artist, Zahid has contributed significantly to Sindhi poetry, writing, music-related creative projects, and art direction. He has worked as Art Director at Audio Lab Pakistan, where he contributed to music selection, music composition, and the visual direction of creative projects. He has also worked with Sindh TV in art direction, strengthening his experience in visual storytelling across media.

Zahid is also an active writer whose voice has addressed climate change, water rights, and social justice for marginalized communities. During Pakistan’s difficult political period of martial law in the early 2000s, he wrote articles for Khabrain Group, engaging with issues of public concern at a time when speaking openly required courage and conviction.

As a published poet, Zahid’s literary work has reached readers in Sindhi and through translation. His Sindhi poetry book Sada was published in 2002 by Sambara Academy. His selected poetry was later translated as Melan Chony by Sindhi Sangat United Kingdom in 2008. Another translation, Black Banded Time, translated by Ibrahim Khokhar, is currently in the publishing process with SCALA Canada.

Zahid’s visual work has been exhibited and presented at Karachi Arts Council, Pakistan National Council of Arts, Shah Abdul Latif University Khairpur, Khairpur Arts Council, World Sindhi Congress 2024, and Sindhi Association of North America, Houston 2025.

During his upcoming visit to the United States, Zahid seeks to connect with galleries, curators, artists, studios, universities, and cultural organizations for exhibitions, talks, and collaborations.

At its heart, Zahid Rajper’s art is about memory, language, resistance, belonging, and the human stories carried by land, people, and time.
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
      <div style={{ maxWidth: "750px" }}>
        
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
            textAlign: "justify",
          }}
        >
          {fullAbout}
        </p>

      </div>
    </section>
  );
};

export default Hero;