import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/banner1.jpg";
import Banner1 from "../../assets/Banner1.png";
import Banner2 from "../../assets/Banner2.png";
import banner3 from "../../assets/banner3.jpg";

const imageList = [
  {
    id: 1,
    img: banner1,
    title: "Samsung",
    description: "Samsung Tablets",
  },
  {
    id: 2,
    img: Banner1,
    title: "Xiaomi",
    description: "Xiaomi Redmi Note 4",
  },
  {
    id: 3,
    img: Banner2,
    title: "Xiaomi",
    description: "Xiaomi Redmi Note 5",
  },
  {
    id: 4,
    img: banner3,
    title: "Free Shipping",
    description: "Cellphones",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <div
      id="hero"
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] 
    bg-gray-100 flex justify-center items-center dark:bg-gray-950 
    dark:text-white duration-200">
      {/*background pattern*/}
      <div
        className="h-[900px] w-[900px] bg-primary/40 
      absolute -top-1/2 right-0  rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0 relative z-10">
        <Slider {...settings} className="w-full">
          {imageList.map((data) => (
            <div key={data.id}>
              {/* Slide */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div
                    className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 
                  text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <p
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-sm">
                      {data.description}
                    </p>
                    <div
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true">
                      <button
                        className="bg-gradient-to-r from-sky-500 to-indigo-500 
                        hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                        onClick={handleOrderPopup}>
                        order now!
                      </button>
                    </div>
                  </div>
                  {/* image section */}
                  <div className="flex justify-center order-1 sm:order-2">
                    <div className="relative z-10">
                      <img
                        src={data.img}
                        alt=""
                        className="w-auto h-full object-contain mx-auto "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
