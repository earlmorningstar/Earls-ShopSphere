import { IoIosHeartEmpty } from "react-icons/io";
import { GoPlus } from "react-icons/go";
// import NewFash from "../../assets/NewFash2.png";
import "./MainCollection.css";
import { currrencyFormatter } from "../../Util/formatter.js";
import { useContext } from "react";
import CartContext from "../../store/CartContext.jsx";

export default function CollectionProduct({fit}) {
  const cartCtx = useContext(CartContext);

  function handleAddItemToCart() {
    cartCtx.addItem(fit);
  }

  return (
    <>
      <div className="coll-prod-parent">
        <div className="coll-prod-img">
          <img src={`http://localhost:3001/${fit.image}`} alt={fit.item_name} />
        </div>
        <div className="coll-prod-price-star-parent">
          <span className="fit-price">{currrencyFormatter.format(fit.price)}</span>
          <span>
            <IoIosHeartEmpty size={18} />
          </span>
        </div>
        <div className="coll-prod-info">
        {fit.item_name}: {fit.description}
        </div>
        <button onClick={handleAddItemToCart}>
          <GoPlus size={15} color="#ffffff" /> Add
        </button>
      </div>
    </>
  );
}
