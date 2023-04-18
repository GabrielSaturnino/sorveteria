import React from 'react';
import AppBar from '../../componentes/AppBar';
import Banner from '../../componentes/Banner';
import './style.css';

export default function Inicial({ conteudo }) {

  const { title, banner } = conteudo;

  return (
    <>
      <AppBar />
      <Banner
        title={title}
        banner={banner} />

      <main>
        <div className="column-container">
          <div className="row-container">
            <img src="./assets/banner-sabores.jpg" alt="sabores de sorvete" />
            <div className='inicial-conteudo'>
              <h1>Nossos Sabores</h1>
              <h3>Novos e Deliciosos!</h3>
              <p>Sorvete bom é aquele feito com os melhores ingredientes! <br />Aqui na gelateria todos os nossos produtos são naturais, à <br /> base de frutas e sem nenhum conservante! Também temoso <br />
                opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
            </div>
          </div>

          <div className="row-container reverse">
            <img src="./assets/eventos-image.jpg" alt="eventos" />
            <div className='inicial-conteudo'>
              <h1>Nossos Eventos</h1>
              <h3>Delicias com sorvete!</h3>
              <p>Mais do que uma sorveteria, uma extensão da sua casa! <br />
                Estamos aqui prontinhos para te atender e  oferecer os <br />
                melhores eventos com os melhores sorvete da sua vida! <br />
                Venha nos conhecer e passar um tempo aqui com a gente.</p>
            </div>
          </div>

          <div className="row-container-terceiro">
            <img src="./assets/sobre-image.jpg" alt="sobre" />
            <div className='inicial-conteudo-terceiro'>
              <h1>Sobre nós</h1>
              <h3>Alegria em cada casquinha</h3>
              <p>Venha tomar o moelhor sorvete da região aqui com a gente! <br />
                Nós estamos há anos no mercado produzindo o que tem de <br /> melhor para o nosso cliente e você não pode ficar fora dessa. <br />Venha nos fazer uma visita e aproveite o molhor atendimento <br /> e o melhor sorvete da cidade.</p>
            </div>
          </div>
        </div>


      </main>
    </>
  );
}