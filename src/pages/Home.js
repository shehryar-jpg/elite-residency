import React, { useState, useRef, useEffect, useContext } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ImageHeader from "../components/ImageHeader";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
import ConstructionVideo from "../components/ConstructionVideo";
import Reviews from "../components/Reviews";
import FrequentlyAsked from "../components/FrequentlyAsked";
import SubscriptionLetter from "../components/SubscriptionLetter";
import OverFlowContext1 from "../context/OverFlowContext";
const Home = () => {
  const { showOverlay, setShowOverlay, setOverFlowData, overflowData } =
    useContext(OverFlowContext1);

  const overlayRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setShowOverlay(false);
        document.body.classList.remove("overflow-hidden");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [overlayRef]);
  return (
    <>
      <div className="relative">
        {/* Overlay */}
        {showOverlay && (
          <div
            className="fixed  top-0 overflow-scroll left-0 w-full h-full   z-50
          
          
          
          "
          >
            <div
              ref={overlayRef}
              className="absolute my-[90%] w-[80%] md:w-auto
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              {/* Your content inside the overlay */}
              <div className="bg-white p-3 rounded-xl border border-gray-200  ">
                <div className="flex justify-between items-center ">
                  <div className="">
                    <h1 className="font-semibold text-lg tracking-wide">
                      Tower 88
                    </h1>
                  </div>
                  <i
                    onClick={() => {
                      setShowOverlay(false);
                      document.body.classList.remove("overflow-hidden");
                    }}
                    class="fa-solid fa-x cursor-pointer text-[#222222]   "
                  ></i>
                </div>
                {overflowData.map((img) => (
                  <div className="py-2">
                    {" "}
                    <img
                      src={img.img}
                      className="w-[80rem]   object-cover  rounded-md   "
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Rest of the application */}
        <div
          className={`${
            showOverlay ? "opacity-80 overflow-hidden" : "overflow-hidden"
          }`}
        >
          {/* Your application content goes here... */}
          <div className="    ">
            {/* Gradient Header section */}
            <div className="    bg-gradient-to-t from-[#383c3f] to-[#1a1e23] ">
              <div className="max-w-[1360px] mx-auto">
                <Navbar />
                <Header />
                <ImageHeader />
              </div>
            </div>
            {/* The bottom section where I want the background to be white and some margin */}
            <div className="max-w-[1360px] mx-auto">
              <div className="md:mx-32 mx-4 ">
                <WhyChooseUs />
                <Projects />
              </div>
            </div>
            {/* I have not added this section to the margin section because I want the video to occupy the whole width */}
            <div className="max-w-[1360px] mx-auto">
              <ConstructionVideo />
            </div>
            {/* <div className="max-w-[1360px] mx-auto"> */}
            {/* <div className="md:px-32 px-5 bg-[#f8f8f8] h-[28rem] "> */}
            {/* <Reviews /> */}
            {/* </div> */}
            {/* </div> */}
            <div className="bg-[#ffb600] py-12  w-full ">
              <div className="max-w-[1360px] mx-auto">
                <FrequentlyAsked />
              </div>
            </div>
            <div className="    bg-gradient-to-t from-[#383c3f] to-[#1a1e23] ">
              <div className="max-w-[1360px] mx-auto">
                <div className="md:px-32 px-5">
                  <SubscriptionLetter />
                </div>
              </div>
            </div>

            <div className="    bg-[#323537] ">
              <div className="max-w-[1360px] mx-auto">
                <div
                  className="md:px-32 px-5 text-white flex items-center justify-between 
          h-14
          "
                >
                  <div className="text-[#919395] text-sm md:text-md">
                    DEVELOPED BY SHEHRYAR
                  </div>
                  <div className="text-[#919395] text-sm md:text-md">
                    ©2023 COPYRIGHT.
                  </div>
                  <div className="text-[#919395] hidden md:block">
                    SINCE.2012
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
