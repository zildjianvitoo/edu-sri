import Navbar from "@/components/Navbar/Navbar";
import { TTCommons } from "@/public/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${TTCommons.className}`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
