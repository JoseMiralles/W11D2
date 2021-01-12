import React from 'react';
import { Link } from "react-router-dom";

import PokemonIndexItem from "./pokemon_index_item";

class PokemonIndex extends React.Component{
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.requestAllPokemon().then(() => {
      this.props.requestOnePokemon(20); // For testing purposes.
    })

  }
  
  // componentDidUpdate(){
  //   if (this.props.)
  // }
  render(){

    const pokemonItems = this.props.pokemon.map(poke => {
      return (
        <Link key={poke.id} to={`/pokemon/${poke.id}`}>
          <PokemonIndexItem pokemon={poke} />
        </Link>
      )
    });

    return (
    <section className="pokedex">
      <ul>
        {pokemonItems}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;