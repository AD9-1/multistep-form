import React, { useContext, useState } from "react";
import "./SelectPlan.scss";
import { PlanContext } from "../../context/PlanContext";
import Button from "../Button/Button";

const SelectPlan = ({ step, setStep }) => {
  const [selectedValues, setSelectedValue] = useState(() => {
    return sessionStorage.getItem("selectedSessions")
      ? JSON.parse(sessionStorage.getItem("selectedSessions"))
      : {};
  });
  const [label, setLabel] = useState(() => {
    return sessionStorage.getItem("labelSession")
      ? JSON.parse(sessionStorage.getItem("labelSession"))
      : [false, false, false];
  });

  const { selectedplan, setAddons } = useContext(PlanContext);


  const handleChange = (event, index) => {
    const newLabel = [...label];
    let updatedvalue = { ...selectedValues };
    if (event.target.checked) {
      updatedvalue = {
        ...updatedvalue,
        [event.target.name]: event.target.value,
      };
      newLabel[index] = true;
    } else {
      const { [event.target.name]: remove, ...rest } = selectedValues;
      updatedvalue = rest;
      newLabel[index] = false;
    }
    setLabel(newLabel);
    setSelectedValue(updatedvalue);
    sessionStorage.setItem("labelSession", JSON.stringify(newLabel));
    sessionStorage.setItem("selectedSessions", JSON.stringify(updatedvalue));
  };

  const handleBack = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    setStep(step + 1);
    setAddons(selectedValues);
  };

  return (
    <>
      <div className="selectplan">
        <h2 className="selectplan-addons">Pick add-ons</h2>
        <p className="selectplan-stmt">
          Add-ons help enhance your gaming experience
        </p>
        <div className="selectplan__checks">
          <section className="selectplan__checks__option">
            <label className={label[0] ? "label" : "unlabel"}>
              <input
                type="checkbox"
                onChange={(event) => handleChange(event, 0)}
                name="Online Services"
                value={selectedplan.billing === "monthly" ? 1 : 10}
                checked={Object.keys(selectedValues).includes("Online Services")}
              />
              <div className="checkbox-custom"></div>
              <article>
                <h3>Online Services</h3>
                <p>Access to multiplayer games</p>
              </article>
              <span>
                +${selectedplan.billing === "monthly" ? 1 : 10}/
                {selectedplan.billing === "monthly" ? "mo" : "yr"}
              </span>
            </label>
          </section>
          <section className="selectplan__checks__option">
            <label className={label[1] ? "label" : "unlabel"}>
              <input
                type="checkbox"
                onChange={(event) => handleChange(event, 1)}
                name="Larger Storage"
                value={selectedplan.billing === "monthly" ? 2 : 20}
                checked={Object.keys(selectedValues).includes("Larger Storage")}
              />
              <div className="checkbox-custom"></div>
              <article>
                <h3>Larger Storage</h3>
                <p>Extra 1TB of cloud save</p>
              </article>
              <span>
                +${selectedplan.billing === "monthly" ? 2 : 20}/
                {selectedplan.billing === "monthly" ? "mo" : "yr"}
              </span>
            </label>
          </section>
          <section className="selectplan__checks__option">
            <label className={label[2] ? "label" : "unlabel"}>
              <input
                type="checkbox"
                onChange={(event) => handleChange(event, 2)}
                name="Customizable Profile"
                value={selectedplan.billing === "monthly" ? 2 : 20}
                checked={Object.keys(selectedValues).includes("Customizable Profile")}
              />
              <div className="checkbox-custom"></div>
              <article>
                <h3>Customizable Profile</h3>
                <p>Custom Theme</p>
              </article>
              <span>
                +${selectedplan.billing === "monthly" ? 2 : 20}/
                {selectedplan.billing === "monthly" ? "mo" : "yr"}
              </span>
            </label>
          </section>
        </div>
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

export default SelectPlan;
