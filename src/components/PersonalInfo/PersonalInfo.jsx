import React, { useContext, useEffect } from "react";
import "./PersonalInfo.scss";
import Button from "../Button/Button";
import { PlanContext } from "../../context/PlanContext";
const PersonalInfo = ({ step, setStep }) => {
  const { setAddons } = useContext(PlanContext);

  useEffect(() => {
    setAddons({});
    sessionStorage.removeItem("selectedSessions");
    sessionStorage.removeItem("labelSession");
    sessionStorage.removeItem("timeSession");
    sessionStorage.removeItem("clickSessions");
  }, []);
  return (
    <section className="parent">
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
    </section>
  );
};

export default PersonalInfo;
