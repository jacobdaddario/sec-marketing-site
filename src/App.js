import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <React.StrictMode>
      <div className="max-w-4xl bg-gray-900">This is functional</div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("app"));
