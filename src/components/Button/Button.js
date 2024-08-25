import React from "react";
import "./Button.scss";
const Button = ({
  next,
  back,
  step,
  clickNext,
  clickBack,
  background,
  color,
  backgroundBack,
  colorBack,
}) => {
  const handleNext = () => {
    clickNext();
  };
  const handleBack = () => {
    clickBack();
  };
  return (
    <div className="button">
      {(step === 1 && <div></div>) ||
        ((step === 2||step===3||step===4) && (
          <div>
            <button
              onClick={handleBack}
              style={{
                backgroundColor: backgroundBack,
                color: colorBack,
              }}
            >
              {back}
            </button>
          </div>
        ))}
      <div>
        <button
          onClick={handleNext}
          style={{
            backgroundColor: background,
            color: color,
          }}
        >
          {next}
        </button>
      </div>
    </div>
  );
};

export default Button;
