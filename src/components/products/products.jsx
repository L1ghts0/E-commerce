import React, { useState } from "react";
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";
import product4 from "../../assets/products/product4.png";
import product5 from "../../assets/products/product5.png";
import product6 from "../../assets/products/product6.png";
import product7 from "../../assets/products/product7.png";
import product8 from "../../assets/products/product8.png";
import product9 from "../../assets/products/product9.png";
import product10 from "../../assets/products/product10.png";
import product11 from "../../assets/products/product11.png";
import product12 from "../../assets/products/product12.png";
import product13 from "../../assets/products/product13.png";
import { FaStar } from "react-icons/fa";

const initialProductsData = [
  {
    id: 1,
    img: product1,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
  {
    id: 2,
    img: product2,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
  {
    id: 3,
    img: product3,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
  {
    id: 4,
    img: product5,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
  {
    id: 5,
    img: product4,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
];

const additionalProductsData = [
  {
    id: 6,
    img: product6,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
  {
    id: 7,
    img: product7,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
  {
    id: 8,
    img: product8,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
  {
    id: 9,
    img: product9,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
  {
    id: 10,
    img: product10,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
  {
    id: 11,
    img: product11,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
  {
    id: 12,
    img: product12,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
  {
    id: 13,
    img: product13,
    title: "cellphones",
    rating: 5.0,
    color: "white",
  },
];

const Products = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const toggleProducts = () => {
    setShowAllProducts((prevState) => !prevState);
  };

  // Concatenate initial and additional products based on the showAllProducts state
  const allProductsData = showAllProducts
    ? [...initialProductsData, ...additionalProductsData]
    : initialProductsData;

  return (
    <div className="mt-14 mb-12" id="products">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Product
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            lorem ipsum dolor
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {allProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 ">
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[160px] object-cover rounded-md transition delay-100 duration-100 ease-in-out transform hover:-translate-y-3 hover:scale-110 md:delay-300"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View all button */}
          <div className="flex justify-center">
            <button
              className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:scale-105 duration-200"
              onClick={toggleProducts}>
              {showAllProducts ? "Hide Products" : "View All Products"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
