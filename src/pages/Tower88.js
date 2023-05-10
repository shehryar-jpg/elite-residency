import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import apartment_picture_outside from "../images/apartment-picture-outside.jfif";
import tower_88_living_room from "../images/tower-88-living.png";
import tower_88_kitchen from "../images/tower-88-kitchen.png";
import tower_88_bedroom from "../images/tower-88-bedroom.png";
import tower_88_bedroom_2 from "../images/tower-88-bedroom-2.png";
import tower_88_bedroom_3 from "../images/tower-88-bedroom-3-front.png";
import tower_88_structure from "../images/elite-residency-88-structure.jpg";
import bedroom1_360 from "../images/bedroom1-360.jpg";
import "./Tower88.css";
import tower88_outside from "../images/1.jpg";
import tower_88_map_2 from "../images/4.jpg";
import tower_88_bed_apartment from "../images/2.jpg";
import tower_88_studio_apartment from "../images/3.jpg";

import tower_88_studio_apartment_structure from "../images/5.jpg";
import tower_88_bed_apartment_structure from "../images/6.jpg";

const Tower88 = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="    bg-gradient-to-t bg-[#1a1e23] ">
        <div className="max-w-[1360px] mx-auto">
          <Navbar />
        </div>
      </div>{" "}
      <div className="   ">
        <div className="">
          <h1 className="text-center md:text-4xl text-3xl py-8 px-3 md:px-6 font-semibold">
            Elite Residency 88
          </h1>
        </div>

        <div class="flex justify-center items-center ">
          <div class="flex flex-col justify-center items-center w-full px-4 lg:px-20">
            <div class="flex  flex-col justify-center items-center ">
              <div class="md:flex flex-col sm:flex-row items-center justify-center w-full">
                <img
                  className="rounded-md w-full sm:w-80 lg:w-[50%]"
                  src={tower88_outside}
                  alt="Image 1"
                />
                <img
                  className="rounded-md w-full sm:w-80 lg:w-[50%] ml-0 sm:ml-8 mt-4 sm:mt-0"
                  src={tower_88_map_2}
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="flex justify-center items-center ">
          <div class="flex flex-col justify-center items-center w-full px-4 lg:px-20">
            <div class="flex  flex-col justify-center items-center ">
              <div class="md:flex flex-col sm:flex-row items-center justify-center w-full">
                <img
                  className="rounded-md w-full sm:w-80 lg:w-[50%]"
                  src={tower_88_bed_apartment}
                  alt="Image 1"
                />
                <img
                  className="rounded-md w-full sm:w-80 lg:w-[50%] ml-0 sm:ml-8 mt-4 sm:mt-0"
                  src={tower_88_studio_apartment}
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="flex justify-center items-center ">
          <div class="flex flex-col justify-center items-center w-full px-4 lg:px-20">
            <div class="flex  flex-col justify-center items-center ">
              <div class="md:flex flex-col sm:flex-row items-center justify-center w-full">
                <img
                  className="rounded-md w-full sm:w-80 lg:w-[50%]"
                  src={tower_88_bed_apartment_structure}
                  alt="Image 1"
                />
                <img
                  className="rounded-md w-full sm:w-80 lg:w-[50%] ml-0 sm:ml-8 mt-4 sm:mt-0"
                  src={tower_88_studio_apartment_structure}
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex items-center ">
          <img src={tower_88_bed_apart1} alt="" className=" " />
          <img src={tower_88_bed_apart2} alt="" className=" " />
        </div> */}
      </div>
      {/* <div className="my-8">
        <h1 className="text-2xl py-5 px-3 md:px-6 font-semibold">
          360 deg view
        </h1>
      </div> */}
      {/* <AwesomeSlider
        height="1000px"
        media={[
          {
            source: apartment_picture_outside,
          },
          {
            source: tower_88_kitchen,
          },
          {
            source: tower_88_bedroom,
          },
          {
            source: tower_88_bedroom_2,
          },
          {
            source: tower_88_bedroom_3,
          },
        ]}
      /> */}
      <div className="my-10"></div>
    </div>
  );
};

export default Tower88;
