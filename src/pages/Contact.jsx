import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p>GET IN TOUCH</p>
        <h1>تواصل معنا</h1>
        <span>يسعدنا الرد على استفساراتك</span>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>تواصل مع Wood Nest</h2>

          <p>
            لو عندك أي استفسار عن المنتجات أو عايز تعمل تصميم خاص،
            تقدر تتواصل معانا من خلال البيانات التالية.
          </p>

          <div className="contact-item">
            <FiPhone />
            <div>
              <span>الهاتف</span>
              <strong>01001174597</strong>
            </div>
          </div>

          <div className="contact-item">
            <FiMail />
            <div>
              <span>البريد الإلكتروني</span>
              <strong>mm34556464575@gmail.com</strong>
            </div>
          </div>

          <div className="contact-item">
            <FiMapPin />
            <div>
              <span>العنوان</span>
              <strong>القاهرة - مصر</strong>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <h2>ابعتلنا رسالة</h2>

          <input type="text" placeholder="الاسم" />
          <input type="tel" placeholder="رقم الهاتف" />
          <input type="email" placeholder="البريد الإلكتروني" />
          <textarea placeholder="اكتب رسالتك..." rows="6"></textarea>

          <button type="button">إرسال الرسالة</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;