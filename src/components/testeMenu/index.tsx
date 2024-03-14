import React, { useState } from 'react';
import Header from '../header/header';
import style from './menu.module.sass'

import ProdutosHidraulicos from '../produtos/hidraulicos';
import { Divider } from 'antd';
import Area_Filmes from '../teste-swiper';

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
      <div className={style.menuOptions}>
        {<div style={{display: 'none'}}><ProdutosHidraulicos/></div>}
        <button onClick={() => handleItemClick(<ContentA />)}>Argamassas e Rejuntes</button>
        <button onClick={() => handleItemClick(<ContentB />)}>Bacias sanitárias</button>
        <button onClick={() => handleItemClick(<Area_Filmes />)}>Chuveiros elétricos</button>
        <button onClick={() => handleItemClick(<Area_Filmes/>)}>Espelhos e Armários</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Ferragens</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Material elétrico</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Material hidráulico</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Metais e acessórios WC</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Pendentes e Luminárias</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Pisos</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Porcelanato</button>
        <button onClick={() => handleItemClick(<ContentC />)}>Tintas</button>
      </div>
      <div className={style.content} style={{ opacity: activeContent ? 1 : 0 }}>
        {activeContent}
      </div>
    </div>
  );
};

export default Menu;
