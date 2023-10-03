import React, { useState, useEffect } from "react";
import styles from "./NewArivals.module.css";
import { CustomSlideIn } from "../animated/CustomReveal";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const materials = ["Canvas", "Framed", "Unframed"];
function NewArivals() {
  const imgs = [
    { id: 0, value: "/images/img-1.png" },
    { id: 1, value: "/images/img-3.png" },
    { id: 2, value: "/images/img-5.png" },
  ];
  const [clicked, setclicked] = useState(null);
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
          <CustomSlideIn direction="left" duration={2000}>
            <div className={styles.left}>
              <div className={styles.galleryContainer}>
                {imgs.map((item, i) => (
                  <img
                    className={sliderData[0].id === i ? styles.clicked : ""}
                    key={item.id}
                    src={item.value}
                    alt="thumbnail"
                    onClick={() => handleImageClick(i)}
                  />
                ))}
              </div>
              <div className={styles.displayContainer}>
                <Zoom>
                  <img src={sliderData[0].value} alt="large" />
                </Zoom>
              </div>
            </div>
          </CustomSlideIn>
          <div className={styles.right}>
            <CustomSlideIn direction="right" duration={3000}>
              <div className={styles.desc}>
                <h4>NEW ARIVAL</h4>
                <h1>"Smoke Break Barack Obama & MLK"</h1>
                <h5 className={styles.price}>$169.00</h5>
              </div>

              <div>
                <h3 className={styles.h3}>MATERIAL</h3>
                {materials.map((m) => {
                  return (
                    <button
                      onClick={() => setclicked(m)}
                      className={
                        m === clicked
                          ? styles.materialButtonClicked
                          : styles.materialButton
                      }
                      key={m}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            </CustomSlideIn>

            <CustomSlideIn direction="right" duration={3000}>
              <div className={styles.btnCont}>
                <button>Add to cart</button>
              </div>
            </CustomSlideIn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArivals;
