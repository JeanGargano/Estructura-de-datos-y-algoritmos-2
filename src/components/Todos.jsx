import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosCollectionRef = collection(db, "todos");

    const unsubscribe = onSnapshot(todosCollectionRef, (snapshot) => {
      const tasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(tasks);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li> 
          ))}
        </ul>
      ) : (
        <p>No hay tareas disponibles.</p>
      )}
    </div>
  );
};
