import Navbar from "@/components/Navbar/Navbar";
import { TTCommons } from "@/public/fonts";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";

import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${TTCommons.className}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
