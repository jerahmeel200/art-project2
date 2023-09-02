import React from "react";
import { useRouter } from "next/router";
import { allProducts } from "../../components/data";
import StarRating from "../../reusables/StarRating";
import styles from "./Product.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const productId = parseInt(id); // Convert id to a number

  const product = allProducts.find((item) => item.id === productId);

  if (!product) {
    return <p>Product not found.</p>;
  }
  return (
    <div className="main">
      <div className={styles.container}>
        <div className={styles.left}>
          <Zoom>
            <img src={product.image} alt="" />
          </Zoom>
        </div>

        <div className={styles.right}>
          <h2>{product.desc}</h2>
          <StarRating rating={product.rating} className="my-10" />
          <p className="price">{product.price}</p>
          <div className={styles.btnCont}>
            <button>Add to cart</button>
          </div>
        </div>
      </div>

      {/* Additional product details */}
    </div>
  );
}

export default ProductDetails;
