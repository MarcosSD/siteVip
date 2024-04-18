import Image from "next/image";
import style from "./style.module.sass";
import logoFooter from "../../assets/logoFooter.png";
import logoWpp from "../../assets/imgWhatsapp.png";
import telefone from "../../assets/telefone.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.informacoes}>
        <div className={style.infoVip}>
          <Image
            src={logoFooter}
            alt="Vip Matariais de Construção"
            width={120}
            height={100}
          />
          <a href="/">Quem somos</a>
          <a href="/">VIP Transportes</a>
          <a href="/">Política de troca de devolução</a>
        </div>
        <div className={style.contato}>
          <h2>Fale conosco</h2>
          <div id={style.infoWpp}>
            <Image src={logoWpp} alt="Whatsapp" width={30} height={30} />
            <p> (79) 99872-0475</p>
          </div>
          <div id={style.infoWpp}>
            <Image src={telefone} alt="Telefone" width={25} height={25} />
            <p> (79) 3431-1212</p>
          </div>
        </div>
        <div className={style.redesSociais}>
          <h2>Redes Sociais</h2>
          <div id={style.icons}>
            <a href="/">
              <Image src={facebook} alt="Facebook" width={30} height={30} />
            </a>
            <a href="/">
              <Image src={instagram} alt="Instagram" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
      <div className={style.rodape}>
        Vip Materiais de Construção <br />
        Rua Antônio Dutra, 715 Centro, Itabaiana/SE <br />
        CEP: 49.500-151 <br />
        CNPJ: 13.021.964/0001-68
      </div>
    </footer>
  );
};

export default Footer;
