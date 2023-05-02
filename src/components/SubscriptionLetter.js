import React from "react";
import GoogleMapsFooter from "./GoogleMapsFooter";

const SubscriptionLetter = () => {
  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=+923454301013&text=Hi,%20I%20would%20like%20to%20talk%20about%20apartments"
    );
  };
  return (
    <div className="py-20 md:grid grid-cols-2 gap-7 ">
      <h1 className="text-white text-3xl md:text-5xl font-semibold  ">
        SO, WHAT YOU WAITING FOR? LET'S TALK YOUR PROJECT!
      </h1>
      <div className="mt-5 md:mt-0 md:flex  space-x-4    ">
        <GoogleMapsFooter />
        <div className="md:w-64 ">
          <button
            onClick={handleClick}
            className="bg-[#3dda59] w-full mt-5 md:mt-0    h-14 rounded-full font-extrabold text-xl text-[#1a1e23]"
          >
            Contact Us &nbsp;&nbsp;
            <i class="fa-brands fa-whatsapp text-2xl"></i>
          </button>
          <div className="mt-3 text-[#ffffff]">
            <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;1234567899 <br />
            <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;9996526784 <br />
          </div>
          <div className="mt-3 text-[#ffffff] flex space-x-2">
            <div className="">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              nemo corporis eos, veniam tenetur
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionLetter;
