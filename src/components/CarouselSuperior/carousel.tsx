import { Carousel } from "antd";

const CarouselSuperior = () => {
  return (
    <Carousel autoplay arrows={true}
      style={{ height: "50%", width: "100%", background: "#606aa0" }}
    >
      <div>
        <h3>1</h3>
        <h3>1</h3>
        <h3>1</h3>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>

    </Carousel>
  );
}

export default CarouselSuperior;