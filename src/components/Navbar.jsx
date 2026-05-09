import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(null);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Art", link: "/art" },
    { name: "Books", link: "/books" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = {
    width: "100%",
    height: isMobile ? "60px" : "65px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#050512",
    color: "#fff",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    fontFamily: "Arial, sans-serif",
  };

  const menuStyle = {
    display: "flex",
    gap: "35px",
  };

  const linkStyle = (index) => ({
    color: hovered === index ? "#00e5ff" : "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "0.3s ease",
  });

  const dotsContainerStyle = {
    display: isMobile ? "flex" : "none",
    flexDirection: "column",
    gap: "4px",
    position: "absolute",
    right: "20px",
    cursor: "pointer",
  };

  const dotStyle = {
    width: "6px",
    height: "6px",
    backgroundColor: "#00e5ff",
    borderRadius: "50%",
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
      {/* Desktop Menu */}
      {!isMobile && (
        <div style={menuStyle}>
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.link}
              style={linkStyle(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Button */}
      <div
        style={dotsContainerStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
      </div>

      {/* Mobile Dropdown */}
      <div style={mobileDropdownStyle}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
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