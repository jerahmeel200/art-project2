import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero/Hero";
import NewArivals from "../components/newArivals/NewArivals";
import NewCollection from "../components/newCollections/NewCollection";
import MostPopular from "../components/popular/MostPopular";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Hero />
        <NewArivals />
        <MostPopular />
        <NewCollection />
      </main>
    </div>
  );
}
