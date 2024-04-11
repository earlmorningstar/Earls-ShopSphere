import '../OtherHitems.css';

import { IoIosHeartEmpty } from "react-icons/io";

export default function FormelyAquiredProd() {
  return (
    <div className='navFlex'>
      <p className='heart'>
      <IoIosHeartEmpty size={18}/>
      </p>
      {/* <span className="space">
        <span>Formerly</span>
        <span>Acquired</span>
        <span>Product</span>
      </span> */}
    </div>
  );
}
