export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const CREATE_SINGLE_POKEMON = "CREATE_SINGLE_POKEMON";

import * as APIUtil from '../util/api_util';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => dispatch => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const receiveSinglePokemon = pokemonDetail => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemonDetail
});

export const requestSinglePokemon = (id) => dispatch => {
  return APIUtil.fetchSinglePokemon(id)
    .then(pokemonDetail => dispatch(receiveSinglePokemon(pokemonDetail)));
};

export const createPokemon = pokemon => ({
  type: CREATE_SINGLE_POKEMON,
  pokemon
});

export const requestCreatePokemon = pokemon => dispatch => {
  return APIUtil.createPokemon(pokemon)
    .then(newPokemon => dispatch(createPokemon(newPokemon)));
};
