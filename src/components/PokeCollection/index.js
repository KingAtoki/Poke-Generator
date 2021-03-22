import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { addDefaultPokemon } from '../../redux/pokemon.actions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexDirection: 'column',
    marginTop: '60px',
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
    pokemon.map(poke => {
      return (
        <p>{ poke.name }</p>
      )
    })
  )



  return (
    <div className={classes.root}>
      {renderCollection()}
    </div>
  );
}

export default Collection
