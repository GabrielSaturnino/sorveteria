import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicial from '../../paginas/Inicial';
import Sabores from '../../paginas/Sabores';
import Sobre from '../../paginas/Sobre';

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Inicial />}></Route>
      <Route path='/sabores' element={<Sabores />} />
      <Route path='/sobre' element={<Sobre />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;