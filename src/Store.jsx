import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './features/pokemon/pokemonApi';
import todoReducer from './features/todo/todoSlice'; // Asegúrate de importar el reducer de los todos

const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer, // Reducer de la API de Pokémon
    todos: todoReducer, // Reducer de los todos
  },
  // Agregar el middleware para manejar la caché, la invalidación, etc.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware), // Añadir el middleware de la API
});

export default store;
