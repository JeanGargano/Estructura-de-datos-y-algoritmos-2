import React, { useState } from "react";
import { db } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore";

export const TodosForm = () => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    try {
      const todosCollectionRef = collection(db, "todos");

      await addDoc(todosCollectionRef, {
        task: task,
        createdAt: new Date(),
      });

      setTask("");
    } catch (error) {
      console.error("Error al agregar la tarea: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Añadir tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};
