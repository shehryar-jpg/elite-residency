import React from "react";
import { Fade } from "react-reveal";

import black_check_box from "../images/black-check-box.png";
const WhyChooseUs = () => {
  const duration_for_project_pictures = 750;

  return (
    <div className="">
      <div className="pt-14 flex items-center md:mt-16 mt-36">
        <Fade bottom distance="15%" duration={duration_for_project_pictures}>
          <img
            src={black_check_box}
            alt=""
            className="h-4 md:mt-2.5 mt-1  object-none"
          />
          <h1 className="md:text-3xl font-extrabold mx-5 text-xl">
            WHY CHOOSE US
          </h1>
        </Fade>
      </div>
      <div className=" container  mt-12 grid grid-cols-1 lg:grid-cols-2 ">
        <div className=" min-h-36 lg:border-r-2 lg:border-b-2 border-gray-200   ">
          <Fade bottom distance="10%" duration={duration_for_project_pictures}>
            <p className="text-sm flex items-center">
              <p className="text-gray-400">01</p>{" "}
              <p className="font-bold text-xl mx-5">The Best Price</p>{" "}
            </p>
            <p className="text-sm mx-9 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto amet soluta, placeat adipisci, ab voluptatibus totam
              consequuntur odit animi magni at tenetur eum laudantium? Tempora
              aspernatur
            </p>
          </Fade>
        </div>
        <div className=" lg:border-b-2  mt-10 lg:mt-0 ">
          <div className="lg:mx-5   ">
            <Fade
              bottom
              distance="10%"
              duration={duration_for_project_pictures}
            >
              <p className="text-sm flex items-center">
                <p className="text-gray-400">02</p>{" "}
                <p className="font-bold text-xl mx-5">Daily Consultant</p>
              </p>

              <p className="text-sm mx-10  mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto amet soluta, placeat adipisci, ab voluptatibus totam
                consequuntur odit animi magni at tenetur eum laudantium? Tempora
              </p>
            </Fade>
          </div>
          <br />
        </div>
        <div className="lg:pt-10 pt-6 lg:border-r-2 border-gray-200  ">
          <div className="">
            <Fade
              bottom
              distance="10%"
              duration={duration_for_project_pictures}
            >
              <p className="text-sm flex items-center">
                <p className="text-gray-400">03</p>{" "}
                <p className="font-bold text-xl mx-5">Custom Design</p>{" "}
              </p>
              <p className="text-sm mx-10 mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto amet soluta, placeat adipisci, ab voluptatibus totam
                consequuntur odit animi magni at tenetur eum laudantium? Tempora
                aspernatur incidunt earum officia a.
              </p>
            </Fade>
          </div>
        </div>
        <div className="mt-10   ">
          <div className="lg:mx-5 ">
            <Fade
              bottom
              distance="10%"
              duration={duration_for_project_pictures}
            >
              <p className="text-sm flex items-center">
                <p className="text-gray-400">04</p>{" "}
                <p className="font-bold text-xl mx-5">Premium Quality</p>{" "}
              </p>
              <p className="text-sm mx-10 mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto amet soluta, placeat adipisci, ab voluptatibus totam
                consequuntur odit animi magni at tenetur eum laudantium? Tempora
                aspernatur incidunt earum officia a.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
