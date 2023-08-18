import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const starArray = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      starArray.push(<FaStar key={i} />);
    }

    if (hasHalfStar) {
      starArray.push(<FaStarHalfAlt key="half" />);
    }

    while (starArray.length < 5) {
      starArray.push(<FaRegStar key={starArray.length} />);
    }

    return starArray;
  };

  return <span className="py-10 flex">{renderStars()}</span>;
};

export default StarRating;
