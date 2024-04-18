import { Carousel } from "antd";
import Image from "next/image";
import banner from "../../assets/bannerExemplo.png";

const CarouselSuperior = () => {
  return (
    <Carousel
      autoplay
      effect="scrollx"
      autoplaySpeed={3000}
    >
      <div>
        <Image src={banner} alt="1" />
      </div>
      <div>
        <Image src={banner} alt="1" />
      </div>
      <div>
        <Image src={banner} alt="1" />
      </div>
      <div>
        <Image src={banner} alt="1" />
      </div>
    </Carousel>
  );
};

export default CarouselSuperior;
