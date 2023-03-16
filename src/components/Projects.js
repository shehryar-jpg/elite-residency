import React from "react";
import black_check_box from "../images/black-check-box.png";
import apartment_picture_outside from "../images/apartment-picture-outside.jfif";
import apartment_map from "../images/apartment-picture-apartment-map.jfif";
import apartment_structure from "../images/apartment-picture-structure.jfif";
import { Fade } from "react-reveal";

const Projects = () => {
  // const duration_for_project_pictures = 1400;

  return (
    <div>
      <div className="flex justify-between items-center ">
        <Fade bottom distance="15%">
          <div className="pt-14 flex items-center   ">
            <img
              src={black_check_box}
              alt=""
              className="h-4 md:mt-2.5 mt-1  object-none"
            />
            <h1 className="md:text-3xl font-extrabold mx-5 text-xl">
              OUR PROJECT
            </h1>
          </div>

          <p className="lg:block hidden  mt-14 font-semibold text-md text-[#454848] underline cursor-pointer ">
            VIEW MORE <i class="fa-solid fa-arrow-right"></i>
          </p>
        </Fade>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto mt-12">
        <div className="w-full rounded order-2 lg:order-1 ">
          <Fade bottom distance="5%" duration={710}>
            <img
              src={apartment_map}
              alt="image"
              className="    w-screen lg:w-96  lg:h-96  object-cover  lg:rounded-bl-[7rem]"
            />
          </Fade>
        </div>
        <div className=" rounded   order-1 lg:order-2">
          <Fade bottom distance="15%" duration={710}>
            <div class="relative">
              <img
                src={apartment_picture_outside}
                className="lg:h-96   object-cover  w-screen lg:w-96  "
              />

              <div class="absolute px-5 py-3 bottom-3 right-0 bg-white text-right">
                <p className="text-sm font-extrabold">TOWER 88</p>
                <p className="text-xs text-[#aeadad] font-semibold mt-1.5">
                  Bahria Town Lahore, Pakistan
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="w-full rounded      order-3 lg:order-3   ">
          <Fade bottom distance="25%" duration={710}>
            <img
              src={apartment_structure}
              alt="image"
              className="lg:h-96   object-cover    w-screen lg:w-96  lg:rounded-tr-[7rem]"
            />
          </Fade>
        </div>
      </div>
      <p className="block lg:hidden    mt-5 font-semibold text-md text-[#454848] underline cursor-pointer ">
        VIEW MORE &nbsp;<i class="fa-solid fa-arrow-right"></i>
      </p>
    </div>
  );
};

export default Projects;
