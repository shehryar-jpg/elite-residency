import React from "react";
import image from "../images/victoria-project.png";
import Fade from "react-reveal/Fade";

const ImageHeader = () => {
  return (
    <div className=" h-[27rem] md:h-[35rem]  ">
      <div className="bottom  pt-10 pb-12 flex justify-around">
        <Fade bottom distance="10%" duration={710}>
          <img
            src={image}
            alt=""
            className="sm:w-full         xl:mx-32 px-3 md:px-0  mx-20 h-[29rem]  md:rounded-t-[5.5rem] rounded-t-[4.5rem]   object-cover"
          />
        </Fade>
      </div>
    </div>
  );
};

export default ImageHeader;
