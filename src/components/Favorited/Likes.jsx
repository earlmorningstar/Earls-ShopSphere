import { useContext } from "react";
import LikedItemsContext from "../../store/LikedItemsContext";
import UserProgressContext from "../../store/UserProgressContext.jsx";

import Button from "../../UserInterface/Button.jsx";
// import { currrencyFormatter } from "../../Util/formatter";
import Modal from "../../UserInterface/Modal.jsx";

import LikedItem from "./LikedItem.jsx";
import './Likes.css';
// import { useFavorites } from "../../store/LikedItemsContext";

export default function Likes() {
  const likedItemCtx = useContext(LikedItemsContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseLikedItem() {
    userProgressCtx.hideLikedItem();
  }

  return (
    <Modal
      className="likes"
      open={userProgressCtx.progress === "favorited"}
      onClose={
        userProgressCtx.progress === "favorited" ? handleCloseLikedItem : null
      }
    >
      <h2>Your Favorited Items</h2>
      <hr />
      <ul>
        {likedItemCtx.items.map((item) => (
          <LikedItem 
          key={item.id} 
          name={item.item_name} 
          price={item.price} 
          onRemove={() => likedItemCtx.removeLikedItem(item.id)}
          />
        ))}
      </ul>
      <p className="modal-actions">
        {likedItemCtx.items.length <= 0 && (
            <span>You don't have any favorited items to view.</span>
        )}
        <Button onClick={handleCloseLikedItem}>Close</Button>
      </p>
    </Modal>
  );
}
