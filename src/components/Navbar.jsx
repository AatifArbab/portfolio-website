import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/favicon2.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Art", link: "/art" },
        { name: "Books", link: "/books" },
    { name: "Contact", link: "/contact" },
  ];

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
    gap: "30px",
  };

  const dotsContainerStyle = {
    display: isMobile ? "flex" : "none",
    flexDirection: "column",
    gap: "4px",
    cursor: "pointer",
  };

  const dotStyle = {
    width: "6px",
    height: "6px",
    backgroundColor: "#00e5ff",
    borderRadius: "50%",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const mobileDropdownStyle = {
    position: "absolute",
    top: "60px",
    left: 0,
    width: "100%",
    backgroundColor: "rgba(5, 5, 18, 0.98)",
    display: isMobile && isOpen ? "flex" : "none",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px 0",
    gap: "15px",
    borderBottom: "2px solid #00e5ff",
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={logoImage}
          alt="logo"
          style={{ width: "32px", height: "32px", borderRadius: "50%" }}
        />
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
          Zahid Rajper
        </span>
      </div>

      {/* Mobile Menu Button */}
      <div
        style={dotsContainerStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
      </div>

      {/* Desktop Menu */}
      {!isMobile && (
        <div style={desktopMenuStyle}>
          {menuItems.map((item) => (
            <Link key={item.name} to={item.link} style={linkStyle}>
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Dropdown */}
      <div style={mobileDropdownStyle}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            style={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;