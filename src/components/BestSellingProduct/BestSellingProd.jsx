import { useState, useEffect } from "react";

import BestSellingCarousel from "./BestSellingCarousel.jsx";
import "./BestSelling.css";
import Slider from "react-slick";

export default function BestSellingProd() {
  const [loadedGadgets, setLoadedGadgets] = useState([]);

  useEffect(() => {
    async function fetchGadgets() {
      const response = await fetch("http://localhost:3001/gadgets");

      if (response.ok) {
        //....
      }

      const gadgets = await response.json();
      setLoadedGadgets(gadgets);
    }

    fetchGadgets();
  }, []);

  const bestSellingCarouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h3 className="best-selling-section-header">
        Bestselling and in-demand items
      </h3>
      <Slider {...bestSellingCarouselSettings}>
        {loadedGadgets.map((gadget) => (
          <BestSellingCarousel key={gadget.id} gadget={gadget} />
        ))}
      </Slider>
    </>
  );
}
