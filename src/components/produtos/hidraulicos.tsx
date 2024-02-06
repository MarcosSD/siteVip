import style from "./produtos.module.sass";
import useWindowDimensions from "../../utils/resizeWindow";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination'
import SwiperCore from "swiper";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import produto1 from "./images/tigre/image1.png";
import produto2 from "./images/tigre/image2.png";
import produto3 from "./images/tigre/image3.png";
import produto4 from "./images/tigre/image4.png";
import produto5 from "./images/tigre/image4.png";
import produto6 from "./images/tigre/image4.png";
import produto7 from "./images/tigre/image4.png";
import produto8 from "./images/tigre/image4.png";
import produto9 from "./images/tigre/image4.png";
import Image from "next/image";

SwiperCore.use([Autoplay, Navigation]);

const ProdutosHidraulicos = () => {
  const { width } = useWindowDimensions();

  const imagesTigre = [
    produto1,
    produto2,
    produto3,
    produto4,
    produto5,
    produto6,
    produto7,
    produto8,
    produto9,
  ];

  return (
    <div className={style.container}>
      <div className={style.containerAreaFilmes}>
        <Swiper
          slidesPerView={width ? width / 300 : 4}
          spaceBetween={60}
          modules={[Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          effect="slide"
          speed={1000}
        >
          {imagesTigre.map((item, index) => (
            <SwiperSlide key={index} className={style.slideFilme}>
              <Image src={item} alt="" id={style.img}/>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </div>
  );
};

export default ProdutosHidraulicos;
