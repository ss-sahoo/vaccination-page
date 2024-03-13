import "./App.css";

import Check from "./components/check-section/check";
import Hero from "./components/hero-section/hero";
import Location from "./components/location-section/location";
import React from "react";

const App = () => {
  return (
    <div className="container">
      <Hero />
      <Location />
      <Check />
    </div>
  );
};

export default App;
