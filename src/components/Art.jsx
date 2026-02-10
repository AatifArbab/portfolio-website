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
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center", // Center items on smaller screens
        }}
      >
        {/* Profile Image */}
        <div style={{
          flex: "1 1 300px",
          minWidth: "250px", // Ensure it doesn't shrink too small
        }}>
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
        <div style={{
          flex: "2 1 400px",
          minWidth: "250px", // Prevent too small on mobile
        }}>
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

          {/* Preview Paintings */}
          <div
            style={{
              marginTop: "30px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // smaller on mobile
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

      {/* Full Paintings Grid */}
      {showPaintings && (
        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // responsive columns
            gap: "20px",
            maxWidth: "1200px",
            margin: "50px auto 0 auto",
          }}
        >
          {paintings.map((item) => (
            <div key={item.id} style={{ textAlign: "center" }}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "200px", // smaller height for mobile
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h4 style={{ marginTop: "8px", fontSize: "14px" }}>{item.title}</h4>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
