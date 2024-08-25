import React, { useContext, useEffect } from "react";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import { Switch } from "@mui/material";
import "./Addons.scss";
import Button from "../Button/Button";
import { PlanContext } from "../../context/PlanContext";
const Addons = ({ step, setStep }) => {
  const [checked, setChecked] = React.useState(false);
  const [click, setClick] = React.useState(0);
  const { selectedplan, setSelectedPlan } = useContext(PlanContext);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleClick = (index) => {
    setClick(index);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    const billing = !checked ? "monthly" : "yearly";
    const monthly = [9, 12, 15];
    const yearly = [90, 120, 150];
    const plan = ["Arcade", "Advanced", "Pro"];
    const billingValue = billing === "monthly" ? monthly[click] : yearly[click];
    setSelectedPlan({
      plan: plan[click],
      billing: billing,
      billingValue: billingValue,
    });
    setStep(step + 1);
  };
  return (
    <>
      <div className="addons">
        <h2 className="addons__plan">Select Your Plan</h2>
        <p className="addons__moyr">
          You have the option for monthly or yearly Billing
        </p>
        <div className="addons_options">
          <section
            onClick={() => handleClick(0)}
            className={
              click === 0
                ? "addons_options_clicked"
                : "addons_options_unclicked"
            }
          >
            <div className="icon">
              <img src={arcade} alt="" />
            </div>
            <div className="option">
              <h3>Arcade</h3>
              {!checked ? (
                <p>$9/mo</p>
              ) : (
                <>
                  <p>$90/yr</p>
                  <p>2 months free</p>
                </>
              )}
            </div>
          </section>
          <section
            onClick={() => handleClick(1)}
            className={
              click === 1
                ? "addons_options_clicked"
                : "addons_options_unclicked"
            }
          >
            <div className="icon">
              <img src={advanced} alt="" />
            </div>
            <div className="option">
              <h3>Advanced</h3>
              {!checked ? (
                <p>$12/mo</p>
              ) : (
                <>
                  <p>$120/yr</p>
                  <p>2 months free</p>
                </>
              )}
            </div>
          </section>
          <section
            onClick={() => handleClick(2)}
            className={
              click === 2
                ? "addons_options_clicked"
                : "addons_options_unclicked"
            }
          >
            <div className="icon">
              <img src={pro} alt="" />
            </div>
            <div className="option">
              <h3>Pro</h3>
              {!checked ? (
                <p>$15/mo</p>
              ) : (
                <>
                  <p>$150/yr</p>
                  <p>2 months free</p>
                </>
              )}
            </div>
          </section>
        </div>
        <section className="slider">
          <div className="slider__div">
            <span>monthly</span>{" "}
            <Switch checked={checked} onChange={handleChange} />
            <span>yearly</span>
          </div>
        </section>
      </div>
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
    </>
  );
};

export default Addons;
