import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import { HomePage, TodosPage } from "./pages";

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path={"/todo/:todoId"} component={TodosPage} />
    </>
  );
}

export default App;
