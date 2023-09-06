// Hero.js

import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Animations from "./Animations.module.css";

// import NewArivals from "../newArivals/NewArivals";

function Hero() {
  const randomTexts = [
    "Use client",
    "Get started now",
    "Boost your productivity",
    "Discover new possibilities",
  ];

  const [randomText, setRandomText] = useState(getRandomText());

  function getRandomText() {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    return randomTexts[randomIndex];
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRandomText(getRandomText());
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isZoomIn, setIsZoomIn] = useState(true); // State to toggle zoom-in and zoom-out animations
  const images = [
    "/images/img-1.png",
    "/images/img-2.jpg",
    "/images/img-3.png",
    "/images/img-4.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsZoomIn((prevIsZoomIn) => !prevIsZoomIn); // Toggle the zoom-in and zoom-out animations
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <div className={styles.videoContainer}>
        <div className={styles.placeholderImageWrapper}>
          <div
            className={`${styles.imageContainer} ${
              isZoomIn ? Animations["zoom-in"] : Animations["zoom-out"]
            }`}
          >
            {images.map((imageUrl, index) => (
              <img
                className={styles.imageHero}
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  transition: "opacity 3s ease-in-out",
                }}
              />
            ))}

            <div className={styles.randomTextContainer}>
              <h2>{randomText}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <NewArivals /> */}
    </>
  );
}

export default Hero;
