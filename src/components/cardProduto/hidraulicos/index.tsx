import Image from "next/image";
import CardProduto from "../index";

import img1 from "./images/tigre/tuboEsgoto100mm.jpg";
import img2 from "./images/tigre/eletrodutoCorrugado25mm.png";
import img3 from "./images/tigre/joelho90soldavel20mm.jpg";
import img4 from "./images/tigre/adesivoAquaterm175g.png";
import img5 from "./images/tigre/quadroDeDistribuicao12.jpg"
import img6 from "./images/tigre/quadroDeDistribuicao16.jpg"

import img7 from './images/krona/tuboSoldavel20mm.jpg'
import img8 from './images/krona/joelho90soldavel20mm.jpg'
import img9 from './images/krona/caixaDeGordura.png'
import img10 from './images/krona/tudoEletrodutoRoscavel.jpg.webp'
import img11 from './images/krona/caixaDeLuz4x2.png.webp'



const CardsHidraulicos = {
  Tigre: [
    <CardProduto
    imagem={<Image src={img1} alt="Tigre" width={150} height={150} />}
    nome="Tubo Coletor Esgoto 100mm"
    codigo="Código: 11212662"
    nomeBotao= "Saiba mais"
  />,
  <CardProduto
    imagem={<Image src={img2} alt="Tigre" width={150} height={150} />}
    nome="Eletroduto Flexível Corrugado 25mm"
    codigo="Código: 14210253"
    nomeBotao= "Saiba mais"
  />,
  <CardProduto
    imagem={<Image src={img6} alt="Tigre" width={150} height={150} />}
    nome="Quadro Distribuição Slim 16 disjuntores"
    codigo="Código: 33040814"
    nomeBotao= "Saiba mais"
  />,
  
  <CardProduto
    imagem={<Image src={img4} alt="Tigre" width={150} height={150} />}
    nome="Adesivo Aquaterm 175g"
    codigo="Código: 53010407"
    nomeBotao= "Saiba mais"
  />,
  <CardProduto
    imagem={<Image src={img5} alt="Tigre" width={150} height={150} />}
    nome="Quadro Distribuição Slim 12 disjuntores"
    codigo="Código: 33040806"
    nomeBotao= "Saiba mais"
  />,
  <CardProduto
    imagem={<Image src={img3} alt="Tigre" width={150} height={150} />}
    nome="Joelho 90º Soldável"
    codigo="Código: 22150200"
    nomeBotao= "Saiba mais"
  />,
  
  ],

  Krona: [
    <CardProduto
    imagem={<Image src={img7} alt="Krona" width={170} height={150} />}
    nome="Tubo Soldável 20mm"
    codigo="Código: 0023"
    nomeBotao= "Saiba mais"
  />,
  <CardProduto
    imagem={<Image src={img8} alt="Krona" width={150} height={150} />}
    nome="Joelho 90º Soldável Bucha Latão 25mm x 1/2"
    codigo="Código: 0499"
    nomeBotao= "Saiba mais"
  />,
  <CardProduto
    imagem={<Image src={img9} alt="Krona" width={180} height={160} />}
    nome="Caixa de Gordura"
    codigo="Código: 1481"
    nomeBotao= "Saiba mais"
  />,
  <CardProduto
    imagem={<Image src={img10} alt="Krona" width={190} height={150} />}
    nome="Tudo Eletroduto Roscável 1'(32mm)"
    codigo="Código: 1100"
    nomeBotao= "Saiba mais"
  />,
  <CardProduto
    imagem={<Image src={img11} alt="Tigre" width={170} height={150} />}
    nome="Caixa de Luz 4x2 p/ Eletroduto Corrugado Flexível"
    codigo="Código: 1265"
    nomeBotao= "Saiba mais"
  />,
  
  ]

}
  
  


export default CardsHidraulicos;
