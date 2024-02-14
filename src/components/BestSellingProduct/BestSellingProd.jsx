import BestSellingCarousel from "./BestSellingCarousel.jsx";
import "./BestSelling.css";

export default function BestSellingProd() {
  return (
    <>
      <h3 className="best-selling-section-header">
        Bestselling and in-demand items
      </h3>
      <BestSellingCarousel />
    </>
  );
}
