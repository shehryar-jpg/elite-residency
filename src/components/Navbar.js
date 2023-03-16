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
                RESOURCESs
              </p>
            </div>
          </div>

          <img
            onClick={() => {
              handleMobileNavToggle();
            }}
            src={hamburger}
            alt=""
            className="h-16 "
          />
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
