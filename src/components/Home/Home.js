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
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [redfield, setRedfield] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const [step, setStep] = useState(1);
  const handleNext = () => {
    if (step === 1) {
      let hasError = false;
      let newRedfield = { ...redfield };

      if (!formData.name || formData.name === "") {
        newRedfield.name = true;
        hasError = true;
      }
      if (!formData.email || formData.email === "") {
        newRedfield.email = true;
        hasError = true;
      }
      if (!formData.phone || formData.phone === "") {
        newRedfield.phone = true;
        hasError = true;
      }

      setRedfield(newRedfield);

      if (!hasError) {
        setStep(step + 1);
      }
    } else setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  return (
    <div className="home">
      <div className="home__first">
        <ProgressBar step={step} />

        <div className="home__first--steps">
          {step === 1 && (
            <PersonalInfo
              formData={formData}
              setFormData={setFormData}
              redfield={redfield}
              setRedfield={setRedfield}
            />
          )}
          {step === 2 && <Addons step={step} setStep={setStep} />}
          {step === 3 && <SelectPlan step={step} setStep={setStep} />}
          {step === 4 && <FinishUp step={step} setStep={setStep} />}
          {step === 5 && <Thankyou />}
        </div>
      </div>
      {step !== 5 ? (
        <div className="home__second">
          {step === 1 && (
            <Button
              next="Next Step"
              clickNext={handleNext}
              background="hsl(213, 96%, 18%)"
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
              background="hsl(213, 96%, 18%)"
              color="white"
              backgroundBack="hsl(231, 100%, 99%)"
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
              background="hsl(213, 96%, 18%)"
              color="white"
              backgroundBack="hsl(231, 100%, 99%)"
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
              background="hsl(243, 100%, 62%)"
              color="white"
              backgroundBack="hsl(231, 100%, 99%)"
              colorBack="grey"
              step={step}
            />
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
