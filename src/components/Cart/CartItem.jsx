import { currrencyFormatter } from "../../Util/formatter";
import './Cart.css';

export default function CartItem({
    name,
    quantity,
    price,
    onDecrease,
    onIncrease,
  }) {
    return (
      <li className="cart-item">
        <p className="cart-price">
          {name} - {quantity} x {currrencyFormatter.format(price)}
        </p>
        <p className="cart-item-actions">
          <button onClick={onDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={onIncrease}>+</button>
        </p>
      </li>
    );
  }