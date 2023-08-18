import React from "react";
import styles from "./Products.module.css";

function Hero() {
  return (
    <div>
      <div className={styles.heroSection}>
        <img
          className={styles.backgroundImage}
          src="/images/productHero.webp"
          alt="Background"
        />
        <h1 className={styles.heroTitle}>Artworks</h1>
      </div>
    </div>
  );
}

export default Hero;
