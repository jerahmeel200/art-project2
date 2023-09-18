// Hero.js

import React, { useState, useEffect } from "react";

import { Fade, Slide } from "react-awesome-reveal";

import styles from "./Hero.module.css";
import Animations from "./Animations.module.css";

// import NewArivals from "../newArivals/NewArivals";

function Hero() {
  const randomTexts = [
    "Elegance in Every Brushstroke",
    "A Palette of Inspiration",
    "Journey Through Artistic Expression",
    "Elegance in Every Brushstroke",
    "Discover Your Artistic Muse",
    "Journey Through Artistic Expression",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isZoomIn, setIsZoomIn] = useState(true); // State to toggle zoom-in and zoom-out animations
  const images = [
    // "/images/img-1.png",
    // "/images/img-2.jpg",
    // "/images/img-3.png",
    // "/images/img-4.png",

    "/images/art-1.jpg",
    "/images/img-4.png",
    "/images/art-2.jpg",
    "/images/img-3.png",
    "/images/art-3.jpg",
    "/images/img-2.jpg",
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
            }`}>
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
              {randomTexts.map((x, i) => {
                if (currentIndex !== i) return null;

                return (
                  <Fade
                    key={x}
                    delay={1e3}
                    cascade
                    damping={1e-1}
                    style={{ color: "#fff" }}>
                    {x}
                  </Fade>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <NewArivals /> */}
    </>
  );
}

export default Hero;
