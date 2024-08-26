import React, { useState } from "react";
import Addons from "../Addons/Addons";
import Button from "../Button/Button";
import FinishUp from "../FinishUp/FinishUp";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import Thankyou from "../Thankyou/Thankyou";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Home.scss";
const Home = () => {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  return (
    <div className="home">
      <div className="home__first">
    <ProgressBar step={step} />
        
        
        <div className="home__first--steps">
          {step === 1 && <PersonalInfo step={step} setStep={setStep} />}
          {step === 2 && <Addons step={step} setStep={setStep} />}
          {step === 3 && <SelectPlan step={step} setStep={setStep} />}
          {step === 4 && <FinishUp step={step} setStep={setStep} />}
          {step === 5 && <Thankyou />}
        </div>
      </div>
      <div className="home__second">
        {step === 1 && (
          <Button
            next="Next Step"
            clickNext={handleNext}
            background="#0d0739bd"
            color="white"
            step={step}
          />
        )}
        {step === 2 && (
          <Button
            next="Next Step"
            back="Go Back"
            clickBack={handleBack}
            clickNext={handleNext}
            background="#0d0739bd"
            color="white"
            backgroundBack="#e5dfdf"
            colorBack="grey"
            step={step}
          />
        )}
        {step === 3 && (
          <Button
            next="Next Step"
            back="Go Back"
            clickBack={handleBack}
            clickNext={handleNext}
            background="#0d0739bd"
            color="white"
            backgroundBack="#e5dfdf"
            colorBack="grey"
            step={step}
          />
        )}
        {step === 4 && (
          <Button
            next="Confirm"
            back="Go Back"
            clickBack={handleBack}
            clickNext={handleNext}
            background="rgb(34, 37, 211)"
            color="white"
            backgroundBack="#e5dfdf"
            colorBack="grey"
            step={step}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
