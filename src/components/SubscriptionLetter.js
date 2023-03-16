import React from "react";

const SubscriptionLetter = () => {
  return (
    <div className="py-20 md:grid grid-cols-3 gap-7 items-center">
      <h1 className="text-white text-3xl md:text-5xl font-semibold col-span-2">
        SO, WHAT YOU WAITING FOR? LET'S TALK YOUR PROJECT!
      </h1>
      <div className="">
        <input
          type="text"
          className="bg-[#474646] mt-10 my-5 w-full h-14 rounded-full font-semibold text-lg text-[#99a3af] px-8 outline-none"
          placeholder="Business Email"
        />
        <button className="bg-[#ffb600] w-full h-14 rounded-full font-extrabold text-xl text-[#1a1e23]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default SubscriptionLetter;
