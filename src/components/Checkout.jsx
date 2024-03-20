import { useContext } from "react";
import Modal from "../UserInterface/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currrencyFormatter } from "../Util/formatter.js";
// import Button from "../UserInterface/Button.jsx";
import Input from "../UserInterface/Input.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const fd = new FormData(evt.target);
    const customerData = Object.fromEntries(fd.entries());

    fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currrencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <button type="button" onClick={handleCloseCheckout}>
            Close
          </button>
          <button>Submit Order</button>
        </p>
      </form>
    </Modal>
  );
}
