import './App.css';
import Home from './pages/Home';
import Personajes from './pages/Personajes';
import Planetas from './pages/Planetas';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/personajes' element={<Personajes/>}></Route>
      <Route path='/planetas' element={<Planetas/>}></Route>
    </Routes>
  );
}

export default App;
