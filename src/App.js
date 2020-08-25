import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <React.StrictMode>
      <div>This is functional</div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("app"));
