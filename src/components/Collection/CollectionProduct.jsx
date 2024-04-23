import { useContext } from "react";
import CartContext from "../../store/CartContext.jsx";
// import { Link } from "react-router-dom";

import { currrencyFormatter } from "../../Util/formatter.js";
import "./MainCollection.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoPlus } from "react-icons/go";

export default function CollectionProduct({ fit }) {
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
          <span>{currrencyFormatter.format(fit.price)}</span>
          <span>
            <IoIosHeartEmpty size={18} />
          </span>
        </div>
        <div className="coll-prod-info">
          <h4>{fit.item_name}</h4>
          <span>{fit.description}</span>
        </div>
        <span>
          <button className="coll-prod-parent-btn" onClick={handleAddItemToCart}>
          <GoPlus size={13} 
          // color="#121212"
          color="#f7f7f7" /> Add
        </button>
        {/* <Link to={`/item/${fit.id}`} style={{ textDecoration: 'none' }}> */}
        <button className="coll-prod-parent-btn">View Item</button>
        {/* </Link> */}
        
        </span>
        
      </div>
    </>
  );
}
