import React, { useState } from "react";

function CRMyform() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {isSubmitted ? (
        <p>Form submitted with value: {inputValue}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Input:
            <input type="text" value={inputValue} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default CRMyform;
