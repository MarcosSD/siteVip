import Image from "next/image";
import CardProduto from "../index";

import img1 from "./images/sil/caboFlexivel750.jpg";
import img2 from "./images/sil/caboFlexivel750.jpg";
import img3 from "./images/sil/caboRigidoSIlnax.jpg";
import img4 from "./images/sil/caboRigidoSIlnax.jpg";
import img5 from "./images/sil/cordaoTorcido.jpg";

import img6 from "./images/schneider/tomada.jpg";
import img7 from "./images/schneider/MiluzInterruptor.jpg";
import img8 from "./images/schneider/disjuntor.jpg";
import img9 from './images/schneider/caixa.jpg'

const CardsEletricos = {
  Sil: [
    <CardProduto
      imagem={<Image src={img1} alt="Sil" width={150} height={150} />}
      nome="Cabo Flexível Flexsil BWF 750V 2,5mm (12)"
      codigo="Código: ----"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img2} alt="Sil" width={150} height={150} />}
      nome="Cabo flexível flexsil BWF 750V 6,0mm (08)"
      codigo="Código: ----"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img3} alt="Sil" width={150} height={150} />}
      nome="Cabo rígido Sil Nax HEPR 90° 1 x 6,00mm2 0,6/1kv"
      codigo="Código: ----"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img4} alt="Sil" width={150} height={150} />}
      nome="Cabo rígido Sil Nax HEPR 90° 1 x 16,00mm2 0,6/1kv"
      codigo="Código: ----"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img5} alt="Sil" width={150} height={150} />}
      nome="Cordão Torcido Sil Branco 300V 2 x 1,50mm2"
      codigo="Código: 33040806"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img1} alt="Sil" width={150} height={150} />}
      nome="Cabo Flexível Flexsil BWF 750V 2,5mm (12)"
      codigo="Código: ----"
      nomeBotao="Saiba mais"
    />,
  ],

  Schneider: [
    <CardProduto
      imagem={<Image src={img6} alt="Schneider" width={150} height={150} />}
      nome="Orion Tomada BR 2P + T 10A 250V PL/BR"
      codigo="Código: S71302104"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img7} alt="Schneider" width={150} height={150} />}
      nome="Miluz Interruptor Simples + Tomada 2P + T 10A 250V PL/BR"
      codigo="Código: PRM04404721"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img8} alt="Schneider" width={150} height={150} />}
      nome="Disjuntor Curva C 2P Bipolar 32A"
      codigo="Código: EZ9F33232"
      nomeBotao="Saiba mais"
    />,
    <CardProduto
      imagem={<Image src={img9} alt="Schneider" width={150} height={150} />}
      nome="Caixa sobrepor DXMLZ 1 tomada BR 2P + T 10A"
      codigo="Código: S3B66340"
      nomeBotao="Saiba mais"
    />,
  ],
};

export default CardsEletricos;
