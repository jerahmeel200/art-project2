import React from "react";
import styles from "./Everyone.module.css";
import { CustomSlideIn } from "../../animated/CustomReveal";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const boxes = {
  language: {
    image: "/images/art-2.jpg",
    title: "Elegance in Every Brushstroke",
    description:
      "Welcome to my online art gallery, where creativity knows no bounds. ",
  },

  diaspora: {
    image: "/images/art-1.jpg",
    title: "A Palette of Inspiration",
    description:
      "Step into a realm where colors dance and emotions come to life. ",
  },

  afro: {
    image: "/images/img-4.png",
    title: "Journey Through Artistic Expression",
    description:
      "Join me on a journey through the ever-evolving landscape of artistic expression. ",
  },

  tutors: {
    image: "/images/art-2.jpg",
    title: "Discover Your Artistic Muse",
    description:
      "I invite you to discover your artistic muse within the digital walls of our gallery. ",
  },

  business: {
    image: "/images/img-3.png",
    title: "The Art of Imagination",
    description:
      "In my gallery, I celebrate the art of imagination, where dreams take shape on canvas and creativity knows no limits. ",
  },
};

const SingleBox = ({ item, slideInDirection, slideInDuration }) => {
  return (
    <CustomSlideIn direction={slideInDirection} duration={slideInDuration}>
      <div className={styles.box}>
        <img
          src={item?.image}
          alt="language"
          style={{ borderRadius: "12px" }}
        />

        <div style={{}}>
          <h4>{item?.title}</h4>
          <p>{item?.description}</p>
        </div>
      </div>
    </CustomSlideIn>
  );
};

const MutaEveryone = () => {
  return (
    <div
      style={{
        background: "#f5f7fa",
      }}>
      <div className={styles.muta_everyone}>
        <main>
          <section>
            <header className={styles.logoImageHeader}>
              <h1>
                <img
                  src="/images/logo/logo-black-small.png"
                  className={styles.logoImage}
                />
              </h1>

              <p>
                Welcome to the captivating world of Elo Art, where artistry
                knows no bounds and creativity flows like a river. Explore the
                visionary works of Elo Art as they unveil a symphony of colors
                and emotions on the canvas of imagination...
              </p>
            </header>

            <div className={styles.columns}>
              <div
                className={styles.column}
                style={{ justifyContent: "flex-end" }}>
                <SingleBox
                  slideInDirection="left"
                  slideInDuration={2000}
                  item={boxes?.language}
                />
              </div>
              <div
                className={styles.column}
                style={{ justifyContent: "flex-start" }}>
                <SingleBox
                  slideInDirection="left"
                  slideInDuration={1000}
                  item={boxes?.diaspora}
                />
              </div>
            </div>
          </section>

          <section>
            <div className={styles.right}>
              <div className={styles.columns}>
                <div
                  className={styles.column}
                  style={{ justifyContent: "space-between" }}>
                  <SingleBox
                    slideInDuration={2000}
                    slideInDirection="right"
                    item={boxes?.afro}
                  />
                  <SingleBox
                    slideInDuration={2000}
                    slideInDirection="right"
                    item={boxes?.tutors}
                  />
                </div>
              </div>
              <div
                className={styles.columns}
                style={{ justifyContent: "flex-end" }}>
                <div
                  className={styles.column}
                  style={{ justifyContent: "center", alignItems: "flex-end" }}>
                  <SingleBox
                    slideInDuration={1000}
                    slideInDirection="right"
                    item={boxes?.business}
                  />
                </div>
              </div>
            </div>
          </section>

          <div className={styles.smallerScreenView}>
            {Object.keys(boxes).map((x, i) => {
              const item = {
                image: "",
                title: "",
                description: "",
              };

              if (x === "language") {
                item.image = boxes.language.image;
                item.title = boxes.language.title;
                item.description = boxes.language.description;
              }

              if (x === "diaspora") {
                item.image = boxes.diaspora.image;
                item.title = boxes.diaspora.title;
                item.description = boxes.diaspora.description;
              }

              if (x === "afro") {
                item.image = boxes.afro.image;
                item.title = boxes.afro.title;
                item.description = boxes.afro.description;
              }

              if (x === "tutors") {
                item.image = boxes.tutors.image;
                item.title = boxes.tutors.title;
                item.description = boxes.tutors.description;
              }

              if (x === "business") {
                item.image = boxes.business.image;
                item.title = boxes.business.title;
                item.description = boxes.business.description;
              }

              return <SingleBox item={item} key={item.image + i} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MutaEveryone;
