import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import background2 from "../assets/background2.jpg";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Window resize listener for mobile adjustments
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iy228t8",   // 🔴 apni Service ID
        "template_alh737h",  // 🔴 apni Template ID
        form.current,
        "WLNmK4MlariB149OX"  // 🔴 apni Public Key
      )
      .then(() => {
        setSuccess(true);     // ✅ Show success message
        form.current.reset();
      })
      .catch((error) => {
        alert("Error: " + error.text);
      });
  };

  // Base styles
  const sectionStyle = {
    padding: windowWidth <= 480 ? "40px 15px" : "60px 20px", // smaller padding for mobile
    minHeight: "68vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    textAlign: "center",
  };

  const formStyle = {
    maxWidth: windowWidth <= 480 ? "90%" : "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #555",
    backgroundColor: "#1a1a1a",
    color: "#fff",
  };

  const emailInputStyle = {
    ...inputStyle,
    border: "1px solid #fcf7f7",
  };

  const textareaStyle = {
    ...inputStyle,
    backgroundColor: "#292121",
  };

  const buttonStyle = {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4d89ff",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h2 style={{ marginBottom: "30px", fontSize: windowWidth <= 480 ? "28px" : "36px" }}>
        Contact Me
      </h2>

      {success ? (
        <p
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "18px",
            marginTop: "20px",
          }}
        >
          Thank you! Your message has been sent successfully.
        </p>
      ) : (
        <form ref={form} onSubmit={sendEmail} style={formStyle}>
          <input type="text" name="from_name" placeholder="Your Name" required style={inputStyle} />
          <input type="email" name="from_email" placeholder="Your Email" required style={emailInputStyle} />
          <textarea name="message" placeholder="Your Message" rows="5" required style={textareaStyle}></textarea>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#3a6ed9")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4d89ff")}
          >
            Send
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
