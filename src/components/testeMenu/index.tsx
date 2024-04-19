import React, { useState } from 'react';
import Header from '../header/header';
import style from './menu.module.sass'

import ProdutosHidraulicos from '../produtosAntigo/hidraulicosAntigo';
import Hidraulicos from '../produtos';

// Criação de componentes para exibir diferentes conteúdos
const ContentA: React.FC = () => <div><Header/></div>;
const ContentB: React.FC = () => <div>Conteúdo B</div>;
const ContentC: React.FC = () => <div>Conteúdo C</div>;

const Menu: React.FC = () => {
  const [activeContent, setActiveContent] = useState<React.ReactNode | null>(null);

  const handleItemClick = (content: React.ReactNode) => {
    setActiveContent(content);
  };

  return (
    <div className={style.menuContainer}>
      <h2>Nossos produtos</h2>
      <div className={style.linhaDecorativa}></div>
      <div className={style.menuOptions}>
        {<div style={{display: 'none'}}><ProdutosHidraulicos/></div>}
        <button onClick={() => handleItemClick(<ContentA />)}>Argamassas e Rejuntes</button>
        <button onClick={() => handleItemClick(<ContentB />)}>Bacias sanitárias</button>
        <button onClick={() => handleItemClick(<Hidraulicos />)}>Chuveiros elétricos</button>
        <button onClick={() => handleItemClick(<Hidraulicos/>)}>Espelhos e Armários</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Ferragens</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Material elétrico</button>
        <button onClick={() => handleItemClick(<Hidraulicos/>)}>Material hidráulico</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Metais e acessórios WC</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Pendentes e Luminárias</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Pisos</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Porcelanato</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Tintas</button>
      </div>
      <div className={style.content}>
        {activeContent}
      </div>
    </div>
  );
};

export default Menu;
