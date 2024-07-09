import React from "react";

function Bind() {
  const handleClick = (d) => {
    alert(`Button ${d} clicked!`);
  };

  return <button onClick={handleClick.bind(null, 1)}>Click me</button>;
}

export default Bind;
