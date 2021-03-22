import { configureStore } from '@reduxjs/toolkit';
import pokeReducer from './pokemon.reducer'

export default configureStore({
  reducer: {
    pokemon: pokeReducer,
  },
});