import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { slug } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h1>Product Detail</h1>

      <p>Product Slug: <strong>{slug}</strong></p>

      <p>This is a demo product description.</p>

      <button
        onClick={() => alert("Added to Cart")}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          background: "black",
          color: "white",
          borderRadius: 4,
          border: "none",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>

      <div style={{ marginTop: 20 }}>
        <a href="/cartapp">Go to Cart</a>
      </div>
    </div>
  );
};

export default ProductDetail;
