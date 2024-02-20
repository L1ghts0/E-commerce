import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/hero/hero";
import Products from "./components/products/products";

import TopProducts from "./components/products/topProducts";
import Banner from "./components/banner/banner";
import Subscribe from "./components/subscribe/subscribe";
import Footer from "./components/footer/footer";
import Popup from "./components/Navbar/popup";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />

      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default App;
