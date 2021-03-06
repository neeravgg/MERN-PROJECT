import React, { useState, useContext } from "react";
import SidebarContext from "../assests/context/SidebarContext";
import TestContext from "../assests/context/TestContext";
import useMediaQuery from "../assests/hooks/useMediaQuery";

export default function Quiz(props) {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");
  const { Open } = useContext(SidebarContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const { QuestionState } = useContext(TestContext);

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < QuestionState.length && setCurrentQuestion(nextQues);
  };

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < QuestionState.length; i++) {
      QuestionState[i].options.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
    if (score >= (40 / QuestionState.length) * 100) {
    }
  };

  function srink() {
    return Open ? "pl-[20rem] px-20" : "pl-[10rem] px-20 ";
  }

  return (
    <div
      className={` ${isLaptop && srink()} ${
        isTablet && "px-10"
      } px-2  mt-10 pt-10 min-h-screen min-w-screen  flex  justify-center`}
    >
      <div
        className={`flex flex-col w-11/12  pb-10 px-1 items-center
        `}
      >
        {showScore ? (
          <div>
            <span className='w-6/12 text-3xl font-semibold text-center text-skin-base rounded-2xl bg-skin-dull dark:theme-dark p-5'>
              You scored {score} out of {QuestionState.length}
            </span>
          </div>
        ) : (
          <>
            <div className='flex flex-col gap-8 p-10 rounded-xl shadow-sm  bg-skin-base dark:bg-gradient-to-r from-[#222222] to-[#1a1a1a]'>
              <div
                className={`flex flex-col items-center rounded-xl border-2 border-skin-base bg-skin-muted dark:theme-dark px-10 py-5`}
              >
                <span className='px-10 py-5 text-xl text-skin-muted rounded-2xl bg-skin-dull dark:theme-dark'>
                  Question {currentQuestion + 1} of {QuestionState.length}
                </span>
                <div
                  className={`mt-4 text-md md:text-xl text-center text-skin-base dark:theme-dark`}
                >
                  {QuestionState[currentQuestion].question}
                </div>
              </div>
              <div className='flex flex-col w-full '>
                {QuestionState[currentQuestion].options.map((answer, index) => (
                  <div
                    key={index}
                    className='flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-skin-muted rounded-2xl bg-skin-muted dark:theme-dark shadow-sm hover:bg-skin-btn-hover-muted'
                    onClick={(e) => handleAnswerOption(answer.answer)}
                  >
                    <input
                      type='radio'
                      name={answer.answer}
                      value={answer.answer}
                      checked={
                        answer.answer ===
                        selectedOptions[currentQuestion]?.answerByUser
                      }
                      onChange={(e) => handleAnswerOption(answer.answer)}
                      className='w-6 h-6 bg-black'
                    />
                    <p className='ml-6 text-skin-base '>{answer.answer}</p>
                  </div>
                ))}
              </div>
              <div className='flex justify-between w-full mt-4 text-white px-5 gap-6 '>
                <button
                  onClick={handlePrevious}
                  className='w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md'
                >
                  Previous
                </button>
                <button
                  onClick={
                    currentQuestion + 1 === QuestionState.length
                      ? handleSubmitButton
                      : handleNext
                  }
                  className='w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md'
                >
                  {currentQuestion + 1 === QuestionState.length
                    ? "Submit"
                    : "Next"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
