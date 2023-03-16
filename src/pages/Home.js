import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ImageHeader from "../components/ImageHeader";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
import ConstructionVideo from "../components/ConstructionVideo";
import Reviews from "../components/Reviews";
import FrequentlyAsked from "../components/FrequentlyAsked";
import SubscriptionLetter from "../components/SubscriptionLetter";

const Home = () => {
  return (
    <>
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
        <div className="max-w-[1360px] mx-auto">
          <div className="md:px-32 px-5 bg-[#f8f8f8] h-[28rem] ">
            <Reviews />
          </div>
        </div>
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
              <div className="text-[#919395]">DEVELOPED BY SHEHRYAR</div>
              <div className="text-[#919395]">©2023 COPYRIGHT</div>
              <div className="text-[#919395] hidden md:block">SINCE.2012</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
