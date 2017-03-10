import { values } from 'lodash';

export const selectAllPokemon = (pokemon) => {
  return values(pokemon);
};

export const selectPokemonItem = (state, itemId) => {

  let result = null;
  if(state.pokemonDetail.items.length !== 0) {
    state.pokemonDetail.items.forEach((item) => {
      if (item.id === parseInt(itemId)){
        result = item;
      }
    });
  }
  // debugger;
  return result;

};
