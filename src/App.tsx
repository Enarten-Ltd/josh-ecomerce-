import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import WelcomeMessage from "./components/WelcomeMessage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import ShippingReturns from "./pages/ShippingReturns";
import Counter from "./pages/Counter";
import ContactForm from "./pages/ContactForm";
import TodoList from "./pages/TodoList";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product/" element={<ProductDetail />} />
	<Route path="/cartapp/" element={<Cart />} />

	<Route path="/welcome/" element={<WelcomeMessage />} />
	<Route path="/aboutus" element={<AboutUs />} />
	<Route path="/contact" element={<Contact />} />
	<Route path="/help" element={<Help />} />
	<Route path="/shippingreturns" element={<ShippingReturns />} />
	<Route path="/counter" element={<Counter />} />
	<Route path="/contactform" element={<ContactForm />} />
	<Route path="/todolist" element={<TodoList/>} />






	
      </Routes>
    </Router>
  );
};

export default App;
