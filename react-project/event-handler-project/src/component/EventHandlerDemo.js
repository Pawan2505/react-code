import React, { useState, useRef } from "react";

function EventHandlerDemo() {
  const [inputValue, setInputValue] = useState("");
  const [hover, setHover] = useState(false);
  const inputRef = useRef(null);

  function handleClick() {
    alert("Button clicked!");
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      inputRef.current.style.color = "red";
    }
  }

  return (
    <div className="EventHandlerDemo">
      <h1>Event Handler Demo</h1>

      <div>
        <label>
          Enter text:
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
        </label>
      </div>

      <button onClick={handleClick}>Click Me</button>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: hover ? "lightgreen" : "lightcoral",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me!
      </div>
    </div>
  );
}

export default EventHandlerDemo;
