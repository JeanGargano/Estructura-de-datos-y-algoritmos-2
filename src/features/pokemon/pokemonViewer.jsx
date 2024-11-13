// src/features/pokemon/PokemonViewer.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from './pokemon';

const PokemonViewer = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.pokemon);

  const handleFetchPokemon = () => {
    dispatch(fetchPokemon(pokemonId));
  };

  return (
    <div>
      <h1>Pokémon Viewer</h1>
      <input
        type="number"
        value={pokemonId}
        onChange={(e) => setPokemonId(e.target.value)}
        min="1"
        className="form-control mb-2"
        placeholder="Enter Pokémon ID"
      />
      <button onClick={handleFetchPokemon} className="btn btn-primary mb-3">
        Fetch Pokémon
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <img src={data.sprites.front_default} alt={data.name} />
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonViewer;
