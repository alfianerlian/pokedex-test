import { Route, Routes } from 'react-router-dom';
import './App.css';
import PokemonDetailsPage from './page/PokemonDetailsPage';
import PokemonListPage from './page/PokemonListPage';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<PokemonListPage/>} />
      <Route path='/:pokemonName' element={<PokemonDetailsPage/>} />
    </Routes>
  </>
}

export default App;
