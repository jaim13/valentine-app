import { useState } from "react";
import "./App.css";

function App() {
  const [noStyle, setNoStyle] = useState({});
  const [scale, setScale] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;

    setNoStyle({
      transform: `translate(${x}px, ${y}px) scale(${scale})`,
    });

    setScale((s) => Math.max(s - 0.08, 0.5));
  };

  const handleNo = () => {
    setShowModal(true);
  };

  const handleYes = () => {
    const phone = "50664700712";
    const message = "She said YES 💖 Valentine confirmed!";
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Would you be my Valentine on Feb 14? 💕</h1>

        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXdmNHZiNjZ0bXhiaHE5cDNzazI1aDg4dWtueWx5cmVldGNvM2l4MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J00aGaP1oQTlZWSD2Y/giphy.gif"
          alt="cute gif"
          className="gif"
        />

        <div className="buttons">
          <button className="yes" onClick={handleYes}>
            Yes 💖
          </button>

          <button
            className="no"
            style={noStyle}
            onMouseEnter={moveNoButton}
            onClick={handleNo}
          >
            No 😢
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Are you sure? 🥺</h2>

            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWlmeGYwejB0b2RrN2h2d2VpNGV1YTZlb3MyYm9xdTNiZ3BhMjIyMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4V3RuU0zSq1SC8Hh4x/giphy.gif"
              alt="sad gif"
              className="modal-gif"
            />

            <button
              className="modal-back"
              onClick={() => {
                setShowModal(false);
                moveNoButton();
              }}
            >
              No, I'm not. Go back 💕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
