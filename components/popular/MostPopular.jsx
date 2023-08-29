import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./MostPopular.module.css";
import StarRating from "../../reusables/StarRating";

function MostPopular() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const popular = [
    {
      id: 1,
      image: "/images/popImage1.webp",
      desc: "Freedom Family Tree ( Malcom X, MLK and Harriet Tubman)",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage2.avif",
      desc: "New York Subway",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage3.webp",
      desc: "THE LAST SUPPER",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage4.webp",
      desc: "AIR Kobe",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 4.5,
      price: "$99.9",
    },
  ];

  return (
    <div className="main">
      <div className={styles.carousel}>
        <div className={styles.heading}>
          <h2 style={{ fontSize: "20px" }}>MOST POPULAR</h2>
          <h1 style={{ fontSize: "30px" }}>Best Sellers</h1>
        </div>

        <Slider {...settings}>
          {popular.map((item, index) => (
            <div key={index} className={styles.box}>
              <img src={item.image} alt="product" />
              <div className={styles.details}>
                <h4 className={styles.desc}>{item.desc}</h4>

                <StarRating rating={item.rating} className={styles.star} />

                <p className={styles.price}>{item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center items-center pt-10">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            View all
          </button>
        </div>
      </div>
    </div>
  );
}

export default MostPopular;
