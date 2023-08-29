import React from "react";
import styles from "./NewCollection.module.css";
import StarRating from "../../reusables/StarRating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const collections = [
  {
    id: 1,
    image: "/images/limited-1.webp",
    title: "Freedom Family Tree ( Malcom X, MLK and Harriet Tubman)",
    rating: 4.5,
    price: "$99.9",
  },
  {
    id: 2,
    image: "/images/limited-1.webp",
    title: "Freedom Family Tree ( Malcom X, MLK and Harriet Tubman)",
    rating: 4.5,
    price: "$99.9",
  },
  {
    id: 3,
    image: "/images/limited-1.webp",
    title: "Freedom Family Tree ( Malcom X, MLK and Harriet Tubman)",
    rating: 4.5,
    price: "$99.9",
  },
];

function NewCollection() {
  return (
    <div style={{ borderTop: "1px solid lightgray", paddingTop: "50px" }}>
      <div className="main">
        <div className={styles.container}>
          <div className={styles.heading}>
            <h1>New limited Ts collection !</h1>
          </div>
          <div className={styles.cardHeader}>
            {collections.map((item, index) => (
              <div key={item.index} className={styles.items}>
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                <StarRating rating={item.rating} assName={styles.star} />
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <div>
            <button>View more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
