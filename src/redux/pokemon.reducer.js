import {
  GET_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAIL,
  GET_RANDOM_POKEMON,
  GET_RANDOM_POKEMON_SUCCESS,
  GET_RANDOM_POKEMON_FAIL,
} from './pokemon.actions';

const INITIAL_STATE = {
  pokemon: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case GET_RANDOM_POKEMON:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload.pokemon,
        loading: false,
        error: '',
      };
    case GET_RANDOM_POKEMON_SUCCESS:
      const newPokemon = [...state.pokemon]
      newPokemon.splice(3, 1, action.payload.randomPokemon)
      return {
        ...state,
        pokemon: newPokemon,
        loading: false,
        error: '',
      };
    case GET_POKEMON_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case GET_RANDOM_POKEMON_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};