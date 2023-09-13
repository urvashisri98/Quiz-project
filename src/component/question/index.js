import React from "react";
import "./style.css";
const Question = ({ question, showResult }) => {
  return (
    <div>
      <label>{decodeURIComponent(question.question)}</label>
      {showResult && (
        <p className="correct-answer">
          Correct Answer: {decodeURIComponent(question.correct_answer)}
        </p>
      )}
    </div>
  );
};

export default Question;
