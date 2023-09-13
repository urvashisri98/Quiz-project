import React, { useEffect, useState } from "react";
import questionData from "../../data/Questions.json";
import Question from "../../component/question";
import Options from "../../component/options";
import Result from "../../component/result";
import "./style.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  useEffect(() => {
    setQuestions(questionData);
  }, [questions]);
  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return null;
  }

  const difficultyStars = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "★";
      case "medium":
        return "★★";
      case "hard":
        return "★★★";
      default:
        return "";
    }
  };
  const completionPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  const onhandleSelect = (option) => {
    setSelectedOption(option);
    checkAnswer(option);
  };

  const checkAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.correct_answer) {
      setScore(score + 5);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
      setShowResult(false);
    } else {
      alert(
        `Congratulations! You have completed the quiz. Your score: ${score}`
      );
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-questions-options-container">
        <div
          className="stepper"
          style={{ width: `${completionPercentage}%` }}
        ></div>
        <div className="question-entertainment-stars">
          <label className="heading-question">
            Question {currentQuestionIndex + 1} of {questions.length}
          </label>
          <label className="entertainment">Entertainment : Board Games</label>
          <label>{difficultyStars(currentQuestion.difficulty)}</label>
        </div>
        <div className="questions-options-results">
          <Question question={currentQuestion} showResult={showResult} />
          <Options
            options={currentQuestion.incorrect_answers}
            correctOption={currentQuestion.correct_answer}
            showResult={showResult}
            selectedOption={selectedOption}
            onSelect={onhandleSelect}
          />
          {showResult && (
            <Result
            currentQuestionIndex={currentQuestionIndex}
            length={questions.length}
              correctOption={currentQuestion.correct_answer}
              selectedOption={selectedOption}
              onNext={nextQuestion}
            />
          )}
        </div>
        <div className="score">Score: {score}</div>
      </div>
    </div>
  );
};

export default Quiz;
