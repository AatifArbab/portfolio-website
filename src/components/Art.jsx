import React, { useState, useEffect } from "react";

import profileImage from "../assets/image34.jpeg";
import background5 from "../assets/background5.jpg";

const allImages = import.meta.glob("../assets/*.{png,jpg,jpeg,svg}", { eager: true });

const Art = () => {
  const [activeTab, setActiveTab] = useState("Art");
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

  // 🎯 ART LOGIC
  const artImages = getImagesByRange("Art", 26);
  const canvasIndexes = [1,5,7,8,10,13,14,16,19,20,21,24,25];

  const sections = {
    Art: artImages.map((img, index) => {
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

  const currentImages = sections[activeTab];

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${background5})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        padding: "40px 20px",
      }}
    >
      {/* TITLE */}
      <h1 style={{ textAlign: "center", fontSize: "42px", color: "#281d1d" }}>
        MY ART
      </h1>

      <div
        style={{
          display: "flex",
          gap: "40px",
          maxWidth: "1100px",
          margin: "40px auto",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "1", textAlign: "center" }}>
          <img
            src={profileImage}
            alt="profile"
            style={{
              width: "100%",
              maxWidth: "350px",
              height: "450px",
              objectFit: "cover",
              border: "5px solid #281d1d",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: "2" }}>

          {/* TEXT */}
          <h3 style={{ color: "#fff", marginBottom: "10px" }}>
            🎁 This artwork was gifted to AudioLab — this is its video showcase.
          </h3>

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/share/v/1AN6JoMNbt/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              marginBottom: "20px",
              color: "#007bff",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            ▶ Watch on Facebook
          </a>

          {/* TABS */}
          <div style={{ marginBottom: "20px" }}>
            {Object.keys(sections).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedImage(null);
                }}
                style={{
                  margin: "5px",
                  padding: "10px 15px",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                  background: activeTab === tab ? "#281d1d" : "#ddd",
                  color: activeTab === tab ? "#fff" : "#000",
                  fontWeight: "bold",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* IMAGE VIEW */}
          {selectedImage ? (
            <div
              style={{
                textAlign: "center",
                position: isMobile ? "fixed" : "static",
                top: 0,
                left: 0,
                width: "100%",
                height: isMobile ? "100vh" : "auto",
                background: isMobile ? "rgba(0,0,0,0.9)" : "transparent",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 999,
              }}
            >
              <img
                src={selectedImage.img}
                style={{
                  width: isMobile ? "90%" : "100%",
                  maxWidth: "500px",
                  borderRadius: "10px",
                }}
              />

              {/* 🔥 ONLY FOR ART TAB */}
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
                        fontSize: "18px",
                        borderRadius: "5px",
                      }}
                    >
                      ❌ SOLD
                    </p>
                  ) : (
                    <div style={{ marginTop: "15px" }}>
                      <p style={{ fontWeight: "bold", color: "#fff" }}>
                        📏 Size: <span style={{ color: "#ffd700" }}>{selectedImage.size}</span>
                      </p>
                      <p style={{ fontWeight: "bold", color: "#fff" }}>
                        🎨 Colour: <span style={{ color: "#00e6e6" }}>{selectedImage.colour}</span>
                      </p>
                      <p style={{ fontWeight: "bold", color: "#fff" }}>
                        🖼️ Canvas: <span style={{ color: "#ff9966" }}>{selectedImage.canvas}</span>
                      </p>
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
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fill, minmax(150px,1fr))",
                gap: "15px",
              }}
            >
              {currentImages.map((item, index) => (
                <img
                  key={index}
                  src={item.img}
                  onClick={() => setSelectedImage(item)}
                  style={{
                    width: "100%",
                    height: isMobile ? "250px" : "140px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Art;