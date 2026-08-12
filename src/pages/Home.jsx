import "./Home.css";
import CustomFurniture from "../components/CustomFurniture";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">WELCOME TO WOOD NEST</p>

          <h1>
            Make Your Home
            <br />
            Feel More <span>Beautiful</span>
          </h1>

          <p className="hero-description">
            Discover elegant furniture designed to bring comfort,
            style, and warmth to your home.
          </p>

          <div className="hero-buttons">
            <a href="/products" className="primary-btn">
              Shop Now
            </a>

            <a href="/about" className="secondary-btn">
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <Categories />

      {/* Featured Products */}
      <FeaturedProducts />
      <CustomFurniture />
    </main>
  );
}

export default Home;