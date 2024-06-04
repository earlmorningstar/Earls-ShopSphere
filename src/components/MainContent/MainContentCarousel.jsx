import { useState, useEffect } from "react";
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

const images = [
  { src: firstSlide, alt: "Image 1" },
  { src: thirdSlide, alt: "Image 3" },
  { src: fourthSlide, alt: "Image 4" },
  { src: fifthSlide, alt: "Image 5" },
  { src: sixSlide, alt: "Image 6" },
];

export default function MainContentCarousel() {
  // const carouselSettings = {
  //   // dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 4000,
  //   // nextArrow: <NextArrow />,
  //   // prevArrow: <PrevArrow />,
  // };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImageIndex(randomIndex);
  }, []);

  return (
    <div className="overallH">
      <div className="carouselParent">
        <div className="slideImagesContainer">
          <Slider>
            {images.map((index) => (
              <div className="slideImagesParent" key={index}>
                <img
                  className="slideImges"
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div>
        <MainContentOppositeSide />
      </div>
    </div>
  );
}
