  import React, { useState } from "react";
  import profileImage from "../assets/image33.jpg";
  import background5 from "../assets/background5.jpg";

  // Paintings Images
  import image from "../assets/image.jpg";
  import image1 from "../assets/image1.jpeg";
  import image2 from "../assets/image2.jpeg";
  import image3 from "../assets/image3.jpeg";
  import image4 from "../assets/image4.jpeg";
  import image5 from "../assets/image5.jpeg";
  import image6 from "../assets/image6.jpeg";
  import image7 from "../assets/image7.jpeg";
  import image8 from "../assets/image8.jpeg";
  import image9 from "../assets/image9.jpeg";
  import image10 from "../assets/image10.jpeg";
  import image11 from "../assets/image11.jpeg";
  import image12 from "../assets/image12.jpeg";
  import image13 from "../assets/image13.jpeg";
  import image14 from "../assets/image14.jpeg";
  import image15 from "../assets/image15.jpeg";
  import image16 from "../assets/image16.jpeg";
  import image17 from "../assets/image17.jpeg";
  import image18 from "../assets/image18.jpeg";
  import image19 from "../assets/image19.jpeg";
  import image20 from "../assets/image20.jpeg";
  import image21 from "../assets/image21.jpeg";
  import image22 from "../assets/image22.jpeg";
  import image23 from "../assets/image23.jpeg";
  import image24 from "../assets/image24.jpeg";
  import image25 from "../assets/image25.jpeg";
  import image26 from "../assets/image26.jpeg";
  import image27 from "../assets/image27.jpeg";
  import image28 from "../assets/image28.jpeg";
  import image29 from "../assets/image29.jpeg";
  import image30 from "../assets/image30.jpeg";
  import image31 from "../assets/image31.jpeg";
  import image32 from "../assets/image32.jpeg";
  import image35 from "../assets/image35.jpg";
  import image38 from "../assets/image38.jpeg";
  import image39 from "../assets/image39.jpeg";
  import image40 from "../assets/image40.jpeg";
  import image41 from "../assets/image41.jpeg";
  import image42 from "../assets/image42.jpeg";

  // Facebook Video Info
  const facebookVideo = {
    title1: "A Unique Gift Through Art",
    title2: "See video on this link",
    link: "https://www.facebook.com/share/v/1AN6JoMNbt/",
  };

  // Paintings Data
  const paintings = [
    { id: 1, title: "Art 1", img: image },
    { id: 2, title: "Art 2 ",  img: image1 },
    { id: 3, title: "Art 3", img: image2 },
    { id: 4, title: "Art 4 ",img: image3 },
    { id: 5, title: "Art 5", img: image4 },
    { id: 6, title: "Art 6", img: image5 },
    { id: 7, title: "Art 7", img: image6 },
    { id: 8, title: "Art 8", img: image7 },
    { id: 9, title: "Art 9", img: image8 },
    { id: 10, title: "Art 10", img: image9 },
    { id: 11, title: "Art 11", img: image10 },
    { id: 12, title: "Art 12", img: image11 },
    { id: 13, title: "Art 13", img: image12 },
    { id: 14, title: "Art 14", img: image13 },
    { id: 15, title: "Art 15", img: image14 },
    { id: 16, title: "Art 16", img: image15 },
    { id: 17, title: "Art 17", img: image16 },
    { id: 18, title: "Art 18", img: image17 },
    { id: 19, title: "Art 19", img: image18 },
    { id: 20, title: "Art 20", img: image19 },
    { id: 21, title: "Art 21", img: image20 },
    { id: 22, title: "Art 22", img: image21 },
    { id: 23, title: "Art 23", img: image22 },
    { id: 24, title: "Art 24", img: image23 },
    { id: 25, title: "Art 25", img: image24 },
    { id: 26, title: "Art 26", img: image25 },
    { id: 27, title: "Art 27", img: image26 },
    { id: 28, title: "Art 28", img: image27 },
    { id: 29, title: "Art 29", img: image28 },
    { id: 30, title: "Art 30", img: image29 },
    { id: 31, title: "Art 31", img: image30 },
    { id: 32, title: "Art 32", img: image31 },
    { id: 33, title: "Art 33", img: image32 },
    { id: 34, title: "Art 34", img: image35 },
    { id: 35, title: "Art 35", img: image38 },
    { id: 36, title: "Art 36", img: image39 },
    { id: 37, title: "Art 37", img: image40 },
    { id: 38, title: "Art 38", img: image41 },
    { id: 39, title: "Art 39", img: image42 },
  ];

  const Art = () => {
    const [showPaintings, setShowPaintings] = useState(false);

    return (
      <section
        id="art"
        style={{
          padding: "60px 20px",
          minHeight: "82vh",
          backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${background5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#332525",
        }}
      >
                <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          My Art
        </h1>

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Profile Image */}
          <div style={{ flex: "1 1 300px" }}>
            <img
              src={profileImage}
              alt="Zahid Rajper"
              style={{
                width: "100%",
                maxWidth: "380px",
                height: "430px",
                objectFit: "cover",
                border: "4px solid #281d1d",
                boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
              }}
            />
          </div>

          {/* Video + Preview */}
          <div style={{ flex: "2 1 400px" }}>
            <h3>{facebookVideo.title1}</h3>
            <h4 style={{ color: "#493535" }}>{facebookVideo.title2}</h4>

            <a
              href={facebookVideo.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#4d89ff", fontWeight: "bold" }}
            >
              ▶ Watch on Facebook
            </a>

            {/* 🔥 Preview Paintings (3) */}
            <div
              style={{
                marginTop: "30px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                maxWidth: "650px",
              }}
            >
              {paintings.slice(0, 3).map((item) => (
                <div key={item.id} style={{ textAlign: "center" }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                    }}
                  />
                  <h4 style={{ marginTop: "8px" }}>{item.title}</h4>
                </div>
              ))}
            </div>

            {/* Button */}
            <div
              onClick={() => setShowPaintings(!showPaintings)}
              style={{
                marginTop: "10px",
                padding: "13px",
                background: "#dae2e7",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              🎨 View Full Paintings Collection
            </div>
          </div>
        </div>

        {/* 🔥 Full Paintings Grid */}
        {showPaintings && (
          <div
            style={{
              marginTop: "100px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              maxWidth: "100px",
              margin: "10px auto",
            }}
          >
            {paintings.map((item) => (
              <div key={item.id} style={{ textAlign: "center" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <h4 style={{ marginTop: "10px" }}>{item.title}</h4>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  };
  export default Art;
