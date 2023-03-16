import React, { useState } from "react";
import { Fade } from "react-reveal";
const Question = ({ question, answer }) => {
  const [expandQuestion, setExpandQuestion] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between text-[#1a1e23] ">
        <h1 className="text-xl font-semibold">{question}</h1>
        <div
          onClick={() => {
            setExpandQuestion((prev) => !prev);
          }}
          className="cursor-pointer"
        >
          {expandQuestion ? (
            <i class="fa-solid fa-minus text-3xl"></i>
          ) : (
            <i class="fa-solid fa-plus text-3xl"></i>
          )}
        </div>
      </div>
      <div className="">
        <p>
          {expandQuestion ? (
            <>
              <Fade bottom distance="1%" duration={750}>
                <p className="py-2">{answer}</p>
              </Fade>
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default Question;
