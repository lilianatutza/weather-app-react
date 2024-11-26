import React, { useState } from "react";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  let [unit, setUnit] = useState("Metric");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Imperial");
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("Metric");
    setTemperature(props.temperature);
  }

  return (
    <p>
      "The weather in {props.city} is {temperature} ({unit}) {" "}
      <a href="/" onClick={showCelsius}>
        °C
      </a>{" "}
      |{" "}
      <a href="/" onClick={showFahrenheit}>
        °F
      </a>
    </p>
  );
}
