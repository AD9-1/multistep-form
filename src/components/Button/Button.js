import React from "react";
import "./Button.scss"
const Button = () => {
  const handleNext = () => {};
  const handleBack = () => {};
  return (
    <div className="button">
      <div>
        <button onClick={handleBack}>Go Back</button>
      </div>
      <div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Button;
