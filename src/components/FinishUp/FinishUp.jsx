import React, { useContext } from "react";
import "./FinishUp.scss";
import { PlanContext } from "../../context/PlanContext";
import Button from "../Button/Button";
const FinishUp = ({ step, setStep }) => {
  const { selectedplan, addons, time } = useContext(PlanContext);
  console.log(addons);
  console.log(selectedplan);
  const calculation = () => {
    let total = 0;
    total =
      total + Object.keys(selectedplan).length
        ? parseInt(selectedplan.billingValue)
        : time === "monthly"
        ? 9
        : 90;
    Object.values(addons).forEach((value) => {
      total += parseInt(value);
    });
    return total;
  };

  return (
    <>
      <div className="finishup">
        <div className="finishup__upper">
          <h2>Finishing Up</h2>
          <p className="description">
            Double-check everything before confirming
          </p>
        </div>

        <div className="finishup__block">
          <article className="finishup__block__article">
            <p className="custom">
              {Object.keys(selectedplan).length === 0
                ? time === "monthly"
                  ? "Arcade (monthly)"
                  : "Arcade (yearly)"
                : `${selectedplan.plan} (${selectedplan.billing})`}
            </p>

            <p className="custom">
              $
              {Object.keys(selectedplan).length === 0
                ? time === "monthly"
                  ? 9
                  : 90
                : selectedplan.billingValue}
              /
              {Object.keys(selectedplan).length === 0
                ? time === "monthly"
                  ? "mo"
                  : "yr"
                : selectedplan.billing === "monthly"
                ? "mo"
                : "yr"}
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
            Total (per{" "}
            {Object.keys(selectedplan).length === 0
              ? time === "monthly"
                ? "month"
                : "year"
              : selectedplan.billing === "monthly"
              ? "month"
              : "year"}
            )
          </p>
          <p>
            ${calculation()}/
            {Object.keys(selectedplan).length === 0
              ? time === "monthly"
                ? "mo"
                : "yr"
              : selectedplan.billing === "monthly"
              ? "mo"
              : "yr"}
          </p>
        </article>
      </div>
     
    </>
  );
};

export default FinishUp;
