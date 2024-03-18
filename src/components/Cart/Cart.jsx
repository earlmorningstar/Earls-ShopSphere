import CartContext from "../../store/CartContext.jsx";
import { useContext } from "react";
import Button from "../../UserInterface/Button.jsx";
import { currrencyFormatter } from "../../Util/formatter.js";
import UserProgressContext from "../../store/UserProgressContext";
import Modal from "../../UserInterface/Modal.jsx";
import CartItem from "./CartItem.jsx";
import "./Cart.css";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.item_name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => cartCtx.removeItem(item.id)}
            onIncrease={() => cartCtx.addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{currrencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart}>Close</Button>
        <Button>Go to checkout</Button>
      </p>
    </Modal>
  );
}
