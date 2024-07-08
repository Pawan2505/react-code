import React from "react";

function PassingArguments() {
  const handleClick = (id) => {
    alert(`Button ${id} clicked!`);
  };

  return <button onClick={() => handleClick(11)}>Click me</button>;
}

export default PassingArguments;
