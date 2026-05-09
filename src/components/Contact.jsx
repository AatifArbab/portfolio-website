import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_iy228t8",
        "template_alh737h",
        form.current,
        "WLNmK4MlariB149OX"
      )
      .then(() => {
        alert("✅ Email sent successfully!");
        setSuccess(true);
        setLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("❌ Error sending message");
      });
  };

  const sectionStyle = {
    padding: windowWidth <= 480 ? "40px 15px" : "60px 20px",
    minHeight: "100vh",
    background: "#ffffff",
    color: "#111",
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
    border: "1px solid #ccc",
    backgroundColor: "#f5f5f5",
    color: "#111",
  };

  const buttonStyle = {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <section id="contact" style={sectionStyle}>
      {/* TITLE */}
      <h2 style={{ marginBottom: "25px", fontSize: "36px" }}>
        Contact Me
      </h2>

      {/* FORM */}
      {success ? (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✅ Message sent successfully!
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
            style={inputStyle}
          ></textarea>

          <button type="submit" style={buttonStyle}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      )}

      {/* 👇 UPCOMING VISIT (PREMIUM STYLE TEXT) */}
      <div
        style={{
          marginTop: "45px",
          maxWidth: "850px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          color: "#1a1a1a",
          fontFamily: "Georgia, serif",
          padding: "10px 0",
        }}
      >
        <h3
          style={{
            fontSize: "22px",
            letterSpacing: "1px",
            marginBottom: "18px",
            fontWeight: "600",
          }}
        >
          Upcoming U.S. Visit
        </h3>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "2",
            color: "#333",
            letterSpacing: "0.2px",
          }}
        >
          Zahid Rajper will be visiting the United States in{" "}
          <span style={{ fontWeight: "600" }}>Houston, Texas</span> and{" "}
          <span style={{ fontWeight: "600" }}>Richmond, Virginia</span> during{" "}
          <span style={{ fontWeight: "600" }}>June–July 2026</span> for gallery
          meetings, exhibitions, studio visits, artist collaborations, and
          cultural exchange opportunities.
        </p>
      </div>
    </section>
  );
};

export default Contact;