import React from "react";
import facebookIcon from "../assets/facebook.jpg";
import instagramIcon from "../assets/instagram.jpg";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0b0b0f",
        color: "#fff",
        padding: "12px 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* SOCIAL ICONS */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <a href="https://www.facebook.com/bhittai.art" target="_blank" rel="noreferrer">
          <img
            src={facebookIcon}
            alt="Facebook"
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        </a>

        <a href="https://www.instagram.com/zahidrajper01" target="_blank" rel="noreferrer">
          <img
            src={instagramIcon}
            alt="Instagram"
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        </a>
      </div>

      {/* EMAIL */}
      <a
        href="mailto:aatifarbab59@gmail.com"
        style={{
          color: "#ccc",
          textDecoration: "none",
          fontSize: "11px",
        }}
      >
      </a>

      {/* COPYRIGHT */}
      <div style={{ fontSize: "10px", color: "#777" }}>
        © {new Date().getFullYear()} Zahid Rajper
      </div>

      {/* CREDIT */}
      <div style={{ fontSize: "12px", color: "#555" }}>
        Designed & Developed by Aatif Arbab. <b>aatifarbab59@gmail.com</b>

      </div>
    </footer>
  );
};

export default Footer;