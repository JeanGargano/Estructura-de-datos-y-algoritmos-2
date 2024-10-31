import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: "Hacer Challenges",
        done: false
    }
];

export const useTodo = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState);

    const addTodo = (todo) => dispatch({ type: "TODO ADD TODO", payload: todo });

    const deleteTodo = (id) => dispatch({ type: "TODO DELETE TODO", payload: id });

    const toggleTodo = (id) => dispatch({ type: "TODO TOGGLE TODO", payload: id });

    const countTodos = todos.length;
    const countPendingTodos = todos.filter(todo => !todo.done).length;

    return {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        countTodos,
        countPendingTodos
    };
};
