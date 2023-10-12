import React from 'react';

const PokemonCard = () => {
  const pokemonList = [
    {
      name: "Bulbasaur", 
      imgSrc: 
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name:"Mew",
    },
  ];

  const pokemon = pokemonList[0];

  return (
    <figure>
      {pokemon.imgSrc ? (
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};


export default PokemonCard;