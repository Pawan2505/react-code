import React, { useState } from 'react';
import './MyForm.css';
function StyleMyForm() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <form className="form-container">
        <label className="form-label">
          Input:
          <input type="text" value={inputValue} onChange={handleChange} className="form-input" />
        </label>
      </form>
    );
}

export default StyleMyForm
