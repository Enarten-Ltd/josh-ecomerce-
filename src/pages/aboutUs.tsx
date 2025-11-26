const AboutUs = () => {
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>About Us</h1>
      <p>
        We are a passionate team dedicated to bringing you the best products with
        exceptional quality and service. Founded in 2024, our mission is to make
        online shopping simple, enjoyable and trustworthy.
      </p>
      <p>
        Every item in our store is carefully selected and tested. Your satisfaction
        is our top priority.
      </p>

      <h2 style={{ marginTop: 40 }}>Our Values</h2>
      <ul style={{ lineHeight: 1.8 }}>
        <li>✓ Quality first</li>
        <li>✓ Honest pricing</li>
        <li>✓ Fast & reliable shipping</li>
        <li>✓ Amazing customer support</li>
      </ul>

      <div style={{ marginTop: 40 }}>
        <a href="/" style={{ color: "#0066cc" }}>
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default AboutUs;