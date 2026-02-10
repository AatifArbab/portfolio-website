import React, { useState, useEffect } from "react";
import logoImage from "../assets/favicon2.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuItems = ["Home", "About", "Art", "Contact"];

  // Screen size check karne ke liye logic
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px se niche mobile
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = {
    width: "100%",
    height: "65px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
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
    gap: "30px",
  };

  const dotsContainerStyle = {
    display: isMobile ? "flex" : "none", // Sirf mobile par dikhega
    flexDirection: "column",
    gap: "4px",
    cursor: "pointer",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "0.3s",
  };

  const mobileDropdownStyle = {
    position: "absolute",
    top: "65px",
    left: 0,
    width: "100%",
    backgroundColor: "rgba(5, 5, 18, 0.98)",
    display: isMobile && isOpen ? "flex" : "none",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    gap: "15px",
    borderBottom: "2px solid #00e5ff",
  };

  return (
    <nav style={navStyle}>
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={logoImage} // ✅ public folder se direct
          alt="Logo"
          style={{ width: "35px", height: "35px" }}
        />
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>Zahid Rajper</span>
      </div>

      {/* CENTER: Three Dots (Only for Mobile) */}
      <div style={dotsContainerStyle} onClick={() => setIsOpen(!isOpen)}>
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#00e5ff",
              borderRadius: "50%",
            }}
          ></div>
        ))}
      </div>

      {/* RIGHT: Desktop Links */}
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

