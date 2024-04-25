import { currrencyFormatter } from "../../Util/formatter.js";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { GoPlus } from "react-icons/go";

export default function BestSellingCarousel({ gadget }) {
  const cartCtx = useContext(CartContext);

  function handleAddItemToCart() {
    cartCtx.addItem(gadget);
  }

  return (
    <div className="bestSelling-holdingDiv">
      <div className="bestSelling-ImageParent">
        <img
          src={`http://localhost:3001/${gadget.image}`}
          alt={gadget.item_name}
        />
      </div>
      <div className="bestSelling-info-rating-price">
        <h4>{gadget.item_name}</h4>
        <span>{gadget.description}</span>
        <div>
          <Stack spacing={1}>
            <Rating name="rating" defaultValue={0} precision={1} />
          </Stack>
        </div>

        <div className="bs-span-btn">
          <span>{currrencyFormatter.format(gadget.price)}</span>
          <button>View Item</button>
          <button onClick={handleAddItemToCart}>
            <GoPlus size={15} color="#ffffff" /> Add
          </button>
        </div>
      </div>
    </div>

    // <div className="best-selling-slider-container">
  );
}
