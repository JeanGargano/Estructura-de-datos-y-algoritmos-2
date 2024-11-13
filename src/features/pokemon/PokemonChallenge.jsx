import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from './pokemon';

export const PokemonChallenge = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.pokemon);

  const handleFetchPokemon = () => {
    dispatch(fetchPokemon(pokemonId));
  };

  return (
    <div>
      <h1>Pokemon Challenge</h1>
      <input
        type="number"
        value={pokemonId}
        onChange={(e) => setPokemonId(e.target.value)}
      />
      <button onClick={handleFetchPokemon}>Fetch Pokemon</button>
      
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h3>{data.name}</h3>
          <img src={data.sprites.front_default} alt={data.name} />
        </div>
      )}
    </div>
  );
};

export default PokemonChallenge;
