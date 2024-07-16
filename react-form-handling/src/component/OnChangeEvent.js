import React, {useState} from "react";

function OnChangeEvent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form>
      <label>
        Input:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
    </form>
  );
}

export default OnChangeEvent;
