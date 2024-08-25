import React from "react";
import "./ProgressBar.scss";
import sidebar from "../../assets/images/bg-sidebar-desktop.svg";
import mobSidebar from "../../assets/images/bg-sidebar-mobile.svg";
const ProgressBar = ({ step, setStep }) => {
  return (
    <div className="progressbar">
      <section className="progressbar_container">
        <div className="progressbar_container_div">
          <article className="unfill">1</article>
          <article  className="steps">
            <p className="steps_number">step 1</p>
            <p className="capital">YOUR INFO</p>
          </article>
        </div>
        <div className="progressbar_container_div">
          <article className="unfill">2</article>
          <article  className="steps">
            <p className="steps_number">step 2</p>
            <p className="capital"> SELECT PLAN</p>
          </article>
        </div>
        <div className="progressbar_container_div">
          <article className="unfill">3</article>
          <article  className="steps">
            <p className="steps_number">step 3</p>
            <p className="capital">ADD-ONS</p>
          </article>
        </div>
        <div className="progressbar_container_div">
          <article className="unfill">4</article>
          <article className="steps">
            <p className="steps_number">step 4</p>
            <p className="capital"> SUMMARY</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ProgressBar;
