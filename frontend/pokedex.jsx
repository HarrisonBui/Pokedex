import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {receiveAllPokemon, requestAllPokemon, requestSinglePokemon} from './actions/pokemon_actions';
import {fetchSinglePokemon} from './util/api_util';
import {selectAllPokemon} from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
