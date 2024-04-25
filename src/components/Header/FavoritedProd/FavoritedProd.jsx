import { useContext } from "react";
import UserProgressContext from "../../../store/UserProgressContext";
import LikedItemsContext from "../../../store/LikedItemsContext";

import "../OtherHitems.css";
import { IoIosHeartEmpty } from "react-icons/io";

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
    <div onClick={handleShowLikedItem} className="navFlex">
      <p className="heart">
        <IoIosHeartEmpty size={18} />
      </p>
      <span>{totalLikedItems}</span>
      {/* <span className="space">
        <span>Formerly</span>
        <span>Acquired</span>
        <span>Product</span>
      </span> */}
    </div>
  );
}
