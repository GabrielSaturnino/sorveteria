import React from 'react';
import AppBar from '../../componentes/AppBar';
import Banner from '../../componentes/Banner';
import './style.css';

export default function Inicial({ conteudo }) {

  const { title, banner } = conteudo;

  return (
    <>
      <Banner
        title={title}
        banner={banner} />

      <main>
        <div className="row-container">
          <img src="./assets/banner-sabores.jpg" alt="sabores de sorvete" />
          <section className='inicial-conteudo'>
            <h1>Nossos Sabores</h1>
            <h3>Novos e Deliciosos!</h3>
            <p>Sorvete bom é aquele feito com os melhores ingredientes! <br />Aqui na gelateria todos os nossos produtos são naturais, à <br /> base de frutas e sem nenhum conservante! Também temoso <br />
              opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
          </section>
        </div>
        <div className="row-container reverse">
          <img src="./assets/eventos-image.jpg" alt="eventos" />
          <section className='inicial-conteudo'>
            <h1>Nossos Eventos</h1>
            <h3>Delicias com sorvete!</h3>
            <p>Mais do que uma sorveteria, uma extensão da sua casa! <br />
              Estamos aqui prontinhos para te atender e  oferecer os <br />
              melhores eventos com os melhores sorvete da sua vida! <br />
              Venha nos conhecer e passar um tempo aqui com a gente.</p>
          </section>
        </div>
        <div className="row-container">
          <img src="./assets/sobre-image.jpg" alt="sobre" />
          <section className='inicial-conteudo'>
            <h1>Sobre nós</h1>
            <h3>Alegria em cada casquinha</h3>
            <p>Venha tomar o moelhor sorvete da região aqui com a gente!
              Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. <br />Venha nos fazer uma visita e aproveite o molhor atendimento e o melhor sorvete da cidade.</p>
          </section>
        </div>
      </main>
    </>
  );
}