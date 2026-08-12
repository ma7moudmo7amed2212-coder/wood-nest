import { Link } from "react-router-dom";
import "./Categories.css";

const categories = [
  {
    name: "غرف كبيرة",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "غرف أطفال",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "شغل خاص بالمقاسات",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "دولاب وتسريحة وكومود",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "أنتريه وركنة",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "ترابيزات شاشة",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80",
  },
 
  {
    name: "أنتيكات",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "سفر",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80",
  },
];

function Categories() {
  return (
    <section className="categories">
      <div className="section-header">
        <p>WOOD NEST COLLECTION</p>

        <h2>اكتشف أقسام الموبيليا</h2>

        <span>
          اختار القسم المناسب وشوف أحدث التصميمات والمنتجات
        </span>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            to="/products"
            className="category-card"
            key={category.name}
          >
            <img src={category.image} alt={category.name} />

            <div className="category-overlay">
              <h3>{category.name}</h3>

              <span>اكتشف القسم →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;