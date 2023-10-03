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
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const popular = [
    {
      id: 1,
      image: "/images/popImage2.avif",
      desc: "New York Subway",
      rating: 5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage3.webp",
      desc: "THE LAST SUPPER",
      rating: 5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage4.webp",
      desc: "AIR Kobe",
      rating: 5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage5.webp",
      desc: "'BLACK IS KING' Beyoncé",
      rating: 5,
      price: "$99.9",
    },
  ];

  return (
    <div className="main">
      <div className={styles.carousel}>
        <div className={styles.heading}>
          <h2
            style={{
              fontSize: "14px",
              letterSpacing: ".2em",
              letterSpacing: "2px",
              paddingBottom: "10px",
              fontWeight: "0",
              color: "#1c1d1d",
            }}
          >
            MOST POPULAR
          </h2>
          <p
            style={{
              fontSize: "25px",
              marginTop: "10px",
              marginBottom: "20px",
              paddingBottom: "20px",
              fontSize: "25px",
              borderBottom: "2px solid #1c1d1d",
              color: "#1c1d1d",
            }}
          >
            Best Sellers
          </p>
        </div>

        <Slider {...settings} className={styles.sliders}>
          {popular.map((item, index) => (
            <div key={index} className={styles.boxWrapper}>
              <div className={styles.box}>
                <img
                  src={item.image}
                  alt="product"
                  className={styles.popImage}
                />
                <div className={styles.details}>
                  <h4 className={styles.desc}>{item.desc}</h4>

                  <StarRating rating={item.rating} className={styles.star} />

                  <p className={styles.price}> from {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center items-center pt-20">
          <button className="bg-black  text-white font-thin py-2 px-5 border border-black   shadow">
            View all
          </button>
        </div>
      </div>
    </div>
  );
}

export default MostPopular;
