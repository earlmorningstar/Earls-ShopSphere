import { useContext } from "react";
import UserProgressContext from "../../../store/UserProgressContext";
import LikedItemsContext from "../../../store/LikedItemsContext";

import "../OtherHitems.css";

import { FaHeart } from "react-icons/fa";

export default function FavoritedProd() {
  const likedItemCtx = useContext(LikedItemsContext);
  const userProgressCtx = useContext(UserProgressContext);

  const uniqueLikedItems = new Set();
  likedItemCtx.items.forEach((item) => {
    uniqueLikedItems.add(item.id);
  }, 0);
  const totalLikedItems = uniqueLikedItems.size;

  // const totalLikedItems = likedItemCtx.items.reduce((totalNumbOfItems, item) => {
  //   return totalNumbOfItems + item.quantity;
  // }, 0);

  function handleShowLikedItem() {
    userProgressCtx.showLikedItem();
  }

  return (
    <div onClick={handleShowLikedItem} className="navFlexLiked">
      <p id="heart">
        <FaHeart size={16} />
      </p>
      <span>{totalLikedItems}</span>

      {/* <span className="space">
        <span>Favorites</span>
      </span> */}
    </div>
  );
}
