import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import logo from ".././images/SVG (3).svg";
import hamburger from ".././images/ham-burger.png";

import MobileNav from "./MobileNav";
const Navbar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  const handleMobileNavToggle = () => {
    setToggleMobileNav((prev) => !prev);
  };

  return (
    <>
      <div className=" text-white py-2 flex items-center md:justify-around justify-between border-b border-gray-700   ">
        <Fade bottom distance="35%" duration={710}>
          <div className="left__section md:block hidden">
            <div className="flex space-x-5">
              <p className="text-[#c5c5c5] text-sm cursor-pointer ">ABOUT</p>
              <p className="text-[#c5c5c5] text-sm  cursor-pointer ">PROJECT</p>
            </div>
          </div>
          <div className="mid__section">
            <img
              src={logo}
              alt=""
              className="   md:w-auto   h-16  mx-3  my-1 rounded-xl"
            />
          </div>
          <div className="right__section md:block hidden">
            <div className="flex space-x-5">
              <p className="text-[#c5c5c5] text-sm cursor-pointer ">FEATURES</p>
              <p className="text-[#c5c5c5] text-sm  cursor-pointer">
                RESOURCES
              </p>
            </div>
          </div>
          {/* <button
            data-collapse-toggle="navbar-default"
            type="button"
            
            className="  inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          > */}
          {/* <span className="sr-only">Open main menu</span> */}
          <img
            onClick={() => {
              handleMobileNavToggle();
            }}
            src={hamburger}
            alt=""
            className="h-16 "
          />
          {/* </button> */}
        </Fade>
      </div>
      {toggleMobileNav ? (
        <Fade top distance="2%" duration={710}>
          {" "}
          <div className="">
            <MobileNav />
          </div>
        </Fade>
      ) : null}
    </>
  );
};

export default Navbar;
