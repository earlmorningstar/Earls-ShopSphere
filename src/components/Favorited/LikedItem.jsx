import { currrencyFormatter } from "../../Util/formatter";
import './Likes.css';


export default function LikedItem({ name, price, onRemove }) {
  return (
    <li>
      <p>{name}</p>
      <span>{currrencyFormatter.format(price)}</span>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
}
