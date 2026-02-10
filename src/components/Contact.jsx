import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import background2 from "../assets/background2.jpg"; // 👈 import background

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iy228t8",     // 🔴 apni Service ID
        "template_alh737h",    // 🔴 apni Template ID
        form.current,
        "WLNmK4MlariB149OX"    // 🔴 apni Public Key
      )
      .then(() => {
        setSuccess(true);     // ✅ Show success message
        form.current.reset();
      })
      .catch((error) => {
        alert("Error: " + error.text);
      });
  };

  return (
    <section
      id="contact"
      style={{
        padding: "60px 20px",
        minHeight: "68vh",
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.5),
            rgba(0,0,0,0.5)
          ),
          url(${background2})
        `, // 👈 background image + dark overlay
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "40px" }}>Contact Me</h2>

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
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #555",
              backgroundColor: "#1a1a1a",
              color: "#fff",
            }}
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #fcf7f7",
              backgroundColor: "#1a1a1a",
              color: "#fff",
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #555",
              backgroundColor: "#292121",
              color: "#fff",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#4d89ff",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
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
