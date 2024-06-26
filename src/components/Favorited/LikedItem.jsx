import { currrencyFormatter } from "../../Util/formatter";
import "./Likes.css";

export default function LikedItem({ name, price, onRemove }) {
  return (
    <li className="likedClass">
      <p>{name} - [Price: {currrencyFormatter.format(price)}] </p>
      {/* <span>Price: {currrencyFormatter.format(price)} </span> */}
      <button onClick={onRemove}>Remove</button>
    </li>
  );
}
