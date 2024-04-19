import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import useWindowDimensions from '../../utils/resizeWindow'


// import required modules
import style from './style.module.sass'
//import { useEffect, useState } from 'react'

import produto1 from "./images/tigre/image1.png";
import produto2 from "./images/tigre/image2.png";
import produto3 from "./images/tigre/image3.png";
import produto4 from "./images/tigre/image4.png";
import produto5 from "./images/tigre/image4.png";
import produto6 from "./images/tigre/image3.png";
import produto7 from "./images/tigre/image2.png";
import produto8 from "./images/tigre/image1.png";
import produto9 from "./images/tigre/image4.png";
import logoTigre from "./images/tigre/Tigre.png"
import logoKrona from "./images/tigre/Krona.png"
import Image from "next/image";

const Hidraulicos = () => {

  const { width, height } = useWindowDimensions();

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
      <div>
        <Image src={logoTigre} alt="Marca" id={style.img} style={{margin: '50px 0 10px 0'}}/>
      </div>
      <div className={style.containerAreaFilmes}>
        <Swiper
          //slidesPerView={width ? width / 200 : 6}
          spaceBetween={10}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
          id={style.swiper}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1366: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
          }
          }
        >
          {imagesTigre.map((item, index) => (
            <SwiperSlide key={index} id={style.slideFilme}>
              <Image src={item} alt="Filme" id={style.img} />
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>

      <div className={style.linhaDecorativa}></div>

      <div>
        <Image src={logoKrona} alt="Marca" id={style.img} style={{margin: '30px 0 20px 0'}}/>
      </div>
      <div className={style.containerAreaFilmes}>
        <Swiper
          //slidesPerView={width ? width / 200 : 6}
          spaceBetween={10}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
          id={style.swiper}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1366: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
          }
          }
        >
          {imagesTigre.map((item, index) => (
            <SwiperSlide key={index} id={style.slideFilme}>
              <Image src={item} alt="Filme" id={style.img} />
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </div>
  );
};

export default Hidraulicos;