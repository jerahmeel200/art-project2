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
    }, 5000);

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
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  // objectPosition: "center",
                  opacity: index === currentIndex ? 1 : 0,
                  transition: "opacity 3s ease-in-out",
                  // objectFit: "contain",
                  // objectFit: "cover",
                  // aspectRatio: "auto",
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
// import React, { useState, useEffect } from "react";

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     "https://cdn.pixabay.com/photo/2023/06/02/21/24/portrait-8036356_1280.jpg",
//     "https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_1280.jpg",
//     "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [images.length]);

//   return (
//     <>
//       {images.map((imageUrl, index) => (
//         <img
//           key={index}
//           src={imageUrl}
//           alt={`Image ${index + 1}`}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "200px",
//             height: "200px",
//             opacity: index === currentIndex ? 1 : 0,
//             transition: "opacity 3s ease-in-out",
//             objectFit: "cover",
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export default Hero;
