import React, { useState } from "react";
import Addons from "../Addons/Addons";
import Button from "../Button/Button";
import FinishUp from "../FinishUp/FinishUp";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import Thankyou from "../Thankyou/Thankyou";
import ProgressBar from "../ProgressBar/ProgressBar";
const Home = () => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState({});
  return (
    <div className="home">
      <ProgressBar/>
      {step === 1 && <PersonalInfo step={step} setStep={setStep} />}
      {step === 2 && <Addons step={step} setStep={setStep} />}
      {step === 3 && <SelectPlan step={step} setStep={setStep} />}
      {step === 4 && <FinishUp step={step} setStep={setStep} />}
      {step === 5 && <Thankyou />}
    </div>
  );
};

export default Home;
