import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("من فضلك املأ جميع البيانات");
      return;
    }

    alert("تم تسجيل الدخول بنجاح");
  };

  return (
    <main className="login-page">
      <div className="login-box">
        <p>WELCOME BACK</p>

        <h1>تسجيل الدخول</h1>

        <span>ادخل إلى حسابك في Wood Nest</span>

        <form onSubmit={handleSubmit}>
          <label>البريد الإلكتروني</label>

          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>كلمة المرور</label>

          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">تسجيل الدخول</button>
        </form>

        <Link to="/">العودة للرئيسية</Link>
      </div>
    </main>
  );
}

export default Login;