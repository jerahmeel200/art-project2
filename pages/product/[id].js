import React from "react";
import { useRouter } from "next/router";
import { allProducts } from "../../components/data";
import StarRating from "../../reusables/StarRating";

function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const productId = parseInt(id); // Convert id to a number

  const product = allProducts.find((item) => item.id === productId);

  if (!product) {
    return <p>Product not found.</p>;
  }
  return (
    <div>
      <img src={product.image} alt="" style={{ height: 200, width: 500 }} />
      <h2>{product.desc}</h2>
      <StarRating rating={product.rating} className="my-10" />
      <p className="price">{product.price}</p>
      {/* Additional product details */}
    </div>
  );
}

export default ProductDetails;
