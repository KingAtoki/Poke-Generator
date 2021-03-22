import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addDefaultPokemon } from '../../redux/pokemon.actions'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    flexDirection: 'column',
    marginTop: '60px',
  },
  gridList: {
    width: '100%',
    margin: '2px 0'
  },
}));

const Collection = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const { pokemon } = useSelector(state => state.pokemon)

  useEffect(() => {
    dispatch(addDefaultPokemon())
  }, [dispatch])

  const renderCollection = () => (
    <GridList cellHeight={200} className={classes.gridList} cols={3}>
      {pokemon.map((poke) => (
        <GridListTile key={poke.name}>
          <img src={poke.sprites.front_default} alt='pokemon default image'/>
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



  return (
    <div className={classes.root}>
      {renderCollection()}
    </div>
  );
}

export default Collection
