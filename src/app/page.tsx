// import Image from "next/image";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="p-0 m-0 border-0">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
