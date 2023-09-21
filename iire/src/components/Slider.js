import React, { useState } from "react";

export default function Slider() {
  const images = [
    "http://oralinestore.com/wp-content/uploads/2021/11/IIRE_Meeting-room_Ambon_01.jpg",
    "http://oralinestore.com/wp-content/uploads/2021/11/s1.jpg",
    "http://oralinestore.com/wp-content/uploads/2021/11/IIRE_Meeting-room_Ambon_01.jpg",
    "http://oralinestore.com/wp-content/uploads/2021/11/s1.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider">
      <div className="slide fade">
        <span onClick={prevSlide} className="prev-button slide-button">
          {"<"}
        </span>
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <span onClick={nextSlide} className="slide-button next-button">
          {">"}
        </span>
      </div>
    </div>
  );
}
