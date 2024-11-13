// src/Store.jsx
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './features/pokemon/pokemon';
import todoSlice from './features/todo/todoSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    todos: todoSlice,
  },
});

// Asegúrate de exportarlo correctamente
export default store;
