import "./MainContentCarousel.css";
// import grocery1 from "../../assets/Gro1-fresh-tomatoes.jpg";
import gad10 from "../../assets/Gad10.png";
import gad1 from "../../assets/Gad1.png";

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

      <div className="top-deals-flex-container">
        <div className="top-deals-styles top-deals-grid-2">
          <div className="image-container">
            <img src={gad1} alt="gro first img" />
          </div>
          <h3>
            Secure your devices swiftly today with convenient store pickup
            options.
          </h3>
          <button>Buy Now</button>
        </div>

        <div className="top-deals-styles top-deals-grid-3">
          <div className="image-container">
            <img src={gad10} alt="gro first img" />
          </div>
          <h3>Get up to a $200 discount on chosen devices.</h3>
          <button>Buy Now</button>
        </div>
      </div>
    </section>
  );
}
