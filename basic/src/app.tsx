import React from "react";
import ReactDOM from "react-dom";
import Simpsons from "./simpsons";
import Search from "./search";
import WithQCProvider from "./withQCProvider";

const App = () => {
  const [name, updateName] = React.useState("");

  return (
    <WithQCProvider>
      <Search name={name} onType={updateName} />
      <br />
      <br />
      <Simpsons name={name} />
    </WithQCProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
