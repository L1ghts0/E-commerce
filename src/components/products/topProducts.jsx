import React from "react";
import iphone11 from "../../assets/products/iphone11.webp";
import iphone15promax from "../../assets/products/iphone15promax.webp";
import samsung23ultra from "../../assets/products/samsung23ultra.jpg";
import asusrog7 from "../../assets/products/asusrog7.webp";
import xiaomi13tpro from "../../assets/products/xiaomi13tpro.png";
import ipadpro from "../../assets/products/ipadpro.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";

const productsData = [
  {
    id: 1,
    img: iphone11,
    title: "cellphones",
    description: "lorem ipsum dolor:",
  },
  {
    id: 2,
    img: iphone15promax,
    title: "iphones",
    description: "cp",
  },
  {
    id: 3,
    img: samsung23ultra,
    title: "gadgets",
    description: "cp",
  },
  {
    id: 4,
    img: asusrog7,
    title: "cellphones",
    description: "cp",
  },
  {
    id: 5,
    img: xiaomi13tpro,
    title: "cellphones",
    description: "cp",
  },
  {
    id: 6,
    img: ipadpro,
    title: "cellphones",
    description: "cp",
  },
];

const topProducts = ({ handleOrderPopup }) => {
  return (
    <div id="topproducts">
      <div className="container">
        {/*header section*/}
        <div className="text-left mb-10 ">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Product
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            lorem ipsum dolor
          </p>
        </div>
        {/*body section*/}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        gap-20 md:gap-5 place-items-center">
          {productsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800
            hover:bg-black/80 dark:hover:bg-primary hover:text-white 
            relative shadow-2xl duration-300  group max-w-[300px]">
              {/* image section */}
              <div className="h-[100px] w-[200px]">
                <img
                  className="max-h-[100px] block mx-auto transform
                  group-hover:scale-105 duration-300 dr op-shadow-md"
                  src={data.img}
                  alt=""
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/*star rating*/}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaRegStar />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p
                  className="text-gray-500 group-hover:text-white duration-300
                text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300
                  text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                  group-hover:text-primary"
                  onClick={handleOrderPopup}>
                  order now!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default topProducts;
