import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainContentCarousel.css";
import { NextArrow, PrevArrow } from "./Arrow";

import firstSlide from "../../assets/Style5.jpg";
// import secondSlide from "../../assets/Style7.jpg";
import thirdSlide from "../../assets/Style8.jpg";
import fourthSlide from "../../assets/Style10.jpg";
import fifthSlide from "../../assets/Style11.jpg";
import sixSlide from "../../assets/Style12.jpg";

export default function MainContentCarousel() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carouselParent">
      <Slider {...carouselSettings}>
        <div className="slideImagesParent">
          <img className="slideImges" src={firstSlide} alt="Image 1" />
        </div>
        {/* <div className="slideImagesParent">
          <img className="slideImges" src={secondSlide} alt="Image 2" />
        </div> */}
        <div className="slideImagesParent">
          <img className="slideImges" src={thirdSlide} alt="Image 3" />
        </div>
        <div className="slideImagesParent">
          <img className="slideImges" src={fourthSlide} alt="Image 4" />
        </div>
        <div className="slideImagesParent">
          <img className="slideImges" src={fifthSlide} alt="Image 5" />
        </div>
        <div className="slideImagesParent">
          <img className="slideImges" src={sixSlide} alt="Image 6" />
        </div>
      </Slider>


    </div>
  );
}
