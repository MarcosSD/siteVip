import { ReactNode } from 'react';
import style from './style.module.sass'
import { WhatsAppOutlined } from '@ant-design/icons';

export interface Produto {
  imagem?: ReactNode;
  nome?: string;
  codigo?: string;
  preco?: string;
  nomeBotao?: string;
}

const CardProduto = (props:Produto) => {
  return (
    <div className={style.container}>
      <div className={style.imagem}>
        {props.imagem}
      </div>
      <div className={style.nome}>
        {props.nome}
      </div>
      <div className={style.codigo}>
        {props.codigo}
      </div>
      <div className={style.preco}>
        {props.preco}
      </div>
      <div className={style.botao}>
        <a href=""><WhatsAppOutlined style={{color: '#fff', marginRight: '5px'}} />{props.nomeBotao}</a>
      </div>
    </div>
  )
}


export default CardProduto;