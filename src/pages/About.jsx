import "./About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p>ABOUT WOOD NEST</p>
        <h1>عن Wood Nest</h1>
        <span>نصنع مساحات تحكي ذوقك</span>
      </section>

      <section className="about-content">
        <div>
          <span className="about-label">WOOD NEST</span>
          <h2>أثاث يجمع بين الجودة والتصميم</h2>

          <p>
            في Wood Nest نهتم بتقديم قطع أثاث تجمع بين التصميم العصري
            والخامات عالية الجودة، مع الاهتمام بالتفاصيل التي تجعل كل قطعة
            مناسبة لمساحتك وذوقك.
          </p>

          <p>
            هدفنا هو تقديم تجربة بسيطة ومميزة للعميل بداية من تصفح المنتجات
            وحتى اختيار القطعة المناسبة.
          </p>
        </div>

        <div className="about-box">
          <h3>لماذا Wood Nest؟</h3>
          <div>✓ تصميمات عصرية</div>
          <div>✓ خامات عالية الجودة</div>
          <div>✓ اهتمام بالتفاصيل</div>
          <div>✓ تصميمات حسب المقاسات</div>
        </div>
      </section>
    </main>
  );
}

export default About;