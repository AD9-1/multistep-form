import React from "react";
import "./FinishUp.scss";
const FinishUp = () => {
  return (
    <div className="finishup">
      <h3>Finishing Up</h3>
      <p className="description">Double-check everything before confirming</p>
      <div className="finishup__block">
        <article className="finishup__block__article">
          <p className="custom">Arcade(Monthly)</p>
          <p className="custom">$90/yr</p>
        </article>
        <hr className="horizontal--line" />
        <article className="finishup__block__article">
          <p>Online Service</p>
          <p>+$10/yr</p>
        </article>
        <article className="finishup__block__article">
          <p>larger storage</p>
          <p>+$20/yr</p>
        </article>
      </div>
      <article className="finishup__article">
        <p>Total (per year)</p>
        <p>$120/yr</p>
      </article>
    </div>
  );
};

export default FinishUp;
