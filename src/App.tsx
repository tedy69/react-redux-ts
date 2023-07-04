import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Add from "./components/Add";
import List from "./components/List";

function App() {
  return (
    <div className="bg-dark-700">
      <Add />
      <List />
    </div>
  );
}

export default App;
