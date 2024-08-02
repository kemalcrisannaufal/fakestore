import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carrouselImages } from "../../../common/constant/carrouselImages";
import CarrouselItem from "./Carrouselitem";

const HomeCarrousel = () => {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full flex justify-center items-center mx-auto lg:px-36 mt-1 lg:mt-5">
      <div className="w-full max-w-5xl p-5">
        <Slider {...settings} className="mx-auto">
          {carrouselImages.map((item, index) => (
            <CarrouselItem key={index} image={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeCarrousel;
