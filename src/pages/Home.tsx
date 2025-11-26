const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Home Page</h1>
      <p>Welcome to the shop. Browse our products below.</p>

      <div style={{ marginTop: 30 }}>
        <a href="/product/sample-product" 
           style={{ color: "blue", textDecoration: "underline" }}>
          View Sample Product
        </a>
      </div>
      <div>
        <h3>  iphone </h3>
<img src="img/1.jpg" alt="" 
style={{
width: "250px",
height: "250px",
objectFit: "cover",
borderRadius: "8px"
}}
 />
<p>Price: $100</p>

      </div>

<div>
  <h3>  iphone </h3>
<img src="img/1.jpg" alt="" 
style={{
width: "250px",
height: "250px",
objectFit: "cover",
borderRadius: "8px"
}}
 />
<p>Price: $100</p>
</div>


    </div>
  );
};

export default Home;
