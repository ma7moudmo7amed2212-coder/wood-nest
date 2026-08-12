import { Link } from "react-router-dom";
import "./CustomFurniture.css";

function CustomFurniture() {
  return (
    <section className="custom-furniture">
      <div className="custom-content">
        <p className="custom-label">CUSTOM MADE</p>

        <h2>
          صمّم قطعة
          <br />
          <span>على مقاسك</span>
        </h2>

        <p className="custom-description">
          عندك مساحة معينة أو تصميم في دماغك؟
          ابعتلنا المقاسات والتفاصيل، وإحنا نهتم بتنفيذ
          القطعة بالشكل المناسب ليك.
        </p>

        <div className="custom-features">
          <div>
            <strong>01</strong>
            <span>حدد المقاسات</span>
          </div>

          <div>
            <strong>02</strong>
            <span>اختار التصميم</span>
          </div>

          <div>
            <strong>03</strong>
            <span>اطلب التنفيذ</span>
          </div>
        </div>

        <Link to="/custom-order" className="custom-btn">
          اطلب تصميم خاص
        </Link>
      </div>

      <div className="custom-image">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
          alt="Custom Furniture"
        />
      </div>
    </section>
  );
}

export default CustomFurniture;