// import "./OtherHitems.css";

import { IoIosHeartEmpty } from "react-icons/io";

export default function PrevPurchasedItems() {
  return (
    <div>
      <IoIosHeartEmpty />
      <span className="space">
        <span>Formerly</span>
        <span>Acquired</span>
        <span>Product</span>
      </span>
    </div>
  );
}
