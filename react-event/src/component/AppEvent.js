import React from "react";

function AppEvent() {
  const handleClick = (event) => {
    console.log(event);
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default AppEvent;
