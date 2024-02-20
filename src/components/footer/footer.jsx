import React from "react";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const footerImg = {
  backgroundImage: `url(${logo1})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const footerLinks = [
  {
    title: "home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "contact",
    link: "/#contact",
  },
  {
    title: "blog",
    link: "/#blog",
  },
];

const footer = () => {
  return (
    <div style={footerImg} className="text-white mb-20" id="footer">
      <div className="container">
        <div
          data-aos="zoom-in"
          className="grid md:grid-cols-3 space-x-20 pb-44 pt-5">
          {/*company details */}
          <div className="py-8 px-4">
            <h1
              className="sm:t ext-3xl text-xl font-bold sm:text-left
            text-justify mb-3 flex items-center gap-3">
              <img src={logo} alt="" className="max-w-[50px]" />
              Shopline
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/*Footer links details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1
                  className="sm:text-2xl text-xl font-bold sm:text-left
                   mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-4">
                  {footerLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1
                      duration-300 text-gray-200"
                      key={link.title}>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/*social links*/}
            <div>
              <div className="flex items-center place-content-end gap-4 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaSquareXTwitter className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex space-x-30 items-center place-content-end gap-3">
                  <FaLocationArrow />
                  <p>This is where</p>
                </div>
                <div className="flex items-center place-content-end gap-3 mt-3">
                  <FaMobileAlt />
                  <p>09185713603</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
