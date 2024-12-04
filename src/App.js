import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import GameScreen from "./components/GameScreen";
import HomePage from "./components/HomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [isGameStarted, setIsGameStarted] = useState(false); // Trạng thái bắt đầu game
  const [isRegistering, setIsRegistering] = useState(false); // Trạng thái đăng ký

  // Hàm xử lý đăng nhập thành công
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Hàm xử lý đăng ký thành công
  const handleRegisterSuccess = () => {
    setIsRegistering(false); // Đóng form đăng ký khi thành công
    alert("Đăng ký thành công! Bạn có thể đăng nhập ngay!");
  };

  // Hàm quay lại form đăng nhập
  const handleBackToLogin = () => {
    setIsRegistering(false);
  };

  // Hàm bắt đầu game
  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  // Hàm thoát game
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsGameStarted(false);
  };

  return (
    <div className="App">
      {/* Phần thanh điều hướng */}
      <header>
        <div className="navbar">
          <ul>
            <li>
              <a
                href="https://www.leagueoflegends.com/vi-vn/?utm_medium=card1%2Bsupport-leagueoflegends.riotgames.com&utm_source=riotbar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trang Chủ
              </a>
            </li>
            <li>
              <a
                href="https://status.riotgames.com/?locale=vi_VN"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dịch Vụ
              </a>
            </li>
            <li>
              <a
                href="https://support.riotgames.com/hc/vi/p/bans-and-reports"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Báo Cáo
              </a>
            </li>
            <li>
              <a
                href="https://support.riotgames.com/hc/vi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hỗ Trợ
              </a>
            </li>
            <li>
              <a
                href="https://www.hcaptcha.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chính sách
              </a>
            </li>
          </ul>
        </div>
        <h1>THÔNG TIN ĐĂNG NHẬP</h1>
      </header>

      <div className="container">
        {/* Phần form đăng nhập/đăng ký */}
        <div className="auth-section">
          {!isLoggedIn ? (
            <div>
              {!isRegistering ? (
                <LoginForm onLoginSuccess={handleLoginSuccess} />
              ) : (
                <RegisterForm
                  onRegisterSuccess={handleRegisterSuccess}
                  onBackToLogin={handleBackToLogin}
                />
              )}

              {/* Nút chuyển sang form đăng ký */}
              {!isRegistering && (
                <p>
                  Chưa có tài khoản?{" "}
                  <button
                    onClick={() => setIsRegistering(true)}
                    className="btn-switch-form"
                  >
                    Đăng ký
                  </button>
                </p>
              )}

              {/* Nút chuyển sang form đăng nhập */}
              {isRegistering && (
                <p>
                  Quên mật khẩu?{" "}
                  <button
                    onClick={() => setIsRegistering(false)}
                    className="btn-switch-form"
                  >
                    Đăng nhập
                  </button>
                </p>
              )}
            </div>
          ) : (
            <div>
              {!isGameStarted ? (
                <GameScreen onStartGame={handleStartGame} />
              ) : (
                <div className="game-play">
                  <h2>Chơi Game!</h2>
                  <p>Chúc bạn chơi vui vẻ!</p>
                  <button className="btn-play-again">Chơi lại</button>
                  <button className="btn-logout" onClick={handleLogout}>
                    Thoát Game
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Phần danh sách game bên cạnh */}
        <div className="games-list">
          <h2>Danh Sách Game</h2>
          <div className="game-card">
            <img
              src="https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/hinh-nen-game-thu-cho-may-tinh-9.jpg"
              alt="League of Legends"
            />
            <h3>LEAGUE OF LEGENDS</h3>
            <a
              className="btn-play-game"
              href="https://www.leagueoflegends.com/vi-vn/?utm_medium=card1%2Bsupport-leagueoflegends.riotgames.com&utm_source=riotbar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chơi
            </a>
          </div>
          <div className="game-card">
            <img
              src="https://didongviet.vn/dchannel/wp-content/uploads/2022/11/identity-v-didongviet@2x.jpg"
              alt="Identity V"
            />
            <h3>Identity V</h3>

            <a
              className="btn-play-game"
              href="https://idv.163.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chơi
            </a>
          </div>
          <div className="game-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDlHOOJtpaJgR57eXIG0o6WXsrNMdSPiArQ&s"
              alt="Game 3"
            />
            <h3>Au 2</h3>
            <a
              className="btn-play-game"
              href="https://au2.vtcgame.vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chơi
            </a>
          </div>
        </div>
      </div>

      {/* Thêm các phần dịch vụ, liên hệ, và hỗ trợ */}
      <section id="services" className="section">
        <h2>Dịch Vụ</h2>
        <p>
          Chúng tôi cung cấp các dịch vụ trò chơi online chất lượng cao và hỗ
          trợ người chơi mọi lúc mọi nơi.
        </p>
      </section>

      <section id="contact" className="section">
        <h2>Liên Hệ</h2>
        <p>Email: support@game.com</p>
        <p>Hotline: 1800-1234</p>
        <p>Địa chỉ: 123 Game Street, Hà Nội, Việt Nam</p>
      </section>

      <section id="support" className="section">
        <h2>Giúp Đỡ</h2>
        <p>
          Cần giúp đỡ? Hãy liên hệ với chúng tôi qua email hoặc gọi hotline để
          được hỗ trợ nhanh chóng.
        </p>
      </section>
    </div>
  );
}

export default App;
