import React, { useState } from "react";

function allproducts() {
  const [showProducts, setShowProducts] = useState(false);

  const toggleProducts = () => {
    setShowProducts((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center">
      <button
        className="text-center mt-10 cursor-pointer bg-primary text-white
        py-1 px-5 rounded-md hover:scale-105 duration-200"
        onClick={toggleProducts}>
        {showProducts ? "Hide Products" : "View All Products"}
      </button>

      {showProducts && (
        <div>
          {/* Render your products here */}
          <div className="product">Product 1</div>
          <div className="product">Product 2</div>
          <div className="product">Product 3</div>
          {/* Add more products as needed */}
        </div>
      )}
    </div>
  );
}

export default allproducts;
