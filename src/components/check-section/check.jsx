import "./check.css";

import React from "react";

const Check = () => {
  return (
    <div className="check-container">
      <div className="check-top">
        <p>Check your COVID-19 result on our Database</p>
      </div>
      <div className="check-bottom">
        <form className="check-form">
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="text" id="nik" name="nik" placeholder="NIK Number:" />
          <button type="submit" className="check-btn">
            Check
          </button>
        </form>
      </div>
    </div>
  );
};

export default Check;
