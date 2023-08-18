"use client";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useState } from "react";
// import { Col } from "reactstrap";
import styles from "./Products.module.css";
import StarRating from "../../reusables/StarRating";
import { allProducts } from "../../components/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Hero from "./Hero";

function Index() {
  const router = useRouter();
  const itemsPerPage = 16; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <Hero />
      <div className="main">
        {/* product items */}
        <div className={styles.container}>
          <div className={styles.productList}>
            {/* sidebar component */}
            <div className={styles.sidebar}>
              <Sidebar />
            </div>
            {currentItems.map((item, index) => (
              <div
                key={index}
                className={`${styles.products} ${
                  index < 3 ? styles.firstRowProduct : ""
                }`}
              >
                <Link href={`/product/${item.id}`} key={item.id}>
                  <img
                    src={item.image}
                    alt=""
                    style={{ height: 200, width: 500 }}
                  />
                  <h3>{item.desc}</h3>
                  <span className={styles.star}>
                    <StarRating rating={item.rating} className="my-10" />
                  </span>
                  <p className={styles.price}>{item.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* pagination */}
        <div className={styles.pagination}>
          <button
            onClick={handlePrevPage}
            className={`${styles.pageButton} ${
              currentPage === 1 ? styles.disabledButton : ""
            }`}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`${styles.pageButton} ${
                currentPage === index + 1 ? styles.activePage : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className={`${styles.pageButton} ${
              currentPage === totalPages ? styles.disabledButton : ""
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Index;
