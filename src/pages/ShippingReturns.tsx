const ShippingReturns = () => {
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1>Shipping & Returns</h1>

      <h2 style={{ marginTop: 40 }}>Shipping Information</h2>
      <ul style={{ lineHeight: 1.8 }}>
        <li>Free standard shipping on orders over $50</li>
        <li>Orders ship within 1–2 business days</li>
        <li>Express shipping available at checkout</li>
        <li>Tracking provided for every order</li>
      </ul>

      <h2 style={{ marginTop: 40 }}>Return Policy</h2>
      <ul style={{ lineHeight: 1.8 }}>
        <li>30-day return window</li>
        <li>Items must be unworn/unused with tags</li>
        <li>Return shipping is free (we send you a label)</li>
        <li>Refunds issued within 3 days of receiving return</li>
      </ul>

      <div style={{ marginTop: 50 }}>
        <a href="/contact" style={{ color: "#0066cc" }}>
          Contact support for return help →
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

export default ShippingReturns;