import React from "react";
import styles from "./NewCollection.module.css";

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
    <div className="main">
      <div className={styles.container}>
        <div className={styles.items}>
          {collections.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="" height="300" width="300" />
              <p>{item.title}</p>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
        <div>
          <button>View more</button>
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
