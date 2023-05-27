import React, { useState } from "react";

const About = () => {
  const [isActive, setIsActive] = useState(false);

  const hamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className="bg">
        <img />
      </div>
      <div className="overlay"></div>
      <div className="navbar">
        <div className="logo">
          <a>
            Logis<span>tik</span>
          </a>
        </div>

        <div className="menu">
          <a>Home</a>
          <a>Reservasi</a>
          <a>Contact</a>
          <a>Abous Us</a>
        </div>

        <div
          className={`hamburger ${isActive ? "block" : " "}`}
          onClick={() => hamburger()}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`menuDrop ${isActive ? "block" : " "}`}>
          <a>Home</a>
          <a>Reservasi</a>
          <a>Contact</a>
          <a>Abous Us</a>
        </div>
      </div>

      <div class="hero">
        <h1>
          Selamat Datang di Restoran Logis<span>tik</span>
        </h1>
        <p>
          Di mana segala cita rasa dan keindahan bersatu dalam satu kesatuan,
          menanti untuk memanjakan lidah dan hatimu dalam setiap hidangan yang
          kami sajikan.
        </p>
        <a class="btn">Lihat Menu Kami</a>
      </div>
    </div>
  );
};

export default About;
