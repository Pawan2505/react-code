import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { counterContext } from "./context/Context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        <Navbar />
      </counterContext.Provider>
    </>
  );
}

export default App;
