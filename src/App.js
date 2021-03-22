import Header from './components/Header'
import Collection from './components/PokeCollection'
import RandomButton from './components/RandomButton'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Collection />
      <RandomButton />
    </div>
  );
}

export default App;
