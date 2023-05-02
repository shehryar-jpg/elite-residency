import React, { useContext } from "react";
import black_check_box from "../images/black-check-box.png";
// tower 88
import apartment_picture_outside from "../images/apartment-picture-outside.jfif";
import tower_88_living_room from "../images/tower-88-living.png";
import tower_88_kitchen from "../images/tower-88-kitchen.png";
import tower_88_bedroom from "../images/tower-88-bedroom.png";
import tower_88_bedroom_2 from "../images/tower-88-bedroom-2.png";
import tower_88_bedroom_3 from "../images/tower-88-bedroom-3-front.png";

import victoria_project from "../images/victoria-project.png";
import building_with_cloth from "../images/building.jpg";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate();

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
      <div className="container  grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto mt-12">
        <div
          onClick={() => {
            // setOverFlowData([
            //   {
            //     img: tower_88_living_room,
            //   },
            //   {
            //     img: tower_88_kitchen,
            //   },
            //   {
            //     img: tower_88_bedroom,
            //   },

            //   {
            //     img: tower_88_bedroom_2,
            //   },
            //   {
            //     img: tower_88_bedroom_3,
            //   },
            // ]);
            navigate("/projects/elite-residency-88");
            // setShowOverlay(true);
            // document.body.classList.add("overflow-hidden");
          }}
          className="w-full rounded   cursor-pointer "
        >
          {/* order-2 lg:order-1 additional tailwind for order on different screens */}

          <Fade bottom distance="5%" duration={710}>
            <div class="relative">
              <img
                src={apartment_picture_outside}
                className=" 
                
                lg:w-96 w-screen  lg:h-96  object-cover  lg:rounded-bl-[7rem]
                
                "
              />

              <div class="absolute px-5 py-3 bottom-3 right-0 bg-white text-right">
                <p className="text-sm font-extrabold">Elite Residency 88</p>
                <p className="text-xs text-[#aeadad] font-semibold mt-1.5">
                  Bahria Town Lahore, Pakistan
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className=" rounded   ">
          {/* order-1 lg:order-2 additional tailwind for order on different screens */}
          <Fade bottom distance="15%" duration={710}>
            <div class="relative">
              <img
                src={victoria_project}
                className=" lg:h-96   object-cover  w-screen lg:w-96  "
              />

              <div class="absolute px-5 py-3 bottom-3 right-0 bg-white text-right">
                <p className="text-sm font-extrabold">Victoria</p>
                <p className="text-xs text-[#aeadad] font-semibold mt-1.5">
                  Coming in summer 2023{" "}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="w-full rounded         ">
          {/* order-3 lg:order-3 additional tailwind for order on different screens */}
          <Fade bottom distance="20%" duration={710}>
            <div class="relative">
              <img
                src={building_with_cloth}
                className=" lg:h-96   object-cover    w-screen lg:w-96  lg:rounded-tr-[7rem]"
              />

              <div class="absolute px-5 py-3 bottom-3 right-0 bg-white text-right">
                <p className="text-sm font-extrabold">Coming Soon</p>
                <p className="text-xs text-[#aeadad] font-semibold mt-1.5">
                  Coming in fall 2023
                </p>
              </div>
            </div>
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
