import NewFash from "../../assets/NewFash2.png";
import "./MainCollection.css";

export default function CollectionProduct() {
  return (
    <div className="coll-prod-parent">
      <div className="coll-prod-img">
        <img src={NewFash} alt="" />
      </div>
      <div className="coll-prod-price-star-parent">
        <span>$44.99</span>
        <span>Icon</span>
      </div>
      <div className="coll-prod-info">
        [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Porro, error! Minus itaque
      </div>
      <button>+ Add</button>
    </div>
  );
}
