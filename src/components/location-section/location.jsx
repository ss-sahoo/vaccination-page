import "./location.css";

import CalendarIcon from "../../assets/calendar.svg";
import LocationIcon from "../../assets/map-pin.svg";
import React from "react";
import ShieldIcon from "../../assets/shield.svg";

const Location = () => {
  const data = [
    {
      icon: LocationIcon,
      title: "Location",
      text: "Ikeja Lagos, Nigeria",
    },
    {
      icon: CalendarIcon,
      title: "Date",
      text: "29 February, 2022",
    },
    {
      icon: ShieldIcon,
      title: "Vaccine Type",
      text: "Mordena",
    },
  ];
  return (
    <div className="location-container">
      <div className="location-background-box">
        <div className="location-main-box">
          <div className="location-content">
            {data.map((item, index) => (
              <div className="location-text-column" key={index}>
                <div className="location-icon-container">
                  <img src={item.icon} alt={item.icon} />
                </div>
                <div className="location-text">
                  <p className="title">{item.title}</p>
                  <p className="text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Location;
