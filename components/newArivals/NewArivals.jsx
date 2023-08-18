import React, { useState, useEffect } from "react";
import styles from "./NewArivals.module.css";

function NewArivals() {
  const imgs = [
    { id: 0, value: "/images/img-1.png" },
    { id: 1, value: "/images/img-2.jpg" },
    { id: 2, value: "/images/img-3.png" },
  ];
  const [sliderData, setSliderData] = useState([imgs[0]]);

  const handleImageClick = (index) => {
    console.log(index);
    const slider = [imgs[index]];
    setSliderData(slider);
  };

  return (
    <div className="main">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.galleryContainer}>
            {imgs.map((item, i) => (
              <img
                className={sliderData.id === i ? styles.clicked : ""}
                key={item.id}
                height="100"
                width="70"
                src={item.value}
                alt="thumbnail"
                onClick={() => handleImageClick(i)}
              />
            ))}
          </div>
          <div className={styles.displayContainer}>
            <img src={sliderData[0].value} alt="large" width="350" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.desc}>
            <h4>NEW ARIVAL</h4>
            <h1>"Smoke Break" Barack Obama & MLK</h1>
            <h5 className="text-1xl font-bold  ">$169.00</h5>
          </div>

          <div className={styles.details}>
            <div className={styles.size}>
              <p>SIZE</p>
              <div>
                <button>15X16</button>
                <button>15X16</button>
                <button>15X16</button>
                <button>15X16</button>
              </div>
            </div>
            <div className={styles.material}>
              <p>MATERIAL</p>
              <div>
                <button>Canvas</button>
                <button>Framed</button>
                <button>Unframed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArivals;

// "use client";
// import React, { useState } from "react";

// function NewArivals() {
//   const imgs = [
//     { id: 0, value: "/images/img-1.png" },
//     { id: 1, value: "/images/img-2.jpg" },
//     { id: 2, value: "/images/img-3.png" },
//   ];
//   const [sliderData, setSliderData] = useState([imgs[0]]);

//   const handleImageClick = (index) => {
//     const slider = [imgs[index]];
//     setSliderData(slider);
//   };

//   return (
//     <div className="bg-indigo-300 flex flex-wrap p-10">
//       <div className="w-full md:w-1/2 bg-orange-900 p-4 flex   ">
//         <div className="   ">
//           {imgs.map((item, i) => (
//             <img
//               className={`cursor-pointer ${
//                 sliderData[0].id === i ? "border-2 border-white" : ""
//               }`}
//               key={item.id}
//               height="150"
//               width="70"
//               src={item.value}
//               alt="thumbnail"
//               onClick={() => handleImageClick(i)}
//             />
//           ))}
//         </div>
//         <div className="md:w-full md:pl-6">
//           <img
//             src={sliderData[0].value}
//             alt="large"
//             className="w-full h-auto md:w-auto md:h-96"
//           />
//         </div>
//       </div>
//       <div className="w-full md:w-1/2 p-4">
//         <div>hay</div>
//       </div>
//     </div>
//   );
// }

// export default NewArivals;
