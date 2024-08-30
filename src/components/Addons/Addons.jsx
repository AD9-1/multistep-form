import React, { useContext } from "react";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import { Switch } from "@mui/material";
import "./Addons.scss";

import { PlanContext } from "../../context/PlanContext";
const Addons = () => {
  const [checked, setChecked] = React.useState(
    sessionStorage.getItem("timeSession")
      ? JSON.parse(sessionStorage.getItem("timeSession"))
      : false
  );
  const [click, setClick] = React.useState(
    sessionStorage.getItem("clickSessions")
      ? JSON.parse(sessionStorage.getItem("clickSessions"))
      : 0
  );
  const { selectedplan, setSelectedPlan, time, setTime,setAddons } =
    useContext(PlanContext);

  const monthly = [9, 12, 15];
  const yearly = [90, 120, 150];
  const plan = ["Arcade", "Advanced", "Pro"];
  let billing;
  const handleChange = (event) => {
    setChecked(event.target.checked);
    setAddons({})
    if (event.target.checked === false) {
      setSelectedPlan({
        plan: plan[click],
        billing: "monthly",
        billingValue: monthly[click],
      });
      setTime("monthly");
    } else {
      setSelectedPlan({
        plan: plan[click],
        billing: "yearly",
        billingValue: yearly[click],
      });
      setTime("yearly");
    }
    sessionStorage.setItem("timeSession", JSON.stringify(event.target.checked));
    sessionStorage.removeItem("selectedSessions");
    sessionStorage.removeItem("labelSession");
  };
  const handleClick = (index) => {
    sessionStorage.removeItem("selectedSessions");
    sessionStorage.removeItem("labelSession");
    setAddons({});
    setClick(index);
    billing = !checked ? "monthly" : "yearly";
    const billingValue = billing === "monthly" ? monthly[index] : yearly[index];
    setSelectedPlan({
      plan: plan[index],
      billing: billing,
      billingValue: billingValue,
    });
    sessionStorage.setItem("clickSessions", JSON.stringify(index));
  };

  return (
  
      <div className="addons">
        <h1 className="addons__plan">Select Your Plan</h1>
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
            <span className={time==="monthly"?"timechecked":"timeunchecked"}>Monthly</span>
            <Switch checked={checked} onChange={handleChange} />
            <span className={time==="yearly"?"timechecked":"timeunchecked"}>Yearly</span>
          </div>
        </section>
      </div>
 
  );
};

export default Addons;
