// src/features/todo/TodoApp.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { addTodo } from './todoSlice';

export const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleNewTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
