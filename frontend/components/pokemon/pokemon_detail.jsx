import React from 'react';
import ItemDetail from './item_detail';
import ItemDetailContainer from './item_detail_container';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.id);
  }

  componentWillReceiveProps(newProps){
    if(this.props.params.id !== newProps.params.id){
      this.props.requestSinglePokemon(newProps.params.id);
    }
  }

  render() {
    let moves;
    let items;

    if(this.props.pokemonDetail.moves){
      moves = this.props.pokemonDetail.moves.map(
        (move, idx) => <li key={move+idx}>{move}</li>
      );
    } else {
      moves = "";
    }

    if(this.props.pokemonDetail.items){
      // debugger;
      items = this.props.pokemonDetail.items.map(
        (item, idx) => (
          <div key={idx}>
            <img src={item.image_url}/>
            <Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`}
              >{item.name}</Link>
          </div>
        )
      );
    }
    const pokemonDetail = this.props.pokemonDetail;

    return (
      <section className="pokeDetail">
          <img src={pokemonDetail.image_url} />
          <section>
            <p>name: {pokemonDetail.name}</p>
            <p>attack: {pokemonDetail.attack}</p>
            <p>defense: {pokemonDetail.defense}</p>
          </section>
          <section>
            <ul>
              {moves}
            </ul>
          </section>
          <section>
            <ul>
              {this.props.children}
              {items}
            </ul>
          </section>
      </section>
    );
  }
}

export default PokemonDetail;
