import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import style from './menu.module.sass';

import ProdutosHidraulicos from '../produtosAntigo/hidraulicosAntigo';
import Hidraulicos from '../produtos/Hidraulicos';
import Eletricos from '../produtos/Eletricos';
import Ferragens from '../produtos/Ferragens';

const ContentA: React.FC = () => <div><Header/></div>;
const ContentB: React.FC = () => <div><Hidraulicos/></div>;
const ContentC: React.FC = () => <div><Footer/></div>;

const Menu = () => {
  const [activeContent, setActiveContent] = useState<React.ReactNode | null>(null);
  const [activeButton, setActiveButton] = useState('Eletricos');
  const [isMobile, setIsMobile] = useState(false);

  const handleItemClick = (content: React.ReactNode, buttonName: string) => {
    setActiveContent(content);
    setActiveButton(buttonName);
    scrollPage();
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case 'ContentA':
        handleItemClick(<ContentA />, 'ContentA');
        break;
      case 'ContentB':
        handleItemClick(<ContentB />, 'ContentB');
        break;
      case 'Hidraulicos':
        handleItemClick(<Hidraulicos />, 'Hidraulicos');
        break;
      case 'Hidraulicos2':
        handleItemClick(<Hidraulicos />, 'Hidraulicos2');
        break;
      case 'ContentC':
        handleItemClick(<Ferragens/>, 'Ferragens');
        break;
      case 'Eletricos':
        handleItemClick(<Eletricos/>, 'Eletricos');
        break;
      case 'Hidraulicos3':
        handleItemClick(<Hidraulicos />, 'Hidraulicos3');
        break;
      case 'ContentC3':
        handleItemClick(<ContentC />, 'ContentC3');
        break;
      case 'ContentC4':
        handleItemClick(<ContentC />, 'ContentC4');
        break;
      case 'ContentC5':
        handleItemClick(<ContentC />, 'ContentC5');
        break;
      case 'ContentC6':
        handleItemClick(<ContentC />, 'ContentC6');
        break;
      case 'ContentC7':
        handleItemClick(<ContentC />, 'ContentC7');
        break;
      default:
        handleItemClick(<ContentA />, 'ContentA');
    }
  };

  const scrollPage = () => {
    window.scrollTo({
      top: 900,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    
    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={style.menuContainer}>
      <h2>Nossos produtos</h2>
      <div className={style.linhaDecorativa}></div>
      {isMobile ? (
        <select onChange={handleSelectChange} className={style.mobileSelect}>
          <option value="ContentA">Argamassas e Rejuntes</option>
          <option value="ContentB">Bacias sanitárias</option>
          <option value="Hidraulicos">Chuveiros elétricos</option>
          <option value="Hidraulicos2">Espelhos e Armários</option>
          <option value="Ferragens">Ferragens</option>
          <option value="Eletricos">Material elétrico</option>
          <option value="Hidraulicos3">Material hidráulico</option>
          <option value="ContentC3">Metais e acessórios WC</option>
          <option value="ContentC4">Pendentes e Luminárias</option>
          <option value="ContentC5">Pisos</option>
          <option value="ContentC6">Porcelanato</option>
          <option value="ContentC7">Tintas</option>
        </select>
      ) : (
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
            className={activeButton === 'Ferragens' ? style.activeButton : ''}
            onClick={() => handleItemClick(<Ferragens/>, 'Ferragens')}
          >
            Ferragens
          </button>
          <button
            className={activeButton === 'Eletricos' ? style.activeButton : ''}
            onClick={() => handleItemClick(<Eletricos />, 'Eletricos')}
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
      )}
      {activeContent ? activeContent : <ContentA />}
    </div>
  );
};

export default Menu;
