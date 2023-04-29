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
      </AwesomeSlider>
    </div>
  );
};

export default Tower88;
