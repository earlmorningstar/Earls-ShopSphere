import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";

const NextArrow = ({ onClick }) => {
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <RxDoubleArrowRight />
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <RxDoubleArrowLeft />
      </div>
    );
  };
  
  export { NextArrow, PrevArrow };