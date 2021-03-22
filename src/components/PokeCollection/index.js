import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { addDefaultPokemon } from '../../redux/pokemon.actions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexDirection: 'column',
    marginTop: '60px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  gridList: {
    width: '100%',
    height: 175,
    margin: '2px 0',
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
