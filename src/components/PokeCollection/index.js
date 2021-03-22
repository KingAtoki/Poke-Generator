import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addDefaultPokemon } from '../../redux/pokemon.actions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '60px',
    backgroundColor: theme.palette.primary.light,
    
  },
  gridList: {
    width: '40%',
  },
  tile: {
    margin: '25px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    backgroundImage: 'linear-gradient(315deg, #f5d020 0%, #f53803 74%)'
  }
}));

const Collection = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const { pokemon, error } = useSelector(state => state.pokemon)

  useEffect(() => {
    dispatch(addDefaultPokemon())
  }, [dispatch])

  const renderCollection = () => (
    <GridList cellHeight={300} className={classes.gridList} cols={1}>
      {pokemon.map((poke) => (
        <GridListTile key={poke.name} className={classes.tile}>
          <img src={poke.sprites.front_default} alt={poke.name}/>
          <GridListTileBar
            title={poke.name}
            subtitle={
              <>
                <span>Base XP: {poke.base_experience}</span>
                <br />
                <span>Height: {poke.height}, Weight: {poke.weight}</span>
              </>
            }
            />
          </GridListTile>
      ))}
    </GridList>
  )

  const renderError = () => (
    <>
      <p>Here's the error message: {error}</p>
      <p>Please try to press the button below again unless you've pressed it 5000 in one hour.</p>
    </>
  )

  return (
    <div className={classes.root}>
      {!error ? renderCollection() : renderError()}
    </div>
  );
}

export default Collection
