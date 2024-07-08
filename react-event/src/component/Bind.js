import React from "react";

function Bind() {
  const handleClick = (id) => {
    alert(`Button ${id} clicked!`);
  };

  return <button onClick={handleClick.bind(null, 1)}>Click me</button>;
}

export default Bind;
