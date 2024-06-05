import style from "./style.module.sass";
import Image from "next/image";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import imgVisao from "../../assets/visao.png";
import imgMissao from "../../assets/missao.png";
import imgValores from "../../assets/valores.png";

const Sobre = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.info1}>
          <h1>
            Vip Material de Construção: Excelência e Economia para Suas Obras em
            Sergipe
          </h1>
          <p>
            Desde 2011, a Vip Material de Construção tem se destacado no mercado
            de construção civil, oferecendo uma ampla gama de produtos, desde
            areia até acabamentos de alta sofisticação. Nossa missão é
            proporcionar o melhor custo-benefício da região, garantindo produtos
            de alta qualidade a preços competitivos.
          </p>
        </div>
        {/* <h2>Produtos e Marcas de Renome</h2>
        <p>
          Como revendedores oficiais de marcas consagradas, asseguramos a
          procedência e a excelência de todos os itens que oferecemos. Entre as
          marcas que representamos, destacam-se:
        </p>
        <ul>
          <li>
            <p>Tintas Coral</p>
          </li>
          <li>
            <p>Docol Metais</p>
          </li>
          <li>
            <p>Celite</p>
          </li>
          <li>
            <p>Delta Porcelanatos</p>
          </li>
          <li>
            <p>Quartzolit</p>
          </li>
          <li>
            <p>Eliane</p>
          </li>
          <li>
            <p>Lorenzetti</p>
          </li>
          <li>
            <p>Tigre</p>
          </li>
          <li>
            <p>Cabos Sil</p>
          </li>
          <li>
            <p>E diversas outras!</p>
          </li>
        </ul> */}

        <div className={style.missao}>
          <div className={style.areaImg}>
            <Image
              src={imgMissao}
              alt="Missão da Vip Material de Construção"
              id={style.imgMi}
            />
          </div>
          <div className={style.infoMissao}>
            <h2>Nossa Missão</h2>
            <div className={style.decorador}></div>
            <p>
              Nossa missão é fornecer materiais de construção de alta qualidade
              a preços acessíveis, atuando no mercado de Sergipe e contribuindo
              para o desenvolvimento do estado.
            </p>
          </div>
        </div>

        <div className={style.visao}>
          <div className={style.areaImg}>
            <Image
              src={imgVisao}
              alt="Visão da Vip Material de Construção"
              id={style.imgVi}
            />
          </div>
          <div className={style.infoVisao}>
            <h2>Nossa Visão</h2>
            <div className={style.decorador}></div>
            <p>
              A nossa visão é ser reconhecidos em Sergipe como uma referência no
              setor de construção civil, destacando-nos pela diversidade de
              produtos, pelo excelente custo-benefício e pelo atendimento de
              alta qualidade.
            </p>
          </div>
        </div>

        <div className={style.valores}>
          <div className={style.areaImg}>
            <Image
              src={imgValores}
              alt="Valores da Vip Material de Construção"
              id={style.imgVi}
            />
          </div>
          <div>
            <h2>Nossos Valores</h2>
            <div className={style.decorador}></div>
            <p>
              Na Vip Material de Construção, nossos valores fundamentais são a
              base de tudo o que fazemos. Priorizamos a qualidade dos nossos
              produtos, assegurando durabilidade e desempenho superior, e agimos
              com integridade, construindo relações de confiança através da
              transparência e honestidade. Estamos sempre em busca de inovação
              para aprimorar nossos produtos e serviços, comprometendo-nos com a
              satisfação total dos nossos clientes por meio de um atendimento
              personalizado e eficiente.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sobre;
