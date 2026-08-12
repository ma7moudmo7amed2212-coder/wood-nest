import { Link } from "react-router-dom";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/useCart";
import "./Wishlist.css";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <main className="wishlist-page">
        <div className="empty-wishlist">
          <h1>المفضلة فارغة ❤️</h1>
          <p>
            لم تقم بإضافة أي منتجات للمفضلة حتى الآن.
          </p>
          <Link to="/products">تصفح المنتجات</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="wishlist-page">
      <section className="wishlist-header">
        <p>WOOD NEST</p>
        <h1>المفضلة ❤️</h1>
      </section>

      <section className="wishlist-grid">
        {wishlist.map((product) => (
          <article className="wishlist-card" key={product.id}>
            <div className="wishlist-image">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>

              <button
                type="button"
                className="remove-wishlist"
                onClick={() => removeFromWishlist(product.id)}
                aria-label="إزالة من المفضلة"
              >
                <FiTrash2 />
              </button>
            </div>

            <div className="wishlist-info">
              <span>{product.category}</span>
              <h2>{product.name}</h2>

              <div className="wishlist-price">
                {product.price.toLocaleString("ar-EG")} جنيه
              </div>

              <button
                type="button"
                className="wishlist-cart-btn"
                onClick={() => addToCart(product)}
              >
                <FiShoppingCart />
                إضافة للسلة
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Wishlist;
