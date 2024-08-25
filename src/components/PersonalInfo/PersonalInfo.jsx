import React from "react";
import "./PersonalInfo.scss";
import Button from "../Button/Button";
const PersonalInfo = ({ step, setStep }) => {
  const handleNext = () => {
    setStep(step + 1);
  };
  sessionStorage.removeItem("selectedSessions")
  sessionStorage.removeItem("labelSession")
  return (
    <>
    <div className="personalinfo">
      <h2 className="personalinfo_heading">Personal info</h2>
      <p className="personalinfo_para">
        Please provide your name,email address and phone number
      </p>
      <div className="personalinfo_info">
        <section>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </section>
        <section>
          <label htmlFor="">Email Address</label>
          <input type="text" name="email" />
        </section>
        <section>
          <label htmlFor="">Phone Number</label>
          <input type="number" name="phone" />
        </section>
      </div>
      
    </div>
    {step === 1 && (
        <Button
          next="Next Step"
          clickNext={handleNext}
          background="#0d0739bd"
          color="white"
          step={step}
        />
      )}
    </>
  );
};

export default PersonalInfo;
