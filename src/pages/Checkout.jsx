import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import "./Checkout.css";

function Checkout() {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address) {
      alert("من فضلك املأ البيانات المطلوبة");
      return;
    }

    alert("تم استلام طلبك بنجاح ❤️");

    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <div className="empty-checkout">
          <h1>السلة فارغة</h1>
          <p>أضف منتجات أولًا لإتمام الطلب.</p>

          <Link to="/products">
            العودة للمنتجات
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">

      <section className="checkout-header">
        <p>WOOD NEST</p>
        <h1>إتمام الطلب</h1>
      </section>

      <section className="checkout-container">

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <h2>بيانات العميل</h2>

          <label>
            الاسم بالكامل
          </label>

          <input
            type="text"
            name="name"
            placeholder="اكتب اسمك"
            value={form.name}
            onChange={handleChange}
          />

          <label>
            رقم الهاتف
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="01xxxxxxxxx"
            value={form.phone}
            onChange={handleChange}
          />

          <label>
            العنوان
          </label>

          <textarea
            name="address"
            placeholder="اكتب عنوان التوصيل بالتفصيل"
            value={form.address}
            onChange={handleChange}
          />

          <label>
            ملاحظات إضافية
          </label>

          <textarea
            name="notes"
            placeholder="أي ملاحظات على الطلب..."
            value={form.notes}
            onChange={handleChange}
          />

          <button type="submit">
            تأكيد الطلب
          </button>
        </form>

        <aside className="checkout-summary">

          <h2>ملخص الطلب</h2>

          {cart.map((item) => (
            <div
              className="checkout-product"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <h3>{item.name}</h3>

                <p>
                  الكمية: {item.quantity}
                </p>

                <strong>
                  {(item.price * item.quantity).toLocaleString(
                    "ar-EG"
                  )}{" "}
                  جنيه
                </strong>
              </div>
            </div>
          ))}

          <div className="checkout-total">
            <span>الإجمالي</span>

            <strong>
              {cartTotal.toLocaleString("ar-EG")} جنيه
            </strong>
          </div>

        </aside>

      </section>

    </main>
  );
}

export default Checkout;