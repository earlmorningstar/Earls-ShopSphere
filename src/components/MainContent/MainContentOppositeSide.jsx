import "./MainContentCarousel.css";
import grocery1 from "../../assets/Gro1-fresh-tomatoes.jpg";

export default function MainContentOppositeSide() {
  return (
    <section className="main-cont-section">
      <div className="top-deals-styles top-deals-grid-1">
        <h3>
          Discover all premier deals from our most recent sales, consolidated in
          a single location.
        </h3>
        <button>Buy Now</button>
      </div>

      <div className="top-deals-styles top-deals-grid-2">
        <div className="image-container">
          <img src={grocery1} alt="gro first img" />
        </div>
        <h3>
          Secure your groceries swiftly today with convenient store pickup
          options.
        </h3>
        <button>Buy Now</button>
      </div>

      <div className="top-deals-styles top-deals-grid-3">
        <div className="image-container">
          <img src={grocery1} alt="gro first img" />
        </div>
        <h3>
        Get up to a $200 discount on chosen devices.
        </h3>
        <button>Buy Now</button>
      </div>


    </section>
  );
}
