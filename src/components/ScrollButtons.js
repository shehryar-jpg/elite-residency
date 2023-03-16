import React from "react";

const ScrollButtons = ({ slide, scrolEnd, scrollX }) => {
  return (
    <div>
      <div className=" flex  mx-auto w-20 justify-between my-5">
        {scrollX !== 0 ? (
          <div
            onClick={() => slide(-250)}
            className="top-28 2md:right-40     bg-[#ffb501]  h-8 w-8 cursor-pointer    hover:shadow-md rounded-full px-[0.6rem] py-[3px]        "
          >
            <i className="fa-solid fa-arrow-left text-gray-100"></i>
          </div>
        ) : (
          <div
            onClick={() => slide(-250)}
            className="top-28 2md:right-40     bg-[#fae9c4]  h-8 w-8 cursor-pointer    hover:shadow-md rounded-full px-[0.6rem] py-[3px]        "
          >
            <i className="fa-solid fa-arrow-left text-[#f2c451]"></i>
          </div>
        )}

        {!scrolEnd ? (
          <>
            <div
              onClick={() => slide(250)}
              className="top-28 2md:right-40     bg-[#ffb501]  h-8 w-8 cursor-pointer    hover:shadow-md rounded-full px-[0.6rem] py-[3px]        "
            >
              <i className="fa-solid fa-arrow-right text-gray-100"></i>
            </div>
          </>
        ) : (
          <div className="top-28 2md:right-40     bg-[#fae9c4]  h-8 w-8 cursor-pointer    hover:shadow-md rounded-full px-[0.6rem] py-[3px]        ">
            <i className="fa-solid fa-arrow-right text-[#f2c451]"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollButtons;
