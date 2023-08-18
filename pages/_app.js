import "../styles/globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div style={{ backgrounda: "red" }}>
        <Component
          {...pageProps}
          className="flex min-h-screen flex-col bg-black"
        />
      </div>

      <Footer />
    </>
  );
}

export default MyApp;
