import React, { useMemo } from 'react';

function PokemonDetails() {
 /* const { pokemonImage, pokemonName } = useMemo(() => {
    const selectedPokemon = datos.find(pokemon => pokemon.id === id);
    
    if (selectedPokemon) {
      const image = selectedPokemon.sprites.back_default;
      const name = selectedPokemon.name;
      return { pokemonImage: image, pokemonName: name };
    } else {
      console.log("No se encontró el Pokemon", id);
      return null ;
    }
  }, [id, datos]);*/

  return (
    <div>
      <h2>{pokemonName}</h2>
      <img src={pokemonImage} alt={pokemonName}></img> 
    </div>
  );
}

export default PokemonDetails;