import React from 'react';
import './style.css';

const Footer = () => (
  <footer>
    <div className="footer-row">
      <img src="./assets/logo.png" alt="Logo da sorveteria" />
      <div>
        <h3>ENDEREÇO</h3>
        <p>Av.Bernadinho de <br />Campos, 98 <br />São Paulo, SP 12345-678</p>
      </div>

      <div>
        <h3>CONTATO</h3>
        <p>info@meusite.com <br />tel:(11)3456-7890</p>
      </div>

      <div>
        <h3>HORÁRIOS</h3>
        <p>ABERTO TODOS OS DIAS <br />10:00-22:00</p>
      </div>
    </div>
    <p className='dev-info'>Gelateria. Orgulhosamente desenvolvido por "Gabriel Saturnino"</p>
  </footer>
);

export default Footer;