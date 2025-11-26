const Contact = () => {
  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out any time.</p>

      <div style={{ marginTop: 30, lineHeight: 1.8 }}>
        <p><strong>Email:</strong> hello@ygmail.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Hours:</strong> Mon–Fri 9am–6pm EST</p>
      </div>

      <button
        onClick={() => alert("Message sent!")}
        style={{
          marginTop: 30,
          padding: "12px 24px",
          background: "black",
          color: "white",
          borderRadius: 4,
          border: "none",
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        Send Us a Message
      </button>

      <div style={{ marginTop: 40 }}>
        <a href="/" style={{ color: "#0066cc" }}>
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Contact;