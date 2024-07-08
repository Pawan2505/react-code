import React, { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}

export default ConditionalRendering;
