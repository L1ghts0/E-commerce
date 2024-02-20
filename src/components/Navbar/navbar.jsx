import React from "react";
import logo from "../../assets/logo.png";
import { Search2Icon, TriangleDownIcon } from "@chakra-ui/icons";
import { HiMiniShoppingCart } from "react-icons/hi2";
import DarkMode from "./darkmode";
import { Link } from "react-scroll";

const menu = [
  {
    id: 1,
    name: "products",
    link: "products",
  },
  {
    id: 2,
    name: "top rated",
    link: "topproducts",
  },
  {
    id: 3,
    name: "Discount Sale",
    link: "banner",
  },
  {
    id: 4,
    name: "subscription",
    link: "subscribe",
  },
  {
    id: 5,
    name: "Contacts",
    link: "footer",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "products",
  },
  {
    id: 2,
    name: "best selling",
    link: "topproducts",
  },
  {
    id: 3,
    name: "top rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div
      id="navbar"
      className="shadow-md bg-white dark:bg-gray-900
     dark:text-white duration-200 relative z-40">
      {/*upper navbar*/}
      <div
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-fuchsia-400
       hover:to-violet-950 py-2">
        <div className="conatainer flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-4">
              <img src={logo} alt="Logo" className="w-20 bg-contain" />
              Shopline
            </a>
          </div>
          {/*search bar*/}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] 
                  transition-all duration-300 rounded-full border
                   border-gray-300 px-2 py-1 
                   focus:outline-none focus:border-1 focus:border-primary"
              />
              <Search2Icon
                className="text-gray-500 group-hover:text-primary 
              absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
          </div>
          {/*order buttons*/}
          <button
            onClick={() => {
              handleOrderPopup();
            }}
            className="bg-gradient-to-r from-sky-500 to-indigo-500
            transition-all duration-200 text-white py-1 px-4 
            rounded-full flex items-center gap-3 group">
            <span className="group-hover:block hidden transtion-all duration-200">
              order
            </span>
            <HiMiniShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
          {/*dark mode switcher*/}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
      {/*lower navbar*/}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="inline-block px-4 hover:text-primary duration-200 cursor-pointer">
                {data.name}
              </Link>
            </li>
          ))}
          {/* dropdown and links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <TriangleDownIcon className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div
              className="absolute z-[9999] hidden group-hover:block 
            w-[200px] rounded-md bg-white p-2 text-black">
              <ul>
                {DropdownLinks.map((data) => (
                  <li>
                    <Link
                      to={data.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="inline-block px-4 hover:text-primary duration-200">
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
