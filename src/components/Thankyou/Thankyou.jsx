import React from "react";
import thankyou from "../../assets/images/icon-thank-you.svg";
import "./Thankyou.scss";
const Thankyou = () => {
  return (
    <div className="thankyou">
      <section className="thankyou__section">
        <img src={thankyou} alt="" />
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription!We hope you have fun of using
          our platform.If you ever need support please feel free to contact
          lorem@gmail.com{" "}
        </p>
      </section>
    </div>
  );
};

export default Thankyou;
