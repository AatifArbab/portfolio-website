import React, { useState, useEffect } from "react";

import profileImage from "../assets/image39.jpg";
import background5 from "../assets/background5.jpg";

const allImages = import.meta.glob("../assets/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const Art = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth <= 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImagesByRange = (prefix, count) => {
    let arr = [];

    for (let i = 1; i <= count; i++) {
      const key = Object.keys(allImages).find((path) =>
        path.toLowerCase().includes(`${prefix}${i}`.toLowerCase())
      );

      if (key) {
        arr.push(allImages[key].default || allImages[key]);
      }
    }

    return arr;
  };

  const canvasIndexes = [1, 5, 7, 8, 10, 13, 14, 16, 19, 20, 21, 24, 25];

  const sections = {
    Art: getImagesByRange("Art", 26).map((img, index) => {
      const num = index + 1;

      if (canvasIndexes.includes(num)) {
        return {
          img,
          size: "20x30",
          colour: "Acrylic",
          canvas: "Canvas",
          status: "Available",
        };
      } else {
        return {
          img,
          status: "SOLD",
        };
      }
    }),

    Calligraphy: getImagesByRange("Calligraphy", 18).map((img) => ({
      img,
    })),

    Exhibition1: getImagesByRange("1exhibition", 7).map((img) => ({
      img,
    })),

    Exhibition2: getImagesByRange("2exhibition", 10).map((img) => ({
      img,
    })),
  };

  const getTabLabel = (tab) => {
    if (tab === "Exhibition1") return "Exhibition in Houston in 2024";

    if (tab === "Exhibition2") return "Exhibition in Houston in 2025";

    return tab;
  };

  const artistStatement = `
Artist Statement

My work begins with memory, the memory of land, language, water, people, struggle, and the quiet stories carried by everyday life in Sindh.

I come from Khairpur, a district of Sindh, Pakistan, where culture lives in poetry, music, labor, oral history, rural life, and the resilience of ordinary people.

Through painting, poetry, writing, and visual direction, I explore the emotional and social life of people who are often unseen.

For me, art is not separate from society. A painting can carry the weight of a poem. A line of poetry can become an image.

Through my work, I hope to create a bridge between Sindh and the world, between memory and expression.
`;

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${background5})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        padding: "40px 15px",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: isMobile ? "38px" : "60px",
          marginBottom: "25px",
          fontFamily: "Georgia, serif",
          letterSpacing: "3px",
          textShadow: "0 5px 15px rgba(0,0,0,0.8)",
        }}
      >
        Artist
      </h1>

      {/* MAIN IMAGE */}
      <div style={{ textAlign: "center" }}>
        <img
          src={profileImage}
          alt="main"
          style={{
            width: isMobile ? "95%" : "420px",
            height: "auto",
            maxHeight: isMobile ? "450px" : "580px",
            objectFit: "contain",
            border: "5px solid #281d1d",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          }}
        />
      </div>

      {/* FACEBOOK LINK */}
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <a
          href="https://www.facebook.com/share/v/1AN6JoMNbt/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#00bfff",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          ▶ Watch on Facebook
        </a>
      </div>

      {/* ARTIST STATEMENT */}
      <div
        style={{
          maxWidth: "950px",
          margin: "35px auto",
          whiteSpace: "pre-line",
          fontSize: "16px",
          lineHeight: "2",
          color: "#fff",
          textAlign: "justify",
          fontFamily: "Georgia, serif",
          padding: "20px",
          background: "rgba(0,0,0,0.45)",
          borderRadius: "15px",
        }}
      >
        {artistStatement}
      </div>

      {/* TABS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        {Object.keys(sections).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSelectedImage(null);
            }}
            style={{
              padding: "12px 18px",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer",
              background: activeTab === tab ? "#281d1d" : "#ddd",
              color: activeTab === tab ? "#fff" : "#000",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            {getTabLabel(tab)}
          </button>
        ))}
      </div>

      {/* IMAGES */}
      {activeTab && (
        <div
          style={{
            marginTop: "35px",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "25px",
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {sections[activeTab].map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "14px",
                cursor: "pointer",
                background: "#111",
                boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={item.img}
                alt="Artwork"
                style={{
                  width: "100%",
                  height: isMobile ? "350px" : "320px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* STATUS */}
              {item.status && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    background:
                      item.status === "SOLD"
                        ? "rgba(255,0,0,0.8)"
                        : "rgba(0,128,0,0.8)",
                    color: "#fff",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  {item.status}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* IMAGE POPUP */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          {/* BACK BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: isMobile ? "20px" : "30px",
              left: isMobile ? "20px" : "40px",
              padding: "10px 18px",
              background: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            ← Back
          </button>

          {/* LARGE IMAGE */}
          <img
            src={selectedImage.img}
            alt="Selected Artwork"
            style={{
              width: isMobile ? "95%" : "75%",
              maxWidth: "1100px",
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: "15px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.8)",
            }}
          />

          {/* DETAILS */}
          <div
            style={{
              marginTop: "20px",
              color: "#fff",
              textAlign: "center",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            {selectedImage.status && (
              <p>
                <strong>Status:</strong> {selectedImage.status}
              </p>
            )}

            {selectedImage.size && (
              <p>
                <strong>Size:</strong> {selectedImage.size}
              </p>
            )}

            {selectedImage.colour && (
              <p>
                <strong>Colour:</strong> {selectedImage.colour}
              </p>
            )}

            {selectedImage.canvas && (
              <p>
                <strong>Surface:</strong> {selectedImage.canvas}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Art;