import React from "react";
export default function Temperature() {
  return (
    <div class="current-temperature">
      <span class="current-temperature-icon">☀️</span>
      <br />
      <span class="current-temperature-value" id="current-temperature">
        24
      </span>
      <span class="current-temperature-unit">
        °C | <a href="/">°F </a>
      </span>
    </div>
  );
}
