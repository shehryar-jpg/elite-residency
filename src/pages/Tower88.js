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
      <div className="">
        <h1 className="text-2xl py-5 px-3 md:px-6 font-semibold">
          Elite Residency 88
        </h1>
      </div>
      <AwesomeSlider>
        <div>
          <p className="bg-gray-500 rounded-md px-2 text-gray-300 absolute top-[50%] left-[75%] w-20  sm:hidden block">
            Swipe <i class="fa-solid fa-arrow-right"></i>
          </p>
          <img
            className="object-cover"
            src={apartment_picture_outside}
            alt=""
          />
        </div>
        <div>
          <img className="object-cover" src={tower_88_living_room} alt="" />
        </div>
        <div>
          <img className="object-cover" src={tower_88_kitchen} alt="" />
        </div>
        <div>
          <img className="object-cover" src={tower_88_bedroom} alt="" />
        </div>
        <div className="">
          <img className="object-cover" src={tower_88_bedroom_2} alt="" />
        </div>
        <div className="">
          <img className="object-cover" src={tower_88_bedroom_3} alt="" />
        </div>
        <div className="">
          <img className="object-cover" src={tower_88_structure} alt="" />
        </div>
      </AwesomeSlider>
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
