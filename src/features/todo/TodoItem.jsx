// src/features/todo/TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from './todoSlice';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo.description}</span>
      <button className="btn btn-danger" onClick={handleDelete}>
        Borrar
      </button>
    </li>
  );
};
