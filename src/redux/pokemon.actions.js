export const GET_POKEMON = 'GET_POKEMON'
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS'
export const GET_POKEMON_FAIL = 'GET_POKEMON_FAIL'
export const GET_RANDOM_POKEMON = 'GET_RANDOM_POKEMON'
export const GET_RANDOM_POKEMON_SUCCESS = 'GET_RANDOM_POKEMON_SUCCESS'
export const GET_RANDOM_POKEMON_FAIL = 'GET_RANDOM_POKEMON_FAIL'


export const addDefaultPokemon = () => async dispatch => {
  try {
    dispatch({ type: GET_POKEMON })
    const pokemon = await Promise.all([
      fetch('https://pokeapi.co/api/v2/pokemon/7/'),
      fetch('https://pokeapi.co/api/v2/pokemon/4/'),
      fetch('https://pokeapi.co/api/v2/pokemon/1/'),
    ])
    const pokeData = await Promise.all(pokemon.map(async p => await p.json()))
    dispatch({ type: GET_POKEMON_SUCCESS, payload: { pokemon: pokeData } })
  } catch (err) {
    dispatch({ type: GET_POKEMON_FAIL, payload: { error: err.message } })
    throw new Error(err)
  }
}

const randomPokemonNumber = () => {
  const randomize = () => Math.ceil(Math.random() * 100) // random num 1 - 100
  const defaults = [1, 4, 7] // default pokemon
  let num = randomize() // get random num
  while (defaults.includes(num)) { // make sure num is not one of the defaults
    num = randomize() // if it is, pull another number
  }
  return num
}
export const addRandomPokemon = () => async dispatch => {
  try {
    dispatch({ type: GET_RANDOM_POKEMON })
    const randomPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber()}/`)
    const randomPokemonData = await randomPokemon.json()
    dispatch({ type: GET_RANDOM_POKEMON_SUCCESS, payload: { randomPokemon: randomPokemonData } })

  } catch (err) {
    dispatch({ type: GET_RANDOM_POKEMON_FAIL, payload: { error: err.message } })
    throw new Error(err)
  }
}