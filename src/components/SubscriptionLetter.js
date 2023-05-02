import React from "react";

const SubscriptionLetter = () => {
  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=+923454301013&text=Hi,%20I%20would%20like%20to%20talk%20about%20apartments"
    );
  };
  return (
    <div className="py-20 md:grid grid-cols-3 gap-7 items-center">
      <h1 className="text-white text-3xl md:text-5xl font-semibold col-span-2">
        SO, WHAT YOU WAITING FOR? LET'S TALK YOUR PROJECT!
      </h1>

      <div className="mt-5">
        <button
          onClick={handleClick}
          className="bg-[#ffb600] w-full h-14 rounded-full font-extrabold text-xl text-[#1a1e23]"
        >
          Contact Us &nbsp;&nbsp;&nbsp;<i class="fa-brands fa-whatsapp"></i>
        </button>
      </div>
    </div>
  );
};

export default SubscriptionLetter;
