import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const emailRegix =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleName = (e) => {
    console.log(e);
    let name = e.target.value;
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(name);
  };

  const handleEmail = (e) => {
    let email = e.target.value;
    if (!email.match(emailRegix)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use state values directly
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!email.match(emailRegix)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!nameError < 3 && email.match(emailRegix)) {
      alert("Form has been Submitted..");
    }
  };

  return (
    <div>
      <h1>Form Validation Demo</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name : </label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <br />
        {nameError ? (
          <span style={{ color: "red" }}>
            Name Length must be greater than 2 characters
          </span>
        ) : (
          ""
        )}
        <br />
        <br />
        <label htmlFor="">Enter Email : </label>
        <input type="text" name="email" value={email} onChange={handleEmail} />
        <br />
        {emailError ? <span style={{ color: "red" }}>Invalid Email</span> : ""}

        <br />
        <br />
        <input type="submit" value="submit" />   
      </form>
    </div>
  );
}

export default MyForm;
