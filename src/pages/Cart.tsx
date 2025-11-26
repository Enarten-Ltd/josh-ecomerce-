const CartDetail = () => {
 

  return (
    <div style={{ padding: 20 }}>
      <h1>Cart Detail</h1>

     

      <p>This is a demo cart description.</p>

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
        <a href="/cart">Go to Cart</a>
      </div>
    </div>
  );
};

export default CartDetail;
