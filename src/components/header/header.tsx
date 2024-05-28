import style from "./header.module.sass";
import logo from "../../assets/logo2.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image src={logo} alt="Logo" className={style.img} />
      </div>
      <div className={style.btnsHeader}>
        <a href="http://">VIP Transportes</a>
        <a href="../../sobre">Sobre nós</a>
      </div>
    </header>
  );
};

export default Header;
