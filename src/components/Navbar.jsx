import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser, FiMenu } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          Wood <span>Nest</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="nav-actions">
          <Link to="/wishlist">
            <FiHeart />
          </Link>

          <Link to="/cart">
            <FiShoppingCart />
          </Link>

          <Link to="/login">
            <FiUser />
          </Link>

          <button className="menu-btn">
            <FiMenu />
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;