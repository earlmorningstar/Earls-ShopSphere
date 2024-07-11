import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext.jsx";
import LikedItemsContext from "../../store/LikedItemsContext.jsx";

import { currrencyFormatter } from "../../Util/formatter.js";
import "./MainCollection.css";
import { FaHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

export default function CollectionProduct({ fit }) {
  const cartCtx = useContext(CartContext);
  const likedItemCtx = useContext(LikedItemsContext);

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(likedItemCtx.isItemLiked(fit));
  }, [likedItemCtx.items, fit]);

  function handleAddItemToCart() {
    cartCtx.addItem(fit);
  }

  function handleToggleAddLikedItem(e) {
    e.stopPropagation();
    if (isLiked) {
      likedItemCtx.removeLikedItem(fit.id);
    } else {
      likedItemCtx.addLikedItem(fit);
    }
    setIsLiked(!isLiked);
  }

  return (
    <div className="coll-prod-parent">
      <div className="coll-prod-img">
        <img src={`http://localhost:3001/${fit.image}`} alt={fit.item_name} />
      </div>
      <div className="coll-prod-price-star-parent">
        <span>{currrencyFormatter.format(fit.price)}</span>
        <span className="like-icon" onClick={handleToggleAddLikedItem}>
          <FaHeart size={16} color={isLiked ? "red" : "black"} />
        </span>
      </div>
      <div className="coll-prod-info">
        <h4>{fit.item_name}</h4>
        <span>{fit.description}</span>
      </div>
      <span>
        <button className="coll-prod-parent-btn" onClick={handleAddItemToCart}>
          <GoPlus
            size={13}
            color="#f7f7f7"
          />{" "}
          Add
        </button>
        {/* <button className="coll-prod-parent-btn">View Item</button> */}
      </span>
    </div>
  );
}


// import { useContext, useEffect, useState } from "react";
// import CartContext from "../../store/CartContext.jsx";
// import LikedItemsContext from "../../store/LikedItemsContext.jsx";

// import { currrencyFormatter } from "../../Util/formatter.js";
// import "./MainCollection.css";
// import { FaHeart } from "react-icons/fa";
// import { GoPlus } from "react-icons/go";

// // const apiUrl = process.env.REACT_APP_API_URL;

// export default function CollectionProduct({ fit }) {
//   const cartCtx = useContext(CartContext);
//   const likedItemCtx = useContext(LikedItemsContext);

//   const [isLiked, setIsLiked] = useState(false);

//   useEffect(() => {
//     setIsLiked(likedItemCtx.isItemLiked(fit));
//   }, [likedItemCtx.items, fit]);

//   function handleAddItemToCart() {
//     cartCtx.addItem(fit);
//   }

//   function handleToggleAddLikedItem(e) {
//     e.stopPropagation();
//     if (isLiked) {
//       likedItemCtx.removeLikedItem(fit.id);
//     } else {
//       likedItemCtx.addLikedItem(fit);
//     }
//     setIsLiked(!isLiked);
//   }

//   return (
//     <div className="coll-prod-parent">
//       <div className="coll-prod-img">
//         <img src={`${import.meta.env.VITE_API_URL}/${fit.image}`} alt={fit.item_name} />
//       </div>
//       <div className="coll-prod-price-star-parent">
//         <span>{currrencyFormatter.format(fit.price)}</span>
//         <span className="like-icon" onClick={handleToggleAddLikedItem}>
//           <FaHeart size={16} color={isLiked ? "red" : "black"} />
//         </span>
//       </div>
//       <div className="coll-prod-info">
//         <h4>{fit.item_name}</h4>
//         <span>{fit.description}</span>
//       </div>
//       <span>
//         <button className="coll-prod-parent-btn" onClick={handleAddItemToCart}>
//           <GoPlus
//             size={13}
//             color="#f7f7f7"
//           />{" "}
//           Add
//         </button>
//       </span>
//     </div>
//   );
// }




// import { useContext, useEffect, useState } from "react";
// import CartContext from "../../store/CartContext.jsx";
// import LikedItemsContext from "../../store/LikedItemsContext.jsx";

// import { currrencyFormatter } from "../../Util/formatter.js";
// import "./MainCollection.css";
// import { FaHeart } from "react-icons/fa";
// import { GoPlus } from "react-icons/go";

// export default function CollectionProduct({ fit }) {
//   const cartCtx = useContext(CartContext);
//   const likedItemCtx = useContext(LikedItemsContext);

//   const [isLiked, setIsLiked] = useState(false);

//   useEffect(() => {
//     setIsLiked(likedItemCtx.isItemLiked(fit));
//   }, [likedItemCtx.items, fit]);

//   function handleAddItemToCart() {
//     cartCtx.addItem(fit);
//   }

//   function handleToggleAddLikedItem(e) {
//     e.stopPropagation();
//     if (isLiked) {
//       likedItemCtx.removeLikedItem(fit.id);
//     } else {
//       likedItemCtx.addLikedItem(fit);
//     }
//     setIsLiked(!isLiked);
//   }

//   return (
//     <div className="coll-prod-parent">
//       <div className="coll-prod-img">
//         <img src={`${import.meta.env.VITE_API_URL}/${fit.image}`} alt={fit.item_name} />
//       </div>
//       <div className="coll-prod-price-star-parent">
//         <span>{currrencyFormatter.format(fit.price)}</span>
//         <span className="like-icon" onClick={handleToggleAddLikedItem}>
//           <FaHeart size={16} color={isLiked ? "red" : "black"} />
//         </span>
//       </div>
//       <div className="coll-prod-info">
//         <h4>{fit.item_name}</h4>
//         <span>{fit.description}</span>
//       </div>
//       <span>
//         <button className="coll-prod-parent-btn" onClick={handleAddItemToCart}>
//           <GoPlus size={13} color="#f7f7f7" /> Add
//         </button>
//       </span>
//     </div>
//   );
// }