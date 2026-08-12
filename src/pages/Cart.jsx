import { Link } from "react-router-dom";
import {
  FiPlus,
  FiMinus,
  FiTrash2,
  FiShoppingBag,
} from "react-icons/fi";
import { useCart } from "../context/useCart";
import "./Cart.css";

function Cart() {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <FiShoppingBag />

          <h1>السلة فارغة</h1>

          <p>
            لم تقم بإضافة أي منتجات إلى السلة حتى الآن.
          </p>

          <Link to="/products">
            تصفح المنتجات
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">

      <section className="cart-header">
        <p>WOOD NEST</p>
        <h1>سلة المشتريات</h1>
      </section>

      <section className="cart-container">

        <div className="cart-items">

          {cart.map((item) => (
            <article className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">

                <span>{item.category}</span>

                <h2>{item.name}</h2>

                <strong>
                  {item.price.toLocaleString("ar-EG")} جنيه
                </strong>

                <div className="cart-quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    <FiMinus />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    <FiPlus />
                  </button>

                </div>

              </div>

              <button
                className="remove-item"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                <FiTrash2 />
              </button>

            </article>
          ))}

        </div>

        <aside className="cart-summary">

          <h2>ملخص الطلب</h2>

          <div className="summary-row">
            <span>عدد المنتجات</span>
            <strong>{cart.length}</strong>
          </div>

          <div className="summary-row">
            <span>الإجمالي</span>

            <strong>
              {cartTotal.toLocaleString("ar-EG")} جنيه
            </strong>
          </div>

          <Link
            to="/checkout"
            className="checkout-btn"
          >
            إتمام الطلب
          </Link>

          <Link
            to="/products"
            className="continue-shopping"
          >
            متابعة التسوق
          </Link>

        </aside>

      </section>

    </main>
  );
}

export default Cart;