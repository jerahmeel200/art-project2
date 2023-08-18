import React from "react";
import MostPopular from "./MostPopular";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import StarRating from "@/reusables/StarRating";

function Products() {
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const products = [
    {
      id: 1,
      image: "/images/popImage1.webp",
      desc: "hello",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage2.avif",
      desc: "hello",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage3.webp",
      desc: "hello",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage4.webp",
      desc: "hello",
      rating: 4.5,
      price: "$99.9",
    },
    {
      id: 1,
      image: "/images/popImage5.webp",
      desc: "hello",
      rating: 4.5,
      price: "$99.9",
    },
  ];

  return (
    <div className="carousel">
      <h1>products</h1>
      <Slider {...settings}>
        {products.map((item, index) => (
          <div key={index} className="box">
            <img
              src={item.image}
              alt="product"
              style={{ height: 200, width: 500 }}
            />
            <p>{item.description}</p>
            <span style={{ left: 0, backgroundColor: "red" }}>
              <StarRating rating={item.rating} className="my-10" />
            </span>
            <span>{item.price}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Products;
