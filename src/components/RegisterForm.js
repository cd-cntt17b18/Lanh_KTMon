import React, { useState } from "react";

function RegisterForm({ onRegisterSuccess, onBackToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu không khớp!");
      return;
    }

    // Giả sử đăng ký thành công, bạn có thể thay thế bằng logic thực tế
    setErrorMessage("");

    // Sau khi đăng ký thành công, gọi hàm đăng nhập vào game
    onRegisterSuccess(username);

    // Chuyển hướng đến game (có thể mở game trong một tab mới)
    window.open("https://kiemvu.cmn.vn/play-s256", "_blank"); // URL game

    // Nếu bạn muốn điều hướng người dùng trong trang hiện tại thay vì mở trong tab mới:
    // window.location.href = "https://kiemvu.cmn.vn/play-s256";
  };

  return (
    <div className="register-form">
      <h2>Đăng Ký</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tên người dùng</label>
          <input
            type="text"
            placeholder="Tên người dùng"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Nhập lại mật khẩu</label>
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Đăng ký</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>

      {/* Nút Thoát */}
      <button className="btn-back" onClick={onBackToLogin}>
        Quay lại Đăng nhập
      </button>
    </div>
  );
}

export default RegisterForm;
