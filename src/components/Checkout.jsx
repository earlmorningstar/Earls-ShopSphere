import { useContext } from "react";
import Modal from "../UserInterface/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currrencyFormatter } from "../Util/formatter.js";
// import Button from "../UserInterface/Button.jsx";
import Input from "../UserInterface/Input.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import "./GeneralModal.css";
import useHttp from "../../hooks/useHttp.js";
import Error from "../components/Error.jsx";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3001/orders", requestConfig);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  // console.log("data:", data);
  // console.log("error:", error);
  // console.log("progress:", userProgressCtx.progress);

  function handleFinish() {
    // console.log("HandleFinish Called");
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const fd = new FormData(evt.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  let buttonActions = (
    <>
      <button className="order-btn" type="button" onClick={handleCloseCheckout}>
        Close
      </button>
      <button className="order-btn">Submit Order</button>
    </>
  );

  if (isSending) {
    buttonActions = <span>Sending order...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        // onClose={handleFinish}
        className="checkout"
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p>Thank you for shopping with us.</p>
        <p className="modal-actions">
          <button onClick={handleFinish}>Okay</button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
      className="checkout"
    >
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <hr />
        <p>Total Amount: {currrencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <Error title="Failed to submit orders" message={error} />}

        {/* <span>
          <button className="order-btn" type="button" >Back To Checkout</button>
          </span> */}
        <p className="modal-actions">{buttonActions}</p>
      </form>
    </Modal>
  );
}

// import { useContext } from "react";
// import Modal from "../UserInterface/Modal.jsx";
// import CartContext from "../store/CartContext.jsx";
// import { currrencyFormatter } from "../Util/formatter.js";
// import Input from "../UserInterface/Input.jsx";
// import UserProgressContext from "../store/UserProgressContext.jsx";
// import "./GeneralModal.css";
// import useHttp from "../../hooks/useHttp.js";
// import Error from "../components/Error.jsx";

// const requestConfig = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// export default function Checkout() {
//   const cartCtx = useContext(CartContext);
//   const userProgressCtx = useContext(UserProgressContext);

//   const { data, isLoading: isSending, error, sendRequest, clearData } = useHttp(
//     `${import.meta.env.VITE_API_URL}/orders`,
//     requestConfig
//   );

//   const cartTotal = cartCtx.items.reduce(
//     (totalPrice, item) => totalPrice + item.quantity * item.price,
//     0
//   );

//   function handleCloseCheckout() {
//     userProgressCtx.hideCheckout();
//   }

//   function handleFinish() {
//     userProgressCtx.hideCheckout();
//     cartCtx.clearCart();
//     clearData();
//   }

//   function handleSubmit(evt) {
//     evt.preventDefault();
//     const fd = new FormData(evt.target);
//     const customerData = Object.fromEntries(fd.entries());
//     sendRequest(
//       JSON.stringify({
//         order: {
//           items: cartCtx.items,
//           customer: customerData,
//         },
//       })
//     );
//   }

//   let buttonActions = (
//     <>
//       <button className="order-btn" type="button" onClick={handleCloseCheckout}>
//         Close
//       </button>
//       <button className="order-btn">Submit Order</button>
//     </>
//   );

//   if (isSending) {
//     buttonActions = <span>Sending order...</span>;
//   }

//   if (data && !error) {
//     return (
//       <Modal open={userProgressCtx.progress === "checkout"} className="checkout">
//         <h2>Success!</h2>
//         <p>Your order was submitted successfully.</p>
//         <p>
//           We will get back to you with more details via email within the next few minutes.
//         </p>
//         <p>Thank you for shopping with us.</p>
//         <p className="modal-actions">
//           <button onClick={handleFinish}>Okay</button>
//         </p>
//       </Modal>
//     );
//   }

//   return (
//     <Modal open={userProgressCtx.progress === "checkout"} onClose={handleCloseCheckout} className="checkout">
//       <form className="checkout-form" onSubmit={handleSubmit}>
//         <h2>Checkout</h2>
//         <hr />
//         <p>Total Amount: {currrencyFormatter.format(cartTotal)}</p>
//         <Input label="Full Name" type="text" id="name" />
//         <Input label="E-mail Address" type="email" id="email" />
//         <Input label="Street" type="text" id="street" />
//         <div className="control-row">
//           <Input label="Postal Code" type="text" id="postal-code" />
//           <Input label="City" type="text" id="city" />
//         </div>
//         {error && <Error title="Failed to submit orders" message={error} />}
//         <p className="modal-actions">{buttonActions}</p>
//       </form>
//     </Modal>
//   );
// }



// import { useContext } from "react";
// import Modal from "../UserInterface/Modal.jsx";
// import CartContext from "../store/CartContext.jsx";
// import { currrencyFormatter } from "../Util/formatter.js";
// import Input from "../UserInterface/Input.jsx";
// import UserProgressContext from "../store/UserProgressContext.jsx";
// import "./GeneralModal.css";
// import useHttp from "../../hooks/useHttp.js";
// import Error from "../components/Error.jsx";

// const requestConfig = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// export default function Checkout() {
//   const cartCtx = useContext(CartContext);
//   const userProgressCtx = useContext(UserProgressContext);

//   const {
//     data,
//     isLoading: isSending,
//     error,
//     sendRequest,
//     clearData,
//   } = useHttp("http://localhost:3001/orders", requestConfig);

//   const cartTotal = cartCtx.items.reduce(
//     (totalPrice, item) => totalPrice + item.quantity * item.price,
//     0
//   );

//   function handleCloseCheckout() {
//     userProgressCtx.hideCheckout();
//   }

  

//   function handleFinish() {
    
//     userProgressCtx.hideCheckout();
//     cartCtx.clearCart();
//     clearData();
//   }

//   function handleSubmit(evt) {
//     evt.preventDefault();

//     const fd = new FormData(evt.target);
//     const customerData = Object.fromEntries(fd.entries());

//     sendRequest(
//       JSON.stringify({
//         order: {
//           items: cartCtx.items,
//           customer: customerData,
//         },
//       })
//     );
//   }

//   let buttonActions = (
//     <>
//       <button className="order-btn" type="button" onClick={handleCloseCheckout}>
//         Close
//       </button>
//       <button className="order-btn">Submit Order</button>
//     </>
//   );

//   if (isSending) {
//     buttonActions = <span>Sending order...</span>;
//   }

//   if (data && !error) {
//     return (
//       <Modal
//         open={userProgressCtx.progress === "checkout"}
       
//         className="checkout"
//       >
//         <h2>Success!</h2>
//         <p>Your order was submitted successfully.</p>
//         <p>
//           We will get back to you with more details via email within the next
//           few minutes.
//         </p>
//         <p>Thank you for shopping with us.</p>
//         <p className="modal-actions">
//           <button onClick={handleFinish}>Okay</button>
//         </p>
//       </Modal>
//     );
//   }

//   return (
//     <Modal
//       open={userProgressCtx.progress === "checkout"}
//       onClose={handleCloseCheckout}
//       className="checkout"
//     >
//       <form className="checkout-form" onSubmit={handleSubmit}>
//         <h2>Checkout</h2>
//         <hr />
//         <p>Total Amount: {currrencyFormatter.format(cartTotal)}</p>
//         <Input label="Full Name" type="text" id="name" />
//         <Input label="E-mail Address" type="email" id="email" />
//         <Input label="Street" type="text" id="street" />
//         <div className="control-row">
//           <Input label="Postal Code" type="text" id="postal-code" />
//           <Input label="City" type="text" id="city" />
//         </div>

//         {error && <Error title="Failed to submit orders" message={error} />}
//         <p className="modal-actions">{buttonActions}</p>
//       </form>
//     </Modal>
//   );
// }
