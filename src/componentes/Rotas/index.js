import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicial from '../../paginas/Inicial';
import Sabores from '../../paginas/Sabores';
import Sobre from '../../paginas/Sobre';
import AppBar from '../AppBar';


const pagesContent = [
  { title: 'SORVETE ARTESANAL', banner: './assets/banner-home.png' },
  {},
  {}
];

const Rotas = () => (
  <BrowserRouter>
    <AppBar />
    <Routes>
      <Route exact path='/' element={<Inicial conteudo={pagesContent[0]} />}></Route>
      <Route path='/sabores' element={<Sabores />} />
      <Route path='/sobre' element={<Sobre />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;