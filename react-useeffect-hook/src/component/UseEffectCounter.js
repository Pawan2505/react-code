import React, {useState, useEffect}from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);

//   const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating document title ");

    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      {/* <input type="text" value={name} onChange={(e) => setCount(count + 1)} /> */}

      <button onClick={() => setCount(count + 1)}>
        UseEffect - Click {count} times
      </button>
    </div>
  );
}

export default UseEffectCounter;
