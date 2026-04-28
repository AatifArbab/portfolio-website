import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import background2 from "../assets/background2.jpg";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Screen resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // SEND EMAIL FUNCTION
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_iy228t8",   // ✅ tumhari service id
        "template_alh737h",  // ✅ tumhari template id
        form.current,
        "WLNmK4MlariB149OX"  // ✅ tumhari public key
      )
      .then((result) => {
        console.log("SUCCESS:", result);
        alert("✅ Email sent successfully!");
        setSuccess(true);
        setLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.log("FULL ERROR:", error); // 👈 important debug
        setLoading(false);
        alert("❌ Error: " + (error.message || "Check console"));
      });
  };

  // STYLES
  const sectionStyle = {
    padding: windowWidth <= 480 ? "40px 15px" : "60px 20px",
    minHeight: "70vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h2 style={{ marginBottom: "30px", fontSize: windowWidth <= 480 ? "28px" : "36px" }}>
        Contact Me
      </h2>

      {success ? (
        <p style={{ color: "#00ff99", fontWeight: "bold" }}>
          ✅ Your message has been sent successfully!
        </p>
      ) : (
        <form ref={form} onSubmit={sendEmail} style={formStyle}>
          
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            style={textareaStyle}
          ></textarea>

          <button type="submit" style={buttonStyle}>
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
      )}
    </section>
  );
};

export default Contact;