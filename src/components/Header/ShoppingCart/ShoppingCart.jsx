import "../OtherHitems.css";
import { PiShoppingCart } from "react-icons/pi";
import { useContext } from "react";
import CartContext from "../../../store/CartContext.jsx";
import UserProgressContext from "../../../store/UserProgressContext.jsx";

export default function ShoppingCart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const uniqueItems = new Set();
  cartCtx.items.forEach((item) => {
    uniqueItems.add(item.id);
  });
  const totalCartItems = uniqueItems.size;

  // const totalCartItems = cartCtx.items.reduce((totalNumbOfItems, item) => {
  //   return totalNumbOfItems + item.quantity;
  // }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <div onClick={handleShowCart} className="shoppingCartParent">
      <PiShoppingCart
        size={25}
        // color="#acacac"
        color="gold"
      />
      <span>{totalCartItems}</span>
    </div>
  );
}
