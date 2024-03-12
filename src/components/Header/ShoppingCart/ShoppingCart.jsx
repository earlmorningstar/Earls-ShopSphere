import "../OtherHitems.css";
import { PiShoppingCart } from "react-icons/pi";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";

export default function ShoppingCart() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumbOfItems, item) => {
    return totalNumbOfItems + item.quantity;
  }, 0);
  return (
    <div className="shoppintCartParent">
      <PiShoppingCart size={25} color="red" />
      <span>({totalCartItems})</span>
    </div>
  );
}
