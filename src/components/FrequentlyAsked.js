import React, { useState } from "react";
import black_check_box from "../images/black-check-box.png";
import { Fade } from "react-reveal";
import Question from "./Question";

const FrequentlyAsked = () => {
  const [frequentlyAskedQuestions, setFrequentlyAskedQuestions] = useState([
    {
      question: "How do I pay for the Essentials or Premium pan?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, ex ac mollis vulputate, velit tellus finibus neque, eget ultrices tortor diam id tortor. Donec elit metus, sollicitudin nec ultricies in, rutrum tincidunt neque. Fusce mollis elementum tempor. Aliquam luctus risus ut enim pulvinar aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, ex ac mollis vulputate, velit tellus finibus neque, eget ultrices tortor diam id tortor. Donec elit metus, sollicitudin nec ultricies in, rutrum tincidunt neque. Fusce mollis elementum tempor. Aliquam luctus risus ut enim pulvinar aliquet",
    },
    {
      question:
        "Can I cancel my Essentials or Premium plan subscription at any time?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, ex ac mollis vulputate, velit tellus finibus neque, eget ultrices tortor diam id tortor. Donec elit metus, sollicitudin nec ultricies in, rutrum tincidunt neque. Fusce mollis elementum tempor. Aliquam luctus risus ut enim pulvinar aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, ex ac mollis vulputate, velit tellus finibus neque, eget ultrices tortor diam id tortor. Donec elit metus, sollicitudin nec ultricies in, rutrum tincidunt neque. Fusce mollis elementum tempor. Aliquam luctus risus ut enim pulvinar aliquet",
    },
    {
      question: "We need to add users to our team. How will that be billed?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, ex ac mollis vulputate, velit tellus finibus neque, eget ultrices tortor diam id tortor. Donec elit metus, sollicitudin nec ultricies in, rutrum tincidunt neque. Fusce mollis elementum tempor. Aliquam luctus risus ut enim pulvinar aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, ex ac mollis vulputate, velit tellus finibus neque, eget ultrices tortor diam id tortor. Donec elit metus, sollicitudin nec ultricies in, rutrum tincidunt neque. Fusce mollis elementum tempor. Aliquam luctus risus ut enim pulvinar aliquet",
    },
    {
      question:
        "Do you offer discounts for non-profit organizations or educational?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, ex ac mollis vulputate, velit tellus finibus neque, eget ultrices tortor diam id tortor. Donec elit metus, sollicitudin nec ultricies in, rutrum tincidunt neque. Fusce mollis elementum tempor. Aliquam luctus risus ut enim pulvinar aliquetLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, ex ac mollis vulputate, velit tellus finibus neque, eget ultrices tortor diam id tortor. Donec elit metus, sollicitudin nec ultricies in, rutrum tincidunt neque. Fusce mollis elementum tempor. Aliquam luctus risus ut enim pulvinar aliquet",
    },
  ]);
  return (
    <div className="md:mx-32 mx-4">
      <Fade bottom distance="15%">
        <div className=" flex items-center   ">
          <img
            src={black_check_box}
            alt=""
            className="h-4 md:mt-2.5 mt-1  object-none"
          />
          <h1 className="md:text-3xl font-extrabold mx-5 text-lg md:xl">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
      </Fade>
      <div className="my-6">
        {frequentlyAskedQuestions?.map((question) => (
          <div className="py-4   border-b border-[#8c6a11]">
            <Fade bottom distance="10%" duration={750}>
              <Question question={question.question} answer={question.answer} />
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
