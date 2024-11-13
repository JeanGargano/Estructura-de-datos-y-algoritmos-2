// src/App.js
import React, { useState } from 'react';
import PokemonViewer from './features/pokemon/pokemonViewer';
import TodoApp from './features/todo/TodoApp';
import "./index.css"

function App() {
  const [showTodoApp, setShowTodoApp] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center p-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl max-w-3xl w-full">
        <h1 className="text-4xl font-extrabold text-white mb-8 p-4 rounded-lg shadow-md">
          Parcial #3: Jean Alfred Gargano
        </h1>
        <hr className="border-t-2 border-white opacity-40 mb-8" />
        
        <div className="flex justify-center gap-6 mb-8">
          <button
            className="bg-blue-600 text-gray-900 text-lg px-8 py-3 rounded-full transition duration-300 transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => setShowTodoApp(false)}
          >
            Show Pokémon Viewer
          </button>
          <button
            className="bg-green-600 text-gray-900 text-lg px-8 py-3 rounded-full transition duration-300 transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
            onClick={() => setShowTodoApp(true)}
          >
            Show Todo App
          </button>
        </div>

        <hr className="border-t-2 border-white opacity-40 mb-8" />
        
        {showTodoApp ? <TodoApp /> : <PokemonViewer />}
      </div>
    </div>
  );
}

export default App;
