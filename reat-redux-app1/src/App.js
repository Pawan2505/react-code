import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./action/index";

function App() {
  const myState = useSelector((state) => state.inc_dec);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increase());
  };

  const handleDecrement = () => {
    dispatch(decrease());
  };

  return (
    <div className="App">
      <h1 className="my-5">Welcome to My Redux App</h1>
      <input type="text" className="my-2 px-3" value={myState} />
      <br />
      <div className="my-3">
        <button className="btn btn-success" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn btn-danger mx-2" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
