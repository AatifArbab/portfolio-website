import React from "react";
import facebookIcon from "../assets/facebook.jpg";
import instagramIcon from "../assets/instagram.jpg";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        padding: "5px 20px", // footer chhota
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        fontSize: "12px",
      }}
    >
      {/* Social Media Icons Center */}
      <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <a
          href="https://www.facebook.com/bhittai.art?mibextid=rS40aB7S9Ucbxw6v"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={facebookIcon}
            alt="Facebook"
            style={{
              width: "25px",   // icon thoda bada
              height: "25px",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>

        <a
           href="https://instagram.com/zahidhrajper"
           target="_blank"
          rel="noreferrer"
        >
          <img
            src={instagramIcon}
            alt="Instagram"
            style={{
              width: "25px",   // icon thoda bada
              height: "25px",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>
      </div>

      {/* Copyright Text Left */}
      <div style={{ alignSelf: "flex-start" }}>
        © {new Date().getFullYear()} Zahid Rajper. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
