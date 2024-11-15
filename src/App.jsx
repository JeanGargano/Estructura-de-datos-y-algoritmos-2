import React from "react";
import { Todos } from "./components/Todos";
import { TodosForm } from "./components/TodosForm";
import "./Styles.css"

function App() {
  return (
    <div>
      <TodosForm />
      <Todos />
    </div>
  );
}

export { App };
