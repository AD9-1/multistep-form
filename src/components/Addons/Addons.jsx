import React, { useEffect } from "react";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import { Switch } from "@mui/material";
import "./Addons.scss";
const Addons = () => {
  const [checked, setChecked] = React.useState(false);
  const [click, setClick] = React.useState(0);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleClick = (index) => {
    setClick(index);
  };

  return (
    <div className="addons">
      <h2 className="addons__plan">Select Your Plan</h2>
      <p className="addons__moyr">
        You have the option for monthly or yearly Billing
      </p>
      <div className="addons_options">
        <section
          onClick={() => handleClick(0)}
          className={
            click === 0 ? "addons_options_clicked" : "addons_options_unclicked"
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
            click === 1 ? "addons_options_clicked" : "addons_options_unclicked"
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
            click === 2 ? "addons_options_clicked" : "addons_options_unclicked"
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
        {" "}
        <span>monthly</span>{" "}
        <Switch checked={checked} onChange={handleChange} />
        <span>yearly</span>
      </section>
    </div>
  );
};

export default Addons;
