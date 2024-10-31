import React from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodo } from "./useTodo";

export const TodoApp = () => {
    const { todos, addTodo, deleteTodo, toggleTodo, countTodos, countPendingTodos } = useTodo();

    return (
        <>
            <h1>TodoApp: {countTodos}, <small>Pendientes: {countPendingTodos}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} />
                </div>
                <div className="col-5">
                    <TodoAdd onNewTodo={addTodo} />
                </div>
            </div>
        </>
    );
};
