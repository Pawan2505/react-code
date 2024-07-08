import React from "react";

function ApphandleClick() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ApphandleClick;
