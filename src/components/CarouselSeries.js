import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/_Carousel.scss";
import Card from "./Card";
import { cantidadTarjetas } from "../auxiliares/Funciones";
import { useContext } from "react";
import Context from "../contexto/Context";

const CarouselSeries = ({ url }) => {
  const [series, setSeries] = useState([]);
  const contexto = useContext(Context);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSeries(data.results));
  }, [contexto.lenguaje]);

  const settings = {
    className: "carousel",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: cantidadTarjetas(),
    slidesToScroll: cantidadTarjetas(),
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {series.map((serie) => (
        <Card resultado={serie} />
      ))}
    </Slider>
  );
};

export default CarouselSeries;
