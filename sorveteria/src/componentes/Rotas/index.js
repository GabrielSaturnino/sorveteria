import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicial from '../Inicial';
import Sabores from '../Sabores';
import Sobre from '../Sobre';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Inicial />}></Route>
        <Route path='sabores' element={<Sabores />}></Route>
        <Route path='sobre' element={<Sobre />}></Route>
      </Routes>
    </BrowserRouter>
  );
}