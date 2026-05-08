import React from "react";
import bgImage from "../assets/background1.jpg";

// 📚 BOOK IMAGES
import book1 from "../assets/Book1.jpeg";
import book2 from "../assets/Book2.jpeg";
import book3 from "../assets/Book3.jpeg";

const Books = () => {
  const publications = [
    {
      title: "Sada",
      image: book1,
      type: "Sindhi poetry collection",
      publisher: "Published by Sambara Academy, 2002",
    },
    {
      title: "MelanCholy",
      image: book2,
      type: "Translation of selected poetry of Zahid Rajper",
      translator: "Translated by Qadir Ansari",
      publisher: "Published by Sindhi Sangat United Kingdom, 2008",
    },
    {
      title: "Black Banded Time",
      image: book3,
      type: "Translation of selected poetry of Zahid Rajper",
      translator: "Translated by Ibrahim Khokhar",
      publisher: "In publishing process with SCALA Canada",
      expected: "Expected publication year: 2026",
    },
  ];

  return (
    <div style={styles.bgWrapper}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          
          <h2 style={styles.heading}>📚 Books & Publications</h2>

          <div style={styles.grid}>
            {publications.map((book, index) => (
              <div key={index} style={styles.card}>

                <img
                  src={book.image}
                  alt={book.title}
                  style={styles.bookImage}
                />

                <h3 style={styles.title}>{book.title}</h3>

                <p style={styles.type}>{book.type}</p>

                {book.translator && (
                  <p style={styles.text}>{book.translator}</p>
                )}

                <p style={styles.publisher}>{book.publisher}</p>

                {book.expected && (
                  <p style={styles.expected}>{book.expected}</p>
                )}
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
};

const styles = {
  bgWrapper: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    minHeight: "100vh",
    padding: "50px 20px",
  },

  container: {
    maxWidth: "1000px",
    margin: "auto",
    fontFamily: "Arial",
    color: "#fff",
  },

  heading: {
    textAlign: "center",
    fontSize: "2.3rem",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },

  card: {
    padding: "20px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.2)",
    textAlign: "center",
  },

  // ✅ FIXED IMAGE (NO CROP)
  bookImage: {
    width: "100%",
    height: "320px",
    objectFit: "contain",
    backgroundColor: "#111",
    borderRadius: "10px",
    marginBottom: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
  },

  title: {
    margin: 0,
    fontSize: "1.4rem",
  },

  type: {
    fontStyle: "italic",
    color: "#ddd",
  },

  text: {
    color: "#ccc",
  },

  publisher: {
    fontWeight: "bold",
    marginTop: "5px",
  },

  expected: {
    fontSize: "0.9rem",
    color: "#bbb",
  },

  section: {
    marginTop: "60px",
    textAlign: "center",
  },

  subHeading: {
    fontSize: "1.8rem",
  },

  paragraph: {
    maxWidth: "700px",
    margin: "auto",
    lineHeight: "1.7",
    color: "#ddd",
  },

  visitBox: {
    marginTop: "60px",
    padding: "25px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(8px)",
    textAlign: "center",
  },
};

export default Books;