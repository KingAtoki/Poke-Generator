import { Button, ButtonGroup } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { addRandomPokemon } from '../../redux/pokemon.actions'

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.black
  },
}));

const RandomButton = () => {
  const dispatch = useDispatch()
  const classes = useStyles();

  const getRandomPokemon = () => {
    dispatch(addRandomPokemon())
  }

  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button
        className={classes.button}
        variant="contained"
        size="large"
        onClick={getRandomPokemon}
      >
        Get a Random Pokemon
      </Button>
    </ButtonGroup>
  )
}

export default RandomButton