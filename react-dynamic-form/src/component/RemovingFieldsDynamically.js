import React, { useState } from "react";

function RemovingFieldsDynamically() {
  const [fields, setFields] = useState([{ value: "" }]);

  const handleAddField = () => {
    setFields([...fields, { value: "" }]);
  };

  const handleRemoveField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleChange = (index, event) => {
    const newFields = fields.map((field, i) => {
      if (i === index) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setFields(newFields);
  };

  return (
    <form>
      {fields.map((field, index) => (
        <div key={index}>
          <label>
            Field {index + 1}:
            <input
              type="text"
              value={field.value}
              onChange={(event) => handleChange(index, event)}
            />
          </label>
          <button type="button" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        Add Field
      </button>
    </form>
  );
}

export default RemovingFieldsDynamically;