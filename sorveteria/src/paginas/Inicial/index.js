import React from 'react';
import AppBar from '../../componentes/AppBar';
import Banner from '../../componentes/Banner';

export default function Inicial({ conteudo }) {

  const { title, banner } = conteudo;

  return (
    <>
      <AppBar />
      <Banner
        title={title}
        banner={banner} />

      <div>

      </div>
    </>
  );
}