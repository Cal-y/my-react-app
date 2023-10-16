import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';


function NavBar({ pokemonList, setThePokemon }) {
  return(
    <div>
      {pokemonList.map((pokemon, i) => (
        <button key={i} onClick={() => setThePokemon(i)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
