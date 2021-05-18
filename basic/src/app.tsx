import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Simpsons from "./simpsons";
import WithQCProvider from "./withQCProvider";

const queryClient = new QueryClient();

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
