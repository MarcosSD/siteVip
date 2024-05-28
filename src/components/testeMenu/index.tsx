import React, { useState } from 'react';
import Header from '../header/header';
import style from './menu.module.sass';

import ProdutosHidraulicos from '../produtosAntigo/hidraulicosAntigo';
import Hidraulicos from '../produtos';

// Criação de componentes para exibir diferentes conteúdos
const ContentA: React.FC = () => <div><Header/></div>;
const ContentB: React.FC = () => <div>Conteúdo B</div>;
const ContentC: React.FC = () => <div>Conteúdo C</div>;

const Menu: React.FC = () => {
  const [activeContent, setActiveContent] = useState<React.ReactNode | null>(null);
  const [activeButton, setActiveButton] = useState<string>('ContentA');

  const handleItemClick = (content: React.ReactNode, buttonName: string) => {
    setActiveContent(content);
    setActiveButton(buttonName);
    scrollPage();
  };

  const scrollPage = () => {
    window.scrollTo({
      top: 900,
      behavior: 'smooth',
      
    });
  };

  return (
    <div className={style.menuContainer}>
      <h2>Nossos produtos</h2>
      <div className={style.linhaDecorativa}></div>
      <div className={style.menuOptions}>
        {<div style={{ display: 'none' }}><ProdutosHidraulicos /></div>}
        <button
          className={activeButton === 'ContentA' ? style.activeButton : ''}
          onClick={() => handleItemClick(<ContentA />, 'ContentA')}
        >
          Argamassas e Rejuntes
        </button>
        <button
          className={activeButton === 'ContentB' ? style.activeButton : ''}
          onClick={() => handleItemClick(<ContentB />, 'ContentB')}
        >
          Bacias sanitárias
        </button>
        <button
          className={activeButton === 'Hidraulicos' ? style.activeButton : ''}
          onClick={() => handleItemClick(<Hidraulicos />, 'Hidraulicos')}
        >
          Chuveiros elétricos
        </button>
        <button
          className={activeButton === 'Hidraulicos2' ? style.activeButton : ''}
          onClick={() => handleItemClick(<Hidraulicos />, 'Hidraulicos2')}
        >
          Espelhos e Armários
        </button>
        <button
          className={activeButton === 'ContentC' ? style.activeButton : ''}
          onClick={() => handleItemClick(<ContentC />, 'ContentC')}
        >
          Ferragens
        </button>
        <button
          className={activeButton === 'ContentC2' ? style.activeButton : ''}
          onClick={() => handleItemClick(<ContentC />, 'ContentC2')}
        >
          Material elétrico
        </button>
        <button
          className={activeButton === 'Hidraulicos3' ? style.activeButton : ''}
          onClick={() => handleItemClick(<Hidraulicos />, 'Hidraulicos3')}
        >
          Material hidráulico
        </button>
        <button
          className={activeButton === 'ContentC3' ? style.activeButton : ''}
          onClick={() => handleItemClick(<ContentC />, 'ContentC3')}
        >
          Metais e acessórios WC
        </button>
        <button
          className={activeButton === 'ContentC4' ? style.activeButton : ''}
          onClick={() => handleItemClick(<ContentC />, 'ContentC4')}
        >
          Pendentes e Luminárias
        </button>
        <button
          className={activeButton === 'ContentC5' ? style.activeButton : ''}
          onClick={() => handleItemClick(<ContentC />, 'ContentC5')}
        >
          Pisos
        </button>
        <button
          className={activeButton === 'ContentC6' ? style.activeButton : ''}
          onClick={() => handleItemClick(<ContentC />, 'ContentC6')}
        >
          Porcelanato
        </button>
        <button
          className={activeButton === 'ContentC7' ? style.activeButton : ''}
          onClick={() => handleItemClick(<ContentC />, 'ContentC7')}
        >
          Tintas
        </button>
      </div>
      {activeContent ? activeContent : <ContentA />}
    </div>
  );
};

export default Menu;
