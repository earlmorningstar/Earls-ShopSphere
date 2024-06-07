import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import LikedItemsContext from "../../store/LikedItemsContext.jsx";

import { currrencyFormatter } from "../../Util/formatter.js";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { GoPlus } from "react-icons/go";
import { FaHeart } from "react-icons/fa";

// const apiUrl = process.env.REACT_APP_API_URL;

export default function BestSellingCarousel({ gadget }) {
  const cartCtx = useContext(CartContext);
  const likedItemCtx = useContext(LikedItemsContext);

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(likedItemCtx.isItemLiked(gadget));
  }, [likedItemCtx.items, gadget]);

  function handleAddItemToCart() {
    cartCtx.addItem(gadget);
  }

  function handleToggleAddLikedItem(e) {
    e.stopPropagation();
    if (isLiked) {
      likedItemCtx.removeLikedItem(gadget.id);
    } else {
      likedItemCtx.addLikedItem(gadget);
    }
    setIsLiked(!isLiked);
  }

  return (
    <div className="bestSelling-holdingDiv">
      <div className="bestSelling-ImageParent">
        <img
          src={`${import.meta.env.VITE_API_URL}/${gadget.image}`}
          alt={gadget.item_name}
        />
      </div>
      <div className="bestSelling-info-rating-price">
        <aside className="itemName">
          <h4>{gadget.item_name}</h4>
        <p onClick={handleToggleAddLikedItem}>
          <FaHeart  size={16} color={isLiked ? "red" : "black"}/>
        </p>
        </aside>
          
        <span>{gadget.description}</span>
        <div>
          <Stack spacing={1}>
            <Rating name="rating" defaultValue={0} precision={1} />
          </Stack>
        </div>

        <div className="bs-span-btn">
          <span>{currrencyFormatter.format(gadget.price)}</span>
          <button onClick={handleAddItemToCart}>
            <GoPlus size={15} color="#ffffff" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}


// import { useContext, useEffect, useState } from "react";
// import CartContext from "../../store/CartContext";
// import LikedItemsContext from "../../store/LikedItemsContext.jsx";

// import { currrencyFormatter } from "../../Util/formatter.js";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
// import { GoPlus } from "react-icons/go";
// import { FaHeart } from "react-icons/fa";

// export default function BestSellingCarousel({ gadget }) {
//   const cartCtx = useContext(CartContext);
//   const likedItemCtx = useContext(LikedItemsContext);

//   const [isLiked, setIsLiked] = useState(false);

//   useEffect(() => {
//     setIsLiked(likedItemCtx.isItemLiked(gadget));
//   }, [likedItemCtx.items, gadget]);

//   function handleAddItemToCart() {
//     cartCtx.addItem(gadget);
//   }

//   function handleToggleAddLikedItem(e) {
//     e.stopPropagation();
//     if (isLiked) {
//       likedItemCtx.removeLikedItem(gadget.id);
//     } else {
//       likedItemCtx.addLikedItem(gadget);
//     }
//     setIsLiked(!isLiked);
//   }

//   return (
//     <div className="bestSelling-holdingDiv">
//       <div className="bestSelling-ImageParent">
//         <img
//           src={`http://localhost:3001/${gadget.image}`}
//           alt={gadget.item_name}
//         />
//       </div>
//       <div className="bestSelling-info-rating-price">
//         <aside className="itemName">
//           <h4>{gadget.item_name}</h4>
//         <p onClick={handleToggleAddLikedItem}>
//           <FaHeart  size={16} color={isLiked ? "red" : "black"}/>
//         </p>
//         </aside>
          
//         <span>{gadget.description}</span>
//         <div>
//           <Stack spacing={1}>
//             <Rating name="rating" defaultValue={0} precision={1} />
//           </Stack>
//         </div>

//         <div className="bs-span-btn">
//           <span>{currrencyFormatter.format(gadget.price)}</span>
//           {/* <button>View Item</button> */}
//           <button onClick={handleAddItemToCart}>
//             <GoPlus size={15} color="#ffffff" /> Add
//           </button>
//         </div>
//       </div>
//     </div>

//     // <div className="best-selling-slider-container">
//   );
// }
