import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  const menuStyle = {
    display: "flex",
    gap: "25px",
  };

  // 🔥 ACTIVE + NORMAL STYLE
  const linkStyle = ({ isActive }) => ({
    padding: "8px 14px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "15px",
    color: isActive ? "#000" : "#fff",
    background: isActive ? "#00e5ff" : "transparent",
    border: isActive ? "2px solid #00e5ff" : "2px solid transparent",
    transition: "0.3s",
  });

  const mobileDropdownStyle = {
    position: "absolute",
    top: "60px",
    left: 0,
    width: "100%",
    backgroundColor: "#050512",
    display: isMobile && isOpen ? "flex" : "none",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    padding: "15px 0",
  };

  return (
    <nav style={navStyle}>
      {/* Desktop Menu */}
      {!isMobile && (
        <div style={menuStyle}>
          {menuItems.map((item) => (
            <NavLink key={item.name} to={item.link} style={linkStyle}>
              {item.name}
            </NavLink>
          ))}
        </div>
      )}

      {/* Mobile Button */}
      {isMobile && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{ position: "absolute", right: "20px", cursor: "pointer" }}
        >
          <div style={{ width: 6, height: 6, background: "#00e5ff", margin: 2 }} />
          <div style={{ width: 6, height: 6, background: "#00e5ff", margin: 2 }} />
          <div style={{ width: 6, height: 6, background: "#00e5ff", margin: 2 }} />
        </div>
      )}

      {/* Mobile Dropdown */}
      <div style={mobileDropdownStyle}>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            style={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;