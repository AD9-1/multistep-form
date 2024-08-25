import React, { useContext } from "react";
import "./FinishUp.scss";
import { PlanContext } from "../../context/PlanContext";
import Button from "../Button/Button";
const FinishUp = ({ step, setStep }) => {
  const { selectedplan, addons } = useContext(PlanContext);

  const calculation = () => {
    let total = 0;
    total += parseInt(selectedplan.billingValue);
    Object.values(addons).forEach((value) => {
      total += parseInt(value);
    });
    return total;
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    setStep(step + 1);
  };
  return (
    <>
      <div className="finishup">
        <div className="finishup__upper">
          <h3>Finishing Up</h3>
          <p className="description">
            Double-check everything before confirming
          </p>
        </div>

        <div className="finishup__block">
          <article className="finishup__block__article">
            <p className="custom">
              {selectedplan.plan}({selectedplan.billing})
            </p>
            <p className="custom">
              ${selectedplan.billingValue}/
              {selectedplan.billing === "monthly" ? "mo" : "yr"}
            </p>
          </article>
          <hr className="horizontal--line" />
          {Object.entries(addons).map(([key, value]) => {
            return (
              <article className="finishup__block__article" key={key}>
                <p>{key}</p>
                <p>
                  +${value}/{selectedplan.billing === "monthly" ? "mo" : "yr"}
                </p>
              </article>
            );
          })}
        </div>
        <article className="finishup__article">
          <p>
            Total (per {selectedplan.billing === "monthly" ? "month" : "year"})
          </p>
          <p>
            ${calculation()}/{selectedplan.billing === "monthly" ? "mo" : "yr"}
          </p>
        </article>
      </div>
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
    </>
  );
};

export default FinishUp;
