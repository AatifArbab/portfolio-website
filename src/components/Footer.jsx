import React from "react";
import facebookIcon from "../assets/facebook.jpg";
import instagramIcon from "../assets/instagram.jpg";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        padding: "10px 15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        fontSize: "12px",
        textAlign: "center",
      }}
    >
      {/* Social Media Icons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="https://www.facebook.com/bhittai.art"
          target="_blank"
          rel="noreferrer"
          style={{ display: "inline-block" }}
        >
          <img
            src={facebookIcon}
            alt="Facebook"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              objectFit: "contain",
            }}
          />
        </a>

        <a
          href="https://instagram.com/zahidhrajper"
          target="_blank"
          rel="noreferrer"
          style={{ display: "inline-block" }}
        >
          <img
            src={instagramIcon}
            alt="Instagram"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              objectFit: "contain",
            }}
          />
        </a>
      </div>

      {/* Copyright text */}
      <div style={{ width: "100%", textAlign: "center" }}>
        © {new Date().getFullYear()} Zahid Rajper. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
