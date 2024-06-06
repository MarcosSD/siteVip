import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
SwiperCore.use([Navigation, Autoplay, Pagination]);

import useWindowDimensions from "../../utils/resizeWindow";

import style from "./style.module.sass";

import CardsEletricos from "../cardProduto/eletrico";

import logoSil from "./images/eletricos/sil/sil-logo.png";
import logoSchneider from "./images/eletricos/schneider/schneiderLogoPng.webp";
import logoFame from "./images/eletricos/fame/fame-logo.png";

import Image from "next/image";
import React from "react";

const Eletricos = () => {
  const { width, height } = useWindowDimensions();

  const nextButton = React.useRef(null);
  const prevButton = React.useRef(null);

  return (
    <div className={style.container}>
      <div>
        <Image
          src={logoSil}
          alt="Marca"
          id={style.imagem}
          style={{ margin: "50px 0 10px 0" }}
        />
      </div>
      <div className={style.containerAreaFilmes}>
        <Swiper
          //slidesPerView={width ? width / 200 : 6}
          spaceBetween={5}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
          id={style.swiper}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: nextButton.current,
            prevEl: prevButton.current,
          }}
          breakpoints={{
            550: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
          }}
        >
          {CardsEletricos.Sil.map((item, index) => (
            <SwiperSlide key={index} id={style.slideFilme}>
              {item}
            </SwiperSlide>
          ))}

          {/* <div ref={prevButton} className="swiper-button-prev" id={style.btnProdAnterior}></div>
          <div ref={nextButton} className="swiper-button-next" id={style.btnProdProx}></div> */}
        </Swiper>
      </div>

      <div className={style.linhaDecorativa}></div>

      <div>
        <Image
          src={logoSchneider}
          alt="Marca"
          id={style.SchneiderLogo}
        />
      </div>
      <div className={style.containerAreaFilmes}>
        <Swiper
          //slidesPerView={width ? width / 200 : 6}
          spaceBetween={5}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
          id={style.swiper}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: nextButton.current,
            prevEl: prevButton.current,
          }}
          breakpoints={{
            550: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
          }}
        >
          {CardsEletricos.Schneider.map((item, index) => (
            <SwiperSlide key={index} id={style.slideFilme}>
              {item}
            </SwiperSlide>
          ))}

          {/* <div ref={prevButton} className="swiper-button-prev" id={style.btnProdAnterior}></div>
          <div ref={nextButton} className="swiper-button-next" id={style.btnProdProx}></div> */}
        </Swiper>
      </div>

      <div className={style.linhaDecorativa}></div>

      <div>
        <Image
          src={logoFame}
          alt="Marca"
          id={style.imagem}
          style={{ margin: "50px 0 10px 0" }}
        />
      </div>
      <div className={style.containerAreaFilmes}>
        <Swiper
          //slidesPerView={width ? width / 200 : 6}
          spaceBetween={5}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper"
          id={style.swiper}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: nextButton.current,
            prevEl: prevButton.current,
          }}
          breakpoints={{
            550: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
          }}
        >
          {CardsEletricos.Fame.map((item, index) => (
            <SwiperSlide key={index} id={style.slideFilme}>
              {item}
            </SwiperSlide>
          ))}

          {/* <div ref={prevButton} className="swiper-button-prev" id={style.btnProdAnterior}></div>
          <div ref={nextButton} className="swiper-button-next" id={style.btnProdProx}></div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Eletricos;
