import React from "react";
import ReactDOM from "react-dom";
import Simpsons from "./simpsons";
import WithQCProvider from "./withQCProvider";

const App = () => {
  return (
    <WithQCProvider>
      {/* @ts-ignore */}
      <Simpsons />
    </WithQCProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
