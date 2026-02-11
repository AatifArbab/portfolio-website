import React, { useState, useEffect } from "react";
import logoImage from "../assets/favicon2.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuItems = ["Home", "About", "Art", "Contact"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = {
    width: "100%",
    height: isMobile ? "60px" : "65px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: isMobile ? "0 20px" : "0 40px",
    backgroundColor: "#050512",
    color: "#fff",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  };

  const desktopMenuStyle = {
    display: "flex",
    gap: isMobile ? "15px" : "30px",
  };

  // ✅ Corrected dots style for top-right
  const dotsContainerStyle = {
    display: isMobile ? "flex" : "none",
    flexDirection: "column",
    gap: "4px",
    cursor: "pointer",
    position: "absolute",
    right: "20px", // top-right
    top: "20px",   // top offset
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: isMobile ? "14px" : "16px",
    transition: "0.3s",
  };

  const mobileDropdownStyle = {
    position: "absolute",
    top: isMobile ? "60px" : "65px",
    left: 0,
    width: "100%",
    backgroundColor: "rgba(5, 5, 18, 0.98)",
    display: isMobile && isOpen ? "flex" : "none",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px 0",
    gap: "15px",
    borderBottom: "2px solid #00e5ff",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <nav style={navStyle}>
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={logoImage}
          alt="logoImage"
          style={{ width: isMobile ? "28px" : "35px", height: isMobile ? "28px" : "35px" }}
        />
        <span style={{ fontWeight: "bold", fontSize: isMobile ? "16px" : "18px" }}>
          Zahid Rajper
        </span>
      </div>

      {/* Three Dots for Mobile */}
      <div style={dotsContainerStyle} onClick={() => setIsOpen(!isOpen)}>
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            style={{
              width: isMobile ? "5px" : "6px",
              height: isMobile ? "5px" : "6px",
              backgroundColor: "#00e5ff",
              borderRadius: "50%",
            }}
          ></div>
        ))}
      </div>

      {/* Desktop Links */}
      {!isMobile && (
        <div style={desktopMenuStyle}>
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={linkStyle}>
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Mobile Dropdown */}
      <div style={mobileDropdownStyle}>
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            style={linkStyle}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
