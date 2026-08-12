import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Products */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Wishlist */}
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {/* WhatsApp Floating Button */}
     <a
  href="https://wa.me/20100174597"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
  aria-label="Contact us on WhatsApp"
>
  <FaWhatsapp />
</a>

<div className="watermark">
  Mahmoud Mohamed
</div>
      {/* Watermark */}
      <div className="watermark">
        Mahmoud Mohamed
      </div>
    </BrowserRouter>
  );
}

export default App;