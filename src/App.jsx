import './App.css'
import PokemonCard from './components/PokemonCard';
import React, { useState } from 'react';
import NavBar from './components/NavBar';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1)}

  const handleClickNext = () => {
      setPokemonIndex(pokemonIndex + 1)}

  const pokemon = pokemonList[pokemonIndex];

  return (
    <>
    <div>
      <NavBar
      onPreviousClick={handleClickPrevious}
      onNextClick={handleClickNext}
      isPreviousDisabled={pokemonIndex === 0}
      isNextDisabled={pokemonIndex === pokemonList.length - 1}
      />
      <PokemonCard pokemon={pokemon}/>
    </div>
    </>
  );
}



export default App;
