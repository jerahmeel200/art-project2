import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero/Hero";
import NewArivals from "../components/newArivals/NewArivals";
import NewCollection from "../components/newCollections/NewCollection";
import MostPopular from "../components/popular/MostPopular";
import MutaEveryone from "../components/new/everyone/Everyone";
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Hero />
        <MutaEveryone />
        <NewArivals />
        <MostPopular />
        <NewCollection />
      </main>
    </div>
  );
}
