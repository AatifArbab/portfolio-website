import React, { useState, useEffect } from "react";
import profile from "../assets/zahid1.jpeg";
import background from "../assets/background.jpg";

const Hero = () => {
  const h1Text = "Hello, I'm Zahid Rajper";
  const texts = [
    "POET  – Creative wordsmith expressing emotions and ideas through poetry",
    "WRITER  – Skilled in crafting engaging articles, stories, and content",
    "CALLIRAPHIST ARTIST  – Expert in artistic handwriting and decorative lettering",
    "PAINTING ARTIST  – Passionate about visual art and painting with unique style",
    "MEMBER OF ART-COUNCIL – Active contributor to the local art community and events",
  ];

  const [typedH1, setTypedH1] = useState("");
  const [typedH2, setTypedH2] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndexH1, setCharIndexH1] = useState(0);
  const [charIndexH2, setCharIndexH2] = useState(0);

  // H1 typewriter animation
  useEffect(() => {
    if (charIndexH1 < h1Text.length) {
      const timeout = setTimeout(() => {
        setTypedH1(h1Text.slice(0, charIndexH1 + 1));
        setCharIndexH1(charIndexH1 + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [charIndexH1, h1Text]);

  // H2 typewriter animation (append, not replace)
  useEffect(() => {
    if (charIndexH1 === h1Text.length && textIndex < texts.length) {
      if (charIndexH2 < texts[textIndex].length) {
        const timeout = setTimeout(() => {
          setTypedH2((prev) => prev + texts[textIndex][charIndexH2]);
          setCharIndexH2(charIndexH2 + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTypedH2((prev) => prev + "\n"); // New line for next text
          setCharIndexH2(0);
          setTextIndex(textIndex + 1);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndexH2, charIndexH1, textIndex, texts]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        color: "#fff",
        whiteSpace: "pre-line",
        flexWrap: "wrap",
      }}
    >
      {/* Profile Image */}
      <div
        style={{
          marginRight: "40px",
          maxWidth: "250px",
          flex: "1 1 300px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <img
          src={profile}
          alt="Zahid Rajper"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          }}
        />
      </div>

      {/* Text Section */}
      <div
        style={{
          maxWidth: "600px",
          flex: "1 1 300px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
          }}
        >
          {typedH1}
        </h1>
        <h2
          style={{
            fontSize: "26px",
            lineHeight: "1.6",
            fontFamily: "'Merriweather', serif",
            fontWeight: 400,
            whiteSpace: "pre-line",
          }}
        >
          {typedH2}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
