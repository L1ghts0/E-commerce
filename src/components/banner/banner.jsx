import React from "react";
import supersale from "../../assets/products/supersale.jpg";
import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { AiTwotoneGift } from "react-icons/ai";

const banner = () => {
  return (
    <div
      id="banner"
      className="min-h-[550px] flex justify-center items-center
    py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/*image section*/}
          <div data-aos="zoom-in">
            <img
              src={supersale}
              alt=""
              className="max-w-[400px] h-[400px] w-full mx-auto
            drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover "
            />
          </div>
          {/*text details section*/}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Super Sale upto 50% off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure
                  className="text-5xl h-12 w-12 shadow-sm p-4 rounded-full
                 bg-violet-100 dark:bg-violet-400"
                />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <TbTruckDelivery
                  className="text-5xl h-12 w-12 shadow-sm p-4 rounded-full
                 bg-blue-100 dark:bg-blue-400"
                />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdOutlinePayment
                  className="text-5xl h-12 w-12 shadow-sm p-4 rounded-full
                 bg-green-100 dark:bg-green-400"
                />
                <p>Easy payment Method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <AiTwotoneGift
                  className="text-5xl h-12 w-12 shadow-sm p-4 rounded-full
                 bg-yellow-100 dark:bg-yellow-400"
                />
                <p>Get offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
