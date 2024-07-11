import React, { useRef } from "react";

function RefsFunctionIntro() {
  let inputRef = useRef();
  function controlInput() {
    inputRef.current.value = "abc";
    inputRef.current.style.backgroundColor = "lightblue";
    inputRef.current.style.display = "none";
    // inputRef.current.focus();
  }
  return (
    <div className="App">
      <h1>useRef in React </h1>
      <input type="text" ref={inputRef} />
      <button onClick={controlInput}>Handle Input</button>
    </div>
  );
}
export default RefsFunctionIntro;
