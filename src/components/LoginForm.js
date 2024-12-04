import React, { useState } from "react";
import "./LoginForm.js";

function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hàm xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();

    // Kiểm tra thông tin tài khoản
    if (username === "all" && password === "game123") {
      onLoginSuccess(); // Gọi hàm khi đăng nhập thành công
    } else {
      setError("Thông tin đăng nhập không đúng!");
    }
  };

  return (
    <div className="login-form">
      <h2>Đăng Nhập</h2>

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Tài Khoản:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tài khoản"
          />
        </div>
        <div className="form-group">
          <label>Mật Khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  );
}

export default LoginForm;
