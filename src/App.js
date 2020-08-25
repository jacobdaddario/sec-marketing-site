import React from "react";
import { render } from "react-dom";
import Hero from "./Hero";

const App = () => {
  return (
    <React.StrictMode>
      <Hero />
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("app"));
