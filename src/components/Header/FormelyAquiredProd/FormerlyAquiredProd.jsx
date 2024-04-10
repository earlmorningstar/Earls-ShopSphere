import '../OtherHitems.css';

import { IoIosHeartEmpty } from "react-icons/io";

export default function FormelyAquiredProd() {
  return (
    <div className='navFlex'>
      <IoIosHeartEmpty size={18}/>
      <span className="space">
        <span>Formerly</span>
        <span>Acquired</span>
        <span>Product</span>
      </span>
    </div>
  );
}
