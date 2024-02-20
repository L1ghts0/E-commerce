import React from "react";
import blog1 from "../../assets/blog1.jpg";

const blogImg = {
  backgroundImage: `url(${blog1})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const subscribe = () => {
  return (
    <div
      id="subscribe"
      data-aos="zoom-in"
      className="mb-20 bg-gradient-to-r from-cyan-500 to-blue-500 ...">
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1
            className="text-2xl !text-center sm:text-left sm:text-4xl
          font-semibold">
            Get notified about new products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter  your Email"
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default subscribe;
