import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const data = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702166400&semt=ais",
    "https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg",
    "https://wallpapers.com/images/featured/beautiful-3vau5vtfa3qn7k8v.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNarqODMTLWO5AuzSwR6irDlVrGmR3KUlLbg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG2OUg-JeTi3o7bFEIPFkjSlbjFWIKpTNp-Q&usqp=CAU",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(!currentIndex ? data.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  /*

The issue in the code is everytime it's making an api call when we are doing next/prev
so, we should be let all the pic called first and then display one and hide others rather making api call each time.

*/

  return (
    <div className="carousel-container">
      <button onClick={handlePrev}>PREV</button>
      {/* <img className="carousel-image" src={data[currentIndex]} alt="carousel" /> */}
      {data.map((url, index) => (
        <img
          className={`carousel-image ${currentIndex === index ? "active" : "disable"}`}
          src={url}
          alt="carousel"
          key={url}
        />
      ))}
      <button onClick={handleNext}>NEXT</button>
    </div>
  );
};

export default Carousel;
