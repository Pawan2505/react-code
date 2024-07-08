import React, { useState } from "react";

function TernaryOperators() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}</div>
  );
}

export default TernaryOperators;
