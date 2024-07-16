import React, { useState } from "react";

// Define regex patterns
const namePattern = /^.{3,50}$/;
const emailPattern = /\S+@\S+\.\S+/;

// Validation utility functions
const validateName = (name) => {
  if (!name) return "Name is required";
  if (!namePattern.test(name))
    return "Name must contain between 3 and 50 characters";
  return "";
};

const validateEmail = (email) => {
  if (!email) return "Email is required";
  if (!emailPattern.test(email))
    return "Email format must be as example@mail.com";
  return "";
};

const validateGender = (gender) => {
  if (!gender) return "Gender is required";
  return "";
};

function MyForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const [validations, setValidations] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const validateAll = () => {
    const { name, email, gender } = values;
    const validations = {
      name: validateName(name),
      email: validateEmail(email),
      gender: validateGender(gender),
    };
    setValidations(validations);

    
  };

  const validateOne = (e) => {
    const { name, value } = e.target;
    let validationMessage = "";

    switch (name) {
      case "name":
        validationMessage = validateName(value);
        break;
      case "email":
        validationMessage = validateEmail(value);
        break;
      case "gender":
        validationMessage = validateGender(value);
        break;
      default:
        break;
    }

    setValidations((prevValidations) => ({
      ...prevValidations,
      [name]: validationMessage,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateAll();

    if (isValid) {
      alert(JSON.stringify(values));
    }
  };

  const { name, email, gender } = values;
  const { name: nameVal, email: emailVal, gender: genderVal } = validations;

  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={validateOne}
          />
          {nameVal && <div className="error">{nameVal}</div>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={validateOne}
          />
          {emailVal && <div className="error">{emailVal}</div>}
        </div>

        <div>
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="F"
              onChange={handleChange}
              onBlur={validateOne}
              checked={gender === "F"}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="M"
              onChange={handleChange}
              onBlur={validateOne}
              checked={gender === "M"}
            />
            <label htmlFor="male">Male</label>
          </div>
          {genderVal && <div className="error">{genderVal}</div>}
        </div>

        <button type="submit">Send</button>
      </form>

      <div>
        <h2>Values of the Form</h2>
        <p>{JSON.stringify(values)}</p>
      </div>
    </div>
  );
}

export default MyForm;
