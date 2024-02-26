import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainContentCarousel.css";
import MainContentOppositeSide from "./MainContentOppositeSide.jsx";
import firstSlide from "../../assets/Style5.jpg";
import thirdSlide from "../../assets/Style8.jpg";
import fourthSlide from "../../assets/Style10.jpg";
import fifthSlide from "../../assets/Style11.jpg";
import sixSlide from "../../assets/Style12.jpg";
// import pbTablet from "../../assets/PBtablet.jpg";

// import { NextArrow, PrevArrow } from "./Arrow";

export default function MainContentCarousel() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <div className="overallH">
      <div className="carouselParent">
        <Slider {...carouselSettings}>
          <div className="slideImagesParent">
            <img className="slideImges" src={firstSlide} alt="Image 1" />
          </div>
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

      <div>
        <MainContentOppositeSide />
      </div>
    </div>
  );
}
