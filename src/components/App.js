import React, { useState } from "react";
import Resume from "./Resume";
import { Context } from "./Context.js";
import "../styles/App.css";

function App() {
  const [context, setContext] = useState(0);
  return (
    <Context.Provider value={[context, setContext]}>
      <Resume />
    </Context.Provider>
  );
}

export default App;
