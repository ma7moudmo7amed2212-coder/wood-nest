import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiHeart,
  FiShoppingCart,
  FiMinus,
  FiPlus,
} from "react-icons/fi";
import { useCart } from "../context/useCart";
import { useWishlist } from "../context/WishlistContext";
import "./ProductDetails.css";

const products = [
  {
    id: 1,
    name: "غرفة نوم مودرن",
    category: "غرف كبيرة",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    description:
      "غرفة نوم مودرن بتصميم أنيق وخامات عالية الجودة، مناسبة للمساحات المختلفة.",
    material: "خشب طبيعي عالي الجودة",
    dimensions: "حسب التصميم",
  },
  {
    id: 2,
    name: "غرفة أطفال",
    category: "غرف أطفال",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    description:
      "غرفة أطفال عملية ومريحة بتصميم عصري ومساحات تخزين مناسبة.",
    material: "خشب MDF عالي الجودة",
    dimensions: "حسب التصميم",
  },
  {
    id: 3,
    name: "ركنة مودرن",
    category: "أنتريه وركنة",
    price: 32000,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
    description:
      "ركنة مودرن تجمع بين الراحة والشكل العصري وتناسب غرف المعيشة.",
    material: "خشب وإسفنج عالي الكثافة",
    dimensions: "حسب المساحة",
  },
  {
    id: 4,
    name: "ترابيزة شاشة",
    category: "ترابيزات شاشة",
    price: 12500,
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1000&q=80",
    description:
      "وحدة شاشة أنيقة مع مساحات تخزين متعددة وتصميم عملي.",
    material: "خشب طبيعي",
    dimensions: "180 × 45 × 55 سم",
  },
  {
    id: 5,
    name: "دولاب مودرن",
    category: "دولاب وتسريحة وكومود",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
    description:
      "دولاب مودرن بتصميم عملي ومساحة تخزين كبيرة.",
    material: "خشب MDF عالي الجودة",
    dimensions: "حسب التصميم",
  },
  {
    id: 6,
    name: "سفرة كاملة",
    category: "سفر",
    price: 38000,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
    description:
      "سفرة أنيقة بتصميم عصري مناسبة لغرفة الطعام.",
    material: "خشب طبيعي",
    dimensions: "حسب التصميم",
  },
  {
    id: 7,
    name: "قطعة أنتيك",
    category: "أنتيكات",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    description:
      "قطعة أنتيك مميزة تضيف لمسة فخمة وأنيقة للمكان.",
    material: "خشب طبيعي",
    dimensions: "حسب القطعة",
  },
];

function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>المنتج غير موجود</h1>
        <p>المنتج الذي تبحث عنه غير متاح حاليًا.</p>
        <Link to="/products">العودة للمنتجات</Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i += 1) {
      addToCart(product);
    }
  };

  return (
    <main className="product-details-page">
      <div className="product-details-container">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-content">
          <span className="details-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="details-price">
            {product.price.toLocaleString("ar-EG")} جنيه
          </div>

          <p className="details-description">
            {product.description}
          </p>

          <div className="product-specs">
            <div>
              <span>الخامة</span>
              <strong>{product.material}</strong>
            </div>
            <div>
              <span>المقاسات</span>
              <strong>{product.dimensions}</strong>
            </div>
          </div>

          <div className="quantity-section">
            <span>الكمية</span>

            <div className="quantity-control">
              <button
                type="button"
                onClick={() =>
                  setQuantity((q) => Math.max(1, q - 1))
                }
              >
                <FiMinus />
              </button>

              <strong>{quantity}</strong>

              <button
                type="button"
                onClick={() =>
                  setQuantity((q) => q + 1)
                }
              >
                <FiPlus />
              </button>
            </div>
          </div>

          <div className="details-actions">
            <button
              type="button"
              className="add-cart-btn"
              onClick={handleAddToCart}
            >
              <FiShoppingCart />
              إضافة للسلة
            </button>

            <button
              type="button"
              className={`add-favorite-btn ${
                isInWishlist(product.id) ? "active" : ""
              }`}
              onClick={() => toggleWishlist(product)}
              aria-label="إضافة للمفضلة"
            >
              <FiHeart />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
