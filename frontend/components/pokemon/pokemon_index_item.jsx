import React from 'react';
import { Link } from 'react-router';

class PokemonListItem extends React.Component{
  render() {
    const { pokemon } = this.props;

    return (
      <li className="poke-list-item">
        <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
        <img src={pokemon.image_url} />
      </li>
    );
  }
}

export default PokemonListItem;
