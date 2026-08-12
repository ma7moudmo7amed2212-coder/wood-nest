import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHeart,
  FiShoppingCart,
  FiSearch,
} from "react-icons/fi";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/useCart";

import "./Products.css";

const categories = [
  "الكل",
  "غرف كبيرة",
  "غرف أطفال",
  "شغل خاص بالمقاسات",
  "دولاب وتسريحة وكومود",
  "أنتريه وركنة",
  "ترابيزات شاشة",
  "أنتيكات",
  "سفر",
];

const products = [
  {
    id: 1,
    name: "غرفة نوم مودرن",
    category: "غرف كبيرة",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "غرفة أطفال",
    category: "غرف أطفال",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "ركنة مودرن",
    category: "أنتريه وركنة",
    price: 32000,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "ترابيزة شاشة",
    category: "ترابيزات شاشة",
    price: 12500,
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "دولاب مودرن",
    category: "دولاب وتسريحة وكومود",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "سفرة كاملة",
    category: "سفر",
    price: 38000,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "قطعة أنتيك",
    category: "أنتيكات",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
];

function Products() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [search, setSearch] = useState("");

  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "الكل" ||
      product.category === activeCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="products-page">
      <section className="products-hero">
        <p>WOOD NEST COLLECTION</p>
        <h1>منتجاتنا</h1>
        <span>
          اكتشف تشكيلتنا من الأثاث والتصميمات المختلفة
        </span>
      </section>

      <section className="products-section">
        <div className="products-toolbar">
          <div className="search-box">
            <FiSearch />
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="categories-filter">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  activeCategory === category ? "active" : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid-page">
            {filteredProducts.map((product) => (
              <article
                className="product-card-page"
                key={product.id}
              >
                <div className="product-image-page">
                  <Link
                    to={`/products/${product.id}`}
                    className="product-image-link"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>

                  <button
                    type="button"
                    className={`product-favorite ${
                      isInWishlist(product.id) ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleWishlist(product);
                    }}
                    aria-label={
                      isInWishlist(product.id)
                        ? "إزالة من المفضلة"
                        : "إضافة للمفضلة"
                    }
                  >
                    <FiHeart />
                  </button>

                  <button
                    type="button"
                    className="product-cart"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    <FiShoppingCart />
                    إضافة للسلة
                  </button>
                </div>

                <Link
                  to={`/products/${product.id}`}
                  className="product-details-link"
                >
                  <div className="product-info-page">
                    <span>{product.category}</span>
                    <h3>{product.name}</h3>
                    <strong>
                      {product.price.toLocaleString("ar-EG")} جنيه
                    </strong>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h2>مفيش منتجات مطابقة</h2>
            <p>
              جرب تبحث باسم منتج تاني أو اختار قسم مختلف.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Products;
