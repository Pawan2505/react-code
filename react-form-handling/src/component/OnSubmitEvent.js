import React, { useState } from "react";

function OnSubmitEvent() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default OnSubmitEvent;
