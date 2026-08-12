import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    name: "غرفة نوم مودرن",
    category: "غرف كبيرة",
    price: "45,000",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "غرفة أطفال مودرن",
    category: "غرف أطفال",
    price: "28,000",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "ركنة مودرن",
    category: "أنتريه وركنة",
    price: "32,000",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "وحدة شاشة خشبية",
    category: "ترابيزات شاشة",
    price: "12,500",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="section-header">
        <p>WOOD NEST COLLECTION</p>
        <h2>منتجات مميزة</h2>
        <span>
          مجموعة مختارة من أحدث تصميمات Wood Nest
        </span>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />

              <button className="favorite-btn">
                <FiHeart />
              </button>

              <button className="cart-btn">
                <FiShoppingCart />
                إضافة للسلة
              </button>
            </div>

            <div className="product-info">
              <span>{product.category}</span>

              <h3>{product.name}</h3>

              <div className="product-bottom">
                <strong>{product.price} جنيه</strong>

                <Link to="/products">
                  التفاصيل
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="view-all">
        <Link to="/products">
          عرض جميع المنتجات
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProducts;