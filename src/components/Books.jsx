import React from "react";

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
      title: "Melancholy",
      image: book2,
      type: "Selected Translation ",
      translator: "Translated by Qadir Ansari",
      publisher: "Published by Sindhi Sangat United Kingdom, 2008",
    },
    {
      title: "Black Banded Time",
      image: book3,
      type: "Selected Translation ",
      translator: "Translated by Ibrahim Khokhar",
      publisher: "In publishing process with SCALA Canada",
      expected: "Comming Soon year: 2026",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        padding: "50px 20px",
        fontFamily: "Arial",
        color: "#111",
      }}
    >
      {/* HEADING */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "40px",
          fontWeight: "bold",
        }}
      >
        BOOK PUBLISHED
      </h2>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {publications.map((book, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={book.image}
              alt={book.title}
              style={{
                width: "100%",
                height: "340px",
                objectFit: "contain",
                background: "#f5f5f5",
                borderRadius: "0px", // square
              }}
            />

            <h3 style={{ marginTop: "15px" }}>{book.title}</h3>

            <p style={{ fontStyle: "italic", color: "#555" }}>
              {book.type}
            </p>

            {book.translator && (
              <p style={{ color: "#666" }}>{book.translator}</p>
            )}

            <p style={{ fontWeight: "bold" }}>{book.publisher}</p>

            {book.expected && (
              <p style={{ fontSize: "13px", color: "#777" }}>
                {book.expected}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;