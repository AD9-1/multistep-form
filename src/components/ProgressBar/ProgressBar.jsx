import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ step}) => {
  return (
    <div className="progressbar">
      <section className="progressbar_container">
        <div className="progressbar_container_div">
          <article className={`unfill ${step === 1 ? "fill" : ""}`}>1</article>
          <article className="steps">
            <p className="steps_number">step 1</p>
            <p className="capital">YOUR INFO</p>
          </article>
        </div>
        <div className="progressbar_container_div">
          <article className={`unfill ${step === 2 ? "fill" : ""}`}>2</article>
          <article className="steps">
            <p className="steps_number">step 2</p>
            <p className="capital"> SELECT PLAN</p>
          </article>
        </div>
        <div className="progressbar_container_div">
          <article className={`unfill ${step === 3 ? "fill" : ""}`}>3</article>
          <article className="steps">
            <p className="steps_number">step 3</p>
            <p className="capital">ADD-ONS</p>
          </article>
        </div>
        <div className="progressbar_container_div">
          <article
            className={`unfill ${step === 4 || step === 5 ? "fill" : ""}`}
          >
            4
          </article>
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
