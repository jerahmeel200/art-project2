import React, { useState, useEffect } from "react";
import styles from "./NewArivals.module.css";

function NewArivals() {
  const imgs = [
    { id: 0, value: "/images/img-1.png" },
    { id: 1, value: "/images/img-2.jpg" },
    { id: 2, value: "/images/img-3.png" },
  ];
  const [sliderData, setSliderData] = useState([imgs[0]]);

  const handleImageClick = (index) => {
    console.log(index);
    const slider = [imgs[index]];
    setSliderData(slider);
  };

  return (
    <div className={styles.borderTop}>
      <div className="main">
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.galleryContainer}>
              {imgs.map((item, i) => (
                <img
                  className={sliderData.id === i ? styles.clicked : ""}
                  key={item.id}
                  // height="100"
                  // width="70"
                  src={item.value}
                  alt="thumbnail"
                  onClick={() => handleImageClick(i)}
                />
              ))}
            </div>
            <div className={styles.displayContainer}>
              <img src={sliderData[0].value} alt="large" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.desc}>
              <h4>NEW ARIVAL</h4>
              <h1>Smoke Break Barack Obama & MLK</h1>
              <h5 className="text-1xl font-bold  ">$169.00</h5>
            </div>

            <div className={styles.btnCont}>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArivals;
