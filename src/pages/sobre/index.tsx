import style from "./style.module.sass";

import Header from "@/components/header/header";

const Sobre = () => {
  return (
    <>
      <div className={style.container}>
        <Header />
        <h1>Sobre</h1>
      </div>
    </>
  );
};

export default Sobre;
