import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import logo from ".././images/SVG (1).svg";

import MobileNav from "./MobileNav";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
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
              <p className="text-[#c5c5c5] text-sm cursor-pointer "></p>
              <p className="text-[#c5c5c5] text-sm  cursor-pointer "></p>
            </div>
          </div>
          <div
            className="mid__section"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={logo}
              alt=""
              className="cursor-pointer    md:w-auto   h-16  mx-3  my-1 rounded-xl"
            />
          </div>
          <div className="right__section md:block hidden">
            <div className="flex space-x-5">
              <p className="text-[#c5c5c5] text-sm cursor-pointer "></p>
              <p className="text-[#c5c5c5] text-sm  cursor-pointer"></p>
            </div>
          </div>
          {/* Button was here */}
          <div className="md:hidden block">
            {toggleMobileNav ? (
              <div className="">
                <img
                  onClick={() => {
                    handleMobileNavToggle();
                  }}
                  src=""
                  alt=""
                  className="h-16 -rotate-90"
                />
              </div>
            ) : (
              <div className="">
                {/* <Fade> */}
                {/* <img
                  onClick={() => {
                    handleMobileNavToggle();
                  }}
                  src={hamburger}
                  alt=""
                  className="h-16"
                /> */}
                {/* </Fade> */}
              </div>
            )}
          </div>
        </Fade>
      </div>
      <div className="">
        {/* {toggleMobileNav ? (
          <Fade top distance="2%" duration={710}>
            {" "}
            <MobileNav />
          </Fade>
        ) : null} */}
      </div>
    </>
  );
};

export default Navbar;
