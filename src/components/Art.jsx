import React, { useState, useEffect } from "react";
import background5 from "../assets/background5.jpg";

const allImages = import.meta.glob("../assets/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const Art = () => {
  const [activeTab, setActiveTab] = useState("Art"); // 👈 default open
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

      return canvasIndexes.includes(num)
        ? {
            img,
            size: "20x30",
            colour: "Acrylic",
            canvas: "Canvas",
            status: "Available",
          }
        : { img, status: "SOLD" };
    }),

    Calligraphy: getImagesByRange("Calligraphy", 18).map((img) => ({ img })),

    Exhibition1: getImagesByRange("1exhibition", 7).map((img) => ({ img })),

    Exhibition2: getImagesByRange("2exhibition", 10).map((img) => ({ img })),
  };

  const getTabLabel = (tab) => {
    if (tab === "Exhibition1") return "Exhibition in Houston 2024";
    if (tab === "Exhibition2") return "Exhibition in Houston 2025";
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
        }}
      >
        ARTIST
      </h1>

      {/* ARTIST STATEMENT */}
      <div
        style={{
          maxWidth: "950px",
          margin: "0 auto 35px",
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
            margin: "35px auto",
          }}
        >
          {sections[activeTab].map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                cursor: "pointer",
                background: "#111",
              }}
            >
              <img
                src={item.img}
                alt="art"
                style={{
                  width: "100%",
                  height: isMobile ? "350px" : "320px",
                  objectFit: "cover",
                }}
              />

              {item.status && (
                <div
                  style={{
                    position: "absolute",
                    marginTop: "-40px",
                    marginLeft: "10px",
                    background:
                      item.status === "SOLD"
                        ? "red"
                        : "green",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                >
                  {item.status}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* POPUP */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          {/* BACK BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              padding: "10px 15px",
              background: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>

          <img
            src={selectedImage.img}
            style={{
              width: isMobile ? "90%" : "70%",
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Art;