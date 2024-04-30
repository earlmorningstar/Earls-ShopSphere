import { createContext,
   useReducer, 
  // useEffect, 
  // useState,
 } from "react";

const CartContext = createContext({
  items: [],
  addItem: (items) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function CartReducer(state, action) {
  if (action.type === "ADD_ITEMS") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEMS") {
    const existingCartItemIndex = state.items.findIndex(
      //   (item) => item.id === action.item.id
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

// const [refreshKey, setRefreshKey] = useState(Date.now());

// useEffect(() => {
//   console.log("Retrieving cart items from localStorage");
//   const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
//   console.log("Stored cart items:", storedCartItems);
//   if (storedCartItems) {
//     dispatchCartAction({ type: "SET_CART_ITEMS", items: storedCartItems });
//   }
//   // setRefreshKey(Date.now());
// }, []);

// useEffect(() => {
//   localStorage.setItem("cartItems", JSON.stringify(cart.items));
// }, [cart.items]);


  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEMS", item: item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEMS", id: id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
    clearCart: clearCart,
  };

  //   console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;