import React, { useEffect, useRef, useState } from "react";
import black_check_box from "../images/black-check-box.png";
import ScrollButtons from "./ScrollButtons";
import { Fade } from "react-reveal";

const n = 8;

const Reviews = () => {
  const [reviewsArray, setReviewsArray] = useState([
    {
      name: "Alex",
      profession: "CEO",
      profile_image:
        "data:image/jpeg;base64,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",
    },

    {
      name: "Jonathan",
      profession: "Co-Founder",
      profile_image:
        "https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg",
    },

    {
      name: "Lucas",
      profession: "Surgeon",
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwmEL6rKWu8oLAEGd5ICYpIC0SfmqTeci3MbQqFvM4OKTlWs7uFnfqHwn0_lQi1869Qc&usqp=CAU",
    },
    {
      name: "Liam",
      profession: "Physical Therapist",
      profile_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwmEL6rKWu8oLAEGd5ICYpIC0SfmqTeci3MbQqFvM4OKTlWs7uFnfqHwn0_lQi1869Qc&usqp=CAU",
    },
  ]);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const ref = useRef(null);

  const slide = (shift) => {
    ref.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(ref.current.scrollWidth - ref.current.scrollLeft) <=
      ref.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <>
      <div className="pt-14 flex items-center   justify-between">
        <Fade bottom distance="30%" duration={750}>
          <div className="flex items-center">
            <img
              src={black_check_box}
              alt=""
              className="h-4 md:mt-2.5 mt-1  object-none"
            />
            <h1 className="md:text-3xl font-extrabold mx-5 text-xl">
              WHAT OUR CLIENTS SAYS
            </h1>
          </div>
        </Fade>
        <div className="hidden md:block">
          <Fade bottom distance="15%" duration={710}>
            <ScrollButtons
              slide={slide}
              scrollX={scrollX}
              scrolEnd={scrolEnd}
            />
          </Fade>
        </div>
      </div>
      {/* <Fade bottom distance="15%" duration={710}> */}
      <div
        className="overflow-x-auto     scroll-smooth    scrollbar-hide  "
        ref={ref}
      >
        <br />
        <div className="flex        space-x-10 ">
          {reviewsArray?.map((review) => (
            <div>
              <div className="  p-3 rounded-lg  bg-white w-96  ">
                <div className="">
                  <p className="text-sm ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis placeat nesciunt recusandae, sed delectus facilis
                    blanditiis quam fuga, earum libero temporibus debitis magni
                    nisi odio architecto. Perspiciatis, voluptas quae?
                    Est.nesciunt recusandae, sed delectus facilis blanditiis
                    quam fuga, earum libero temporibus debitis magni nisi odio
                    architecto. Perspiciatis, voluptas quae? Est.
                  </p>
                  <div className="pt-5 flex space-x-3 items-start">
                    <div className="">
                      <img
                        src={review.profile_image}
                        alt=""
                        className="h-10 w-10  rounded-full object-scale-down border bg-slate-700"
                      />
                    </div>
                    <div className="">
                      <h1 className="font-extrabold text-sm">{review.name}</h1>
                      <p className="text-xs  font-semibold mt-0.5">
                        {review.profession}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </Fade> */}

      <div className="md:hidden">
        <ScrollButtons slide={slide} scrollX={scrollX} scrolEnd={scrolEnd} />
      </div>
    </>
  );
};

export default Reviews;
