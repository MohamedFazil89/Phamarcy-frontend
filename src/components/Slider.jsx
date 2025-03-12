import React, { useState, useEffect, useRef } from "react";
import "./styles/Slider.css";

const images = [
  "https://wallpaperaccess.com/full/1154341.jpg",
  "https://images5.alphacoders.com/343/thumb-1920-343645.jpg",
  "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700291270.jpg",
  "https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg",
  "https://images6.alphacoders.com/462/thumb-1920-462371.jpg",
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slider-container" ref={slideRef}>
        <ul style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img, i) => (
            <li key={i}>
              <img src={img} alt={`Slide ${i + 1}`} />
            </li>
          ))}
        </ul>
      </div>
      <button className="prev" onClick={prevSlide}>&#8810;</button>
      <button className="next" onClick={nextSlide}>&#8811;</button>
    </div>
  );
};

export default Slider;
