import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header'
import Collection from './components/PokeCollection'
import RandomButton from './components/RandomButton'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    backgroundColor: theme.palette.primary.light,
  },
}));
const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <Collection />
      <RandomButton />
    </div>
  );
}

export default App;
