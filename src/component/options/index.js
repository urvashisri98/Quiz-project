import React from "react";
import "./style.css";
const Options = ({
  options,
  correctOption,
  selectedOption,
  onSelect,
  showResult,
}) => {
  const handleOptionClick = (option) => {
    if (!showResult) {
      onSelect(option);
    }
  };
  const allOptions = [...options, correctOption];
  return (
    <div className="options-container">
      {allOptions.map((item, index) => {
        return (
          <div
            key={index}
            className={`options-box ${
              selectedOption === item ? "selected" : ""
            } ${
              showResult && selectedOption !== item
                ? item === decodeURIComponent(correctOption)
                  ? "corrected"
                  : "incorrected"
                : ""
            }`}
            onClick={() => handleOptionClick(item)}
          >
            {decodeURIComponent(item)}
          </div>
        );
      })}
    </div>
  );
};

export default Options;
