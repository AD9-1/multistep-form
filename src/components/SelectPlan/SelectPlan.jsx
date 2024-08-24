import React, { useState } from "react";
import "./SelectPlan.scss";

const SelectPlan = () => {
  const [selectedValues, setSelectedValue] = useState({});
  const [label, setLabel] = useState([false, false, false]);

  const handleChange = (event, index) => {
    const newLabel = [...label];
    if (event.target.checked) {
      setSelectedValue({
        ...selectedValues,
        [event.target.name]: event.target.value,
      });
      newLabel[index] = true;
    } else {
      const { [event.target.name]: remove, ...rest } = selectedValues;
      setSelectedValue(rest);
      newLabel[index] = false;
    }
    setLabel(newLabel);
  };

  console.log(selectedValues);

  return (
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
              onChange={(event) => handleChange(event,0)}
              name="Online Services"
              value="10"
            />
            <div className="checkbox-custom"></div>
            <article>
              <h3>Online Services</h3>
              <p>Access to multiplayer games</p>
            </article>
            <span>+$10/yr</span>
          </label>
        </section>
        <section className="selectplan__checks__option">
          <label className={label[1] ? "label" : "unlabel"}>
            <input
              type="checkbox"
              onChange={(event) => handleChange(event,1)}
              name="Larger Storage"
              value="20"
            />
            <div className="checkbox-custom"></div>
            <article>
              <h3>Larger Storage</h3>
              <p>Extra 1TB of cloud save</p>
            </article>
            <span>+$20/yr</span>
          </label>
        </section>
        <section className="selectplan__checks__option">
          <label className={label[2] ? "label" : "unlabel"}>
            <input
              type="checkbox"
              onChange={(event) => handleChange(event,2)}
              name="Customizable Profile"
            />
            <div className="checkbox-custom"></div>
            <article>
              <h3>Customizable Profile</h3>
              <p>Custom Theme</p>
            </article>
            <span>+$20/yr</span>
          </label>
        </section>
      </div>
    </div>
  );
};

export default SelectPlan;
