import React, { useState } from 'react';
import { useGetPokemonQuery } from './pokemonApi';

function PokemonViewer() {
  const [id, setId] = useState(''); 
  const { data, error, isLoading } = useGetPokemonQuery(id, {
    skip: !id, 
  });

 
  const handleInputChange = (e) => {
    setId(e.target.value);
  };

  
  if (!id || isNaN(id) || id <= 0) {
    return (
      <div>
        <input
          type="number"
          placeholder="Ingresa un ID de Pokémon"
          value={id}
          onChange={handleInputChange}
        />
        <div>Error: ID de Pokémon no válido. Debe ser un número positivo.</div>
      </div>
    );
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <input
        type="number"
        placeholder="Ingresa un ID de Pokémon"
        value={id}
        onChange={handleInputChange}
      />
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Altura: {data.height} decímetros</p>
      <p>Peso: {data.weight} hectogramos</p>
    </div>
  );
}

export default PokemonViewer;
