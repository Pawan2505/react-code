import React, { useState, useEffect } from "react";

function Form01() {
  const [users, setUsers] = useState(
    JSON.parse(sessionStorage.getItem("users")) || []
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  useEffect(() => {
    sessionStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = () => {
    if (!name || !email) {
      alert("Name and Email are required.");
      return;
    }
    if (!email.match(validRegex)) {
      alert("Invalid email address!");
      return;
    }

    let id = 1;
    while (users.some((user) => user.id === id)) {
      id++;
    }
    const newUser = { id, name, email };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  const updateUser = () => {
    if (!updateEmail.match(validRegex)) {
      alert("Invalid email address!");
      return;
    }

    setUsers(
      users.map((user) =>
        user.id === currentUserId
          ? { ...user, name: updateName, email: updateEmail }
          : user
      )
    );
    hideUpdateForm();
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    if (users.length <= 1) {
      hideUpdateForm();
    }
  };

  const showUpdateForm = (userId) => {
    const user = users.find((user) => user.id === userId);
    if (user) {
      setUpdateName(user.name);
      setUpdateEmail(user.email);
      setCurrentUserId(user.id);
      setIsUpdateFormVisible(true);
    }
  };

  const hideUpdateForm = () => {
    setUpdateName("");
    setUpdateEmail("");
    setCurrentUserId(null);
    setIsUpdateFormVisible(false);
  };

  return (
    <div id="container">
      <h1>sessionStorage CRUD Operations</h1>
      <div id="input-container">
        <input
          type="text"
          id="name-input"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          id="email-input"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button id="add-btn" onClick={addUser}>
          Add
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => showUpdateForm(user.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isUpdateFormVisible && (
        <div id="update-container">
          <input
            type="text"
            id="update-name-input"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
          <input
            type="text"
            id="update-email-input"
            value={updateEmail}
            onChange={(e) => setUpdateEmail(e.target.value)}
          />
          <button id="update-btn" onClick={updateUser}>
            Update
          </button>
          <button id="cancel-btn" onClick={hideUpdateForm}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Form01;
