import React from "react";
export default function Humidity(params) {
  const { humidity, wind } = params;

  return (
    <ul class="current-details">
      {humidity !== undefined && (
        <li>
          Humidity: <strong>{humidity}%</strong>
        </li>
      )}
      {wind !== undefined && (
        <li>
          Wind: <strong>{wind}km/h</strong>
        </li>
      )}
    </ul>
  );
}
