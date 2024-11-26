import React from "react";
export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Form sumbitted");
  }
  return (
    <form id="search-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        placeholder="Enter a city.."
        required
        class="search-input"
        id="search-input"
      />
      <input type="submit" value="Search" class="search-button" />
    </form>
  );
}
