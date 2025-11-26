const Help = () => {
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>Frequently Asked Questions</h1>

      <div style={{ marginTop: 30 }}>
        <h3>How long does shipping take?</h3>
        <p>Standard shipping: 3–7 business days. Express: 1–2 business days.</p>

        <h3 style={{ marginTop: 20 }}>Do you ship internationally?</h3>
        <p>Yes! We currently ship to over 50 countries.</p>

        <h3 style={{ marginTop: 20 }}>What is your return policy?</h3>
        <p>30-day hassle-free returns. Item must be unused and in original packaging.</p>

        <h3 style={{ marginTop: 20 }}>Can I track my order?</h3>
        <p>Absolutely! You'll receive a tracking link as soon as your order ships.</p>
      </div>

      <div style={{ marginTop: 50 }}>
        Still have questions?{' '}
        <a href="/contact" style={{ color: "#0066cc" }}>
          Contact us
        </a>
      </div>

      <div style={{ marginTop: 40 }}>
        <a href="/" style={{ color: "#0066cc" }}>
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default Help;