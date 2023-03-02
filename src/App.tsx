import { Route, Routes } from 'react-router-dom';
import './App.css';
import PokemonListPage from './page/PokemonListPage';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<PokemonListPage/>} />
    </Routes>
  </>
}

export default App;
