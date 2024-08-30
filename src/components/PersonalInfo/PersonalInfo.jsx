import React, { useContext, useEffect } from "react";
import "./PersonalInfo.scss";
import { PlanContext } from "../../context/PlanContext";
const PersonalInfo = ({ formData, setFormData, redfield, setRedfield }) => {
  const { setAddons } = useContext(PlanContext);

  useEffect(() => {
    setAddons({});
    sessionStorage.removeItem("selectedSessions");
    sessionStorage.removeItem("labelSession");
    sessionStorage.removeItem("timeSession");
    sessionStorage.removeItem("clickSessions");
  }, []);
  const handlechange = (e) => {
    e.preventDefault();
    if (e.target.name === "name") setRedfield({ ...redfield, name: false });
    if (e.target.name === "email") setRedfield({ ...redfield, email: false });
    if (e.target.name === "phone") setRedfield({ ...redfield, phone: false });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="personalinfo">
      <h2 className="personalinfo_heading">Personal info</h2>
      <p className="personalinfo_para">
        Please provide your name,email address and phone number
      </p>
      <div className="personalinfo_info">
        <section>
          <label htmlFor="name">
            <p>Name</p>
            {redfield.name && (
              <p className="activeRed">This field is required</p>
            )}
          </label>
          <input
            type="text"
            name="name"
            onChange={handlechange}
            value={formData.name}
            className={redfield.name ? "activeRedInput" : ""}
          />
        </section>
        <section>
          <label htmlFor="">
            <p>Email Address</p>
            {redfield.email && (
              <p className="activeRed">This field is required</p>
            )}
          </label>
          <input
            type="text"
            name="email"
            onChange={handlechange}
            value={formData.email}
            className={redfield.email ? "activeRedInput" : ""}
          />
        </section>
        <section>
          <label htmlFor="">
            <p>Phone Number</p>
            {redfield.phone && (
              <p className="activeRed">This field is required</p>
            )}
          </label>
          <input
            type="number"
            name="phone"
            onChange={handlechange}
            value={formData.phone}
            className={redfield.phone ? "activeRedInput" : ""}
          />
        </section>
      </div>
    </div>
  );
};

export default PersonalInfo;
