import React from "react";
import "./GameScreen.js";

function GameScreen({ gameName, onStartGame }) {
  const gameLinks = {
    "League of Legends": "https://www.leagueoflegends.com/vi-vn/",
    "Identity V": "https://www.identityvgame.com/",
    "Game 3": "https://www.example.com", // URL cho game 3, thay bằng link thực tế
  };

  const handleStartGame = () => {
    // Mở trang web tương ứng với game đang chơi
    if (gameLinks[gameName]) {
      window.open(gameLinks[gameName], "_blank"); // Mở trang game trong tab mới
    }
    onStartGame(); // Sau khi mở trang, tiếp tục với hành động bắt đầu game
  };

  return (
    <div className="game-screen">
      <h2>Chào mừng đến với bình nguyên vô tận!</h2>
      <p>Hãy bắt đầu đi săn nào.</p>
      {/* Dùng thẻ <a> để mở link */}
      <a
        href="https://kiemvu.cmn.vn/play-s256"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button onClick={onStartGame} className="start-button">
          Bắt đầu chơi
        </button>
      </a>
    </div>
  );
}

export default GameScreen;
