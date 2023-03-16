import React from "react";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <div className=" text-white ">
      <div
        className="top md:flex justify-evenly    
      
      
      
           pt-10 md:pt-20
        
           md:mx-16
      
      
      
      
      
      
      
      
      
      
      "
      >
        <div className="md:w-[32rem] ">
          <Fade bottom distance="25%" duration={710}>
            <h1 className="text-4xl lg:text-5xl  font-semibold mx-3  ">
              BUILD YOUR DREAM PROPERTY WITH NEW EXPERIENCE
            </h1>
          </Fade>
        </div>
        <Fade bottom distance="25%" duration={710}>
          <div className="bottom mx-3  md:w-[30rem] pt-10 md:pt-0">
            <h3 className="text-xl">ABOUT US</h3>
            <p className="text-[#888888]   text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              maiores in nihil quod quis explicabo repudiandae ea numquam
              quaerat doloribus? repudiandae ea numquam amet consectetur
              adipisicing
            </p>
            <br />
            <p className="flex justify-between">
              <p className="font-semibold">350+ Projects</p>
              <p className="font-semibold">280+ Clients</p>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Header;
