import React, { useState } from "react";
export default function SearchEngine() {
  const [place, setPlace] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (place.length > 0) {
      alert(`Searching for ${place}`);
    } else {
      alert("enter a place first");
    }
  }
  function updatePlace(event) {
    setPlace(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updatePlace} />
      <input type="submit" value="Search" />
    </form>
  );
}
