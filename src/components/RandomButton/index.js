import { Button, ButtonGroup } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { addRandomPokemon } from '../../redux/pokemon.actions'

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.light,
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
        className={ classes.button}
        variant="contained"
        size="large"
        onClick={getRandomPokemon}
      >
        Get a random pokemon
      </Button>
    </ButtonGroup>
  )
}

export default RandomButton