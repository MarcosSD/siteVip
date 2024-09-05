import Image from "next/image";
import CardProduto from "../index";

import img1 from "./images/stam/fechadura-classic-40-3400-roseta-quadrada.jpg";
import img2 from "./images/stam/14256-fechadura-1005-trinco-rolete-roseta-quadrada-tetra-externa-cromado-150622-a82525.jpg";
import img3 from "./images/stam/76331-fixador-magnetico-inox-304-para-porta-inox-.jpg";
import img4 from "./images/stam/30026-fechadura-classic-55-3200-roseta-quadrada-interna-cromado.jpg";
import img5 from "./images/stam/40720-fechadura-classic-40-3300-roseta-quadrada-banheiro-black-fosco.jpg";
import img6 from "./images/stam/41212-fechadura-classic-40-3200-roseta-quadrada-externa-gold.jpg";

// import img6 from "./images/schneider/tomada.jpg";
// import img7 from "./images/schneider/MiluzInterruptor.jpg";
// import img8 from "./images/schneider/disjuntor.jpg";
// import img9 from './images/schneider/caixa.jpg'
// import img10 from './images/schneider/protetor.jpg'

// import img11 from './images/fame/Evidenceinterruptor.webp'
// import img12 from './images/fame/canaletaComFita20x10.webp'
// import img13 from './images/fame/interruptorBipolarSimples.webp'
// import img14 from './images/fame/plugueMacho.webp'
// import img15 from './images/fame/chaveBoia.webp'

const CardsFerragens = {
  Stam: [
    <CardProduto
      imagem={<Image src={img1} alt="Sil" width={150} height={150} />}
      nome="Fechadura Classic 40 3400 Roseta Quadrada"
      codigo="Código: 41227"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img2} alt="Sil" width={150} height={150} />}
      nome="Fechadura 1005 Roseta Quadrada Cromado"
      codigo="Código: 14256"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img3} alt="Sil" width={150} height={150} />}
      nome="Fixador Magnetico Inox 304 Inox Polido Encartelado"
      codigo="Código: 76331"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img4} alt="Sil" width={150} height={150} />}
      nome="Fechadura Classic 3200 Roseta Quadrada Cromado"
      codigo="Código: 30026"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img5} alt="Sil" width={150} height={150} />}
      nome="Fechadura Classic 3200 Roseta Quadrada Cromado"
      codigo="Código: 40720"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img6} alt="Sil" width={150} height={150} />}
      nome="Fechadura Classic 3200 Roseta Quadrada Gold"
      codigo="Código: 41212"
      nomeBotao="Saiba mais"

    />,
  ]

  // Schneider: [
  //   <CardProduto
  //     imagem={<Image src={img6} alt="Schneider" width={150} height={150} />}
  //     nome="Orion Tomada BR 2P + T 10A 250V PL/BR"
  //     codigo="Código: S71302104"
  //     nomeBotao="Saiba mais"
  //   />,
  //   <CardProduto
  //     imagem={<Image src={img7} alt="Schneider" width={150} height={150} />}
  //     nome="Miluz Interruptor Simples + Tomada 2P + T 10A 250V PL/BR"
  //     codigo="Código: PRM04404721"
  //     nomeBotao="Saiba mais"
  //   />,
  //   <CardProduto
  //     imagem={<Image src={img8} alt="Schneider" width={150} height={150} />}
  //     nome="Disjuntor Curva C 2P Bipolar 32A"
  //     codigo="Código: EZ9F33232"
  //     nomeBotao="Saiba mais"
  //   />,
  //   <CardProduto
  //     imagem={<Image src={img9} alt="Schneider" width={150} height={150} />}
  //     nome="Caixa sobrepor DXMLZ 1 tomada BR 2P + T 10A"
  //     codigo="Código: S3B66340"
  //     nomeBotao="Saiba mais"
  //   />,
  //   <CardProduto
  //     imagem={<Image src={img10} alt="Schneider" width={150} height={150} />}
  //     nome="Protetor de Surto Easy9 1P 45ka"
  //     codigo="Código: EZ9L33145"
  //     nomeBotao="Saiba mais"
  //   />,
  // ],

  // Fame : [
  //   <CardProduto
  //     imagem={<Image src={img11} alt="Fame" width={150} height={150} />}
  //     nome="Evidence Interruptor Simples 16A C/Placa"
  //     codigo="Código: 2896"
  //     nomeBotao="Saiba mais"
  //   />,
  //   <CardProduto
  //     imagem={<Image src={img12} alt="Fame" width={150} height={150} />}
  //     nome="Canaleta com Fita Adesiva 20x10mm 2000mm"
  //     codigo="Código: 3318"
  //     nomeBotao="Saiba mais"
  //   />,
  //   <CardProduto
  //     imagem={<Image src={img13} alt="Fame" width={150} height={150} />}
  //     nome="Habitat Interruptor Bipolar Simples 20A/250 SH"
  //     codigo="Código: 0342"
  //     nomeBotao="Saiba mais"
  //   />,
  //   <CardProduto
  //     imagem={<Image src={img14} alt="Fame" width={150} height={150} />}
  //     nome="Plugue Macho 2P+T 10A/250V"
  //     codigo="Código: 1729"
  //     nomeBotao="Saiba mais"
  //   />,
  //   <CardProduto
  //     imagem={<Image src={img15} alt="Fame" width={150} height={150} />}
  //     nome="Chave Boia Elétrica 25A/250V"
  //     codigo="Código: 3259"
  //     nomeBotao="Saiba mais"
  //   />,
};

export default CardsFerragens;
