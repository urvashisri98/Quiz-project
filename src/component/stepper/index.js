import React from "react";
import "./style.css"
const Stepper = ({ currentQuestionIndex, totalQuestions }) => {
  return (
    <div className="stepper">
      Question {currentQuestionIndex + 1} of {totalQuestions}
    </div>
  );
};

export default Stepper;