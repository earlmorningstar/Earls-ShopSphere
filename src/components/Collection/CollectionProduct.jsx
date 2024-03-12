import { IoIosHeartEmpty } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import NewFash from "../../assets/NewFash2.png";
import "./MainCollection.css";
import { currrencyFormatter } from "../../Util/formatter.js";

export default function CollectionProduct() {
  return (
    <>
      <div className="coll-prod-parent">
        <div className="coll-prod-img">
          <img src={NewFash} alt="" />
        </div>
        <div className="coll-prod-price-star-parent">
          <span>{currrencyFormatter.format(44.99)}</span>
          <span>
            <IoIosHeartEmpty size={18} />
          </span>
        </div>
        <div className="coll-prod-info">
          [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Porro, error! Minus itaque
        </div>
        <button>
          <GoPlus size={15} color="#ffffff" /> Add
        </button>
      </div>
    </>
  );
}
