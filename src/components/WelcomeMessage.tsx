function WelcomeMessage() {
  return (
    <div className="p-4 bg-yellow-100 rounded">
      <h2 className="text-3xl font-bold">Welcome!</h2>
      <p className = "text-2xl ">Thanks for visiting our site.</p>
    </div>
  );
}

// Using the component
function App() {
  return (
    <div>
      <WelcomeMessage />
      <WelcomeMessage />  {/* Reuse it multiple times! */}
    </div>
  );
}
export default WelcomeMessage;