import { useState } from "react";
import "./style/Caroussel.css"; // Make sure to include your CSS
import telechargementImage from "../assets/GB-Console-isole.png";

const slides = [
  {
    id: 1,
    description: "De nouvelles possibilités",
    title: "PS VITA OLED",
    image: telechargementImage,
  },
  {
    id: 2,
    description: "De nouveaux horizons",
    title: "NDS LITE",
    image: "../assets/GBA/SIDE/GBA-Side-ClearBlack_Shell_GBA_0027-side-02.png",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="left-arrow" onClick={prevSlide}>
        {"<"}
      </button>

      <div className="slider-content">
        <div className="slider-image-container">
          <img
            src={slides[currentIndex].image}
            alt="slider-img"
            className="slider-image"
          />
        </div>
        <div className="slider-text">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>

      <button className="right-arrow" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default Slider;
