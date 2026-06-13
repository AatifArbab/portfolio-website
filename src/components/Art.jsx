import React, { useState, useEffect } from "react";

const allImages = import.meta.glob("../assets/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const Art = () => {
  const [activeTab, setActiveTab] = useState("Art");
  const [selectedImage, setSelectedImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const canvasIndexes = [1, 5, 7, 8, 10, 13, 14, 16, 19, 20, 21, 24, 25 ,27 ,28];

  const sections = {
    Art: getImagesByRange("Art", 28).map((img, index) => {
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

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        padding: "40px 15px",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          textAlign: "center",
          color: "#000",
          fontSize: isMobile ? "38px" : "60px",
          marginBottom: "25px",
          fontFamily: "Georgia, serif",
        }}
      >
        ART
      </h1>

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
              borderRadius: "0px",
              border: "1px solid #000",
              cursor: "pointer",
              background: activeTab === tab ? "#000" : "#fff",
              color: activeTab === tab ? "#fff" : "#000",
              fontWeight: "bold",
            }}
          >
            {getTabLabel(tab)}
          </button>
        ))}
      </div>

      {/* IMAGES GRID */}
      {activeTab && (
        <div
          style={{
            marginTop: "35px",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(3, 1fr)", // 👈 laptop pe 3 images
            gap: "25px",
            maxWidth: "1400px",
            margin: "35px auto",
          }}
        >
          {sections[activeTab].map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                overflow: "hidden",
                cursor: "pointer",
                background: "#f5f5f5",
                position: "relative",
                borderRadius: "0px", // 👈 square images
              }}
            >
              <img
                src={item.img}
                alt="art"
                style={{
                  width: "100%",
                  height: isMobile ? "350px" : "420px",
                  objectFit: "cover",
                  transition: "0.4s ease",
                  transform:
                    hoveredIndex === index ? "scale(1.03)" : "scale(1)",
                }}
              />

              {item.status && (
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    background:
                      item.status === "SOLD" ? "red" : "green",
                    color: "#fff",
                    padding: "5px 10px",
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
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          {/* CLOSE BUTTON (TOP LEFT ON IMAGE AREA) */}
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              color: "#fff",
              fontSize: "40px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ×
          </div>

          <img
            src={selectedImage.img}
            alt=""
            style={{
              width: isMobile ? "92%" : "70%",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "0px",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Art;