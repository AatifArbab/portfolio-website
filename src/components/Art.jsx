import React, { useState, useEffect } from "react";

import profileImage from "../assets/image33.jpg";
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
      if (key) arr.push(allImages[key].default || allImages[key]);
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
        return { img, status: "SOLD" };
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
    if (tab === "Exhibition1") return "Exhibition in heston in 2024";
    if (tab === "Exhibition2") return "Exhibition in heston in 2025";
    return tab;
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${background5})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        padding: "30px 15px",
      }}
    >
      {/* MAIN IMAGE (FIXED - FULL IMAGE SHOW) */}
      <div style={{ textAlign: "center" }}>
        <img
          src={profileImage}
          alt="main"
          style={{
            width: isMobile ? "95%" : "400px",
            height: "auto",
            maxHeight: isMobile ? "450px" : "550px",
            objectFit: "contain",
            border: "5px solid #281d1d",
            borderRadius: "10px",
            background: "#fff",
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
            color: "#007bff",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          ▶ Watch on Facebook
        </a>
      </div>

      {/* TABS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
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
              padding: "10px 15px",
              borderRadius: "20px",
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
            marginTop: "25px",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "15px",
          }}
        >
          {sections[activeTab].map((item, index) => (
            <img
              key={index}
              src={item.img}
              onClick={() => setSelectedImage(item)}
              style={{
                width: "100%",
                height: isMobile ? "250px" : "150px",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}

      {/* POPUP */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
            padding: "20px",
          }}
        >
          <img
            src={selectedImage.img}
            style={{
              width: isMobile ? "90%" : "500px",
              borderRadius: "10px",
            }}
          />

          {activeTab === "Art" && (
            <>
              {selectedImage.status === "SOLD" ? (
                <p
                  style={{
                    color: "#000",
                    background: "#fff",
                    padding: "8px 20px",
                    marginTop: "15px",
                    fontWeight: "bold",
                    borderRadius: "5px",
                  }}
                >
                  ❌ SOLD
                </p>
              ) : (
                <div style={{ marginTop: "15px", color: "#fff" }}>
                  <p>📏 Size: {selectedImage.size}</p>
                  <p>🎨 Colour: {selectedImage.colour}</p>
                  <p>🖼️ Canvas: {selectedImage.canvas}</p>
                </div>
              )}
            </>
          )}

          <button
            onClick={() => setSelectedImage(null)}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
};

export default Art;