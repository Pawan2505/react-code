import React, { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([
    { task: "my first task", completed: false },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    let task = event.target.task.value;

    alert("new task: " + task);

    event.target.reset();
  }
  return (
    <div className="container my-5">
      <div
        className="mx-auto rounded border p-4 "
        style={{ width: "600px", backgroundColor: "#086184" }}
      >
        <h2 className="text-white text-center mb-5">My Todo List</h2>

        <form className="d-flex" onSubmit={handleSubmit}>
          <input type="search" placeholder="New Task" name="task" />
          <button className="btn btn-outline-light" type="submit">
            Add
          </button>
        </form>
        {todos.map((todo, index) => {
          return (
            <div
              key={index}
              className="rounded mt-4 p-2 d-flex"
              style={{
                backgroundColor: todo.completed ? "#87Fc68" : "lightgray",
              }}
            >
              <div className="me-auto">{todo.task}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoList;
