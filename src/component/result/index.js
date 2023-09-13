import React from "react";
import "./style.css";
const Result = ({
  correctOption,
  selectedOption,
  onNext,
  currentQuestionIndex,
  length,
}) => {
  const isCorrect =
    decodeURIComponent(correctOption) === decodeURIComponent(selectedOption);
  const buttonText =
    currentQuestionIndex === length - 1 ? "Submit" : "Next Question";
  return (
    <div className={`result ${isCorrect ? "correct" : "incorrect"}`}>
      {isCorrect ? (
        <>
          <p>Correct!</p>
        </>
      ) : (
        <p>Sorry. Please try again.</p>
      )}
      <button
        onClick={onNext}
        className={
          currentQuestionIndex === length - 1
            ? "submit-question"
            : "next-question"
        }
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Result;
