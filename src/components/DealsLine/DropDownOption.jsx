import { MdOutlineLocalShipping } from "react-icons/md";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { HiOutlineInboxIn } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";

export default function DropDownOption() {
  return (
    <div className="dropDownOption">
      <div className="delivery selection-set">
        <div className="each-selection-set">
          <span>
            <MdOutlineLocalShipping size={30} />
          </span>
          <p>Shipping</p>
        </div>

        <div className="each-selection-set">
          <span>
            <LiaTruckPickupSolid size={30} />
          </span>
          <p>Pickup</p>
        </div>

        <div className="each-selection-set">
          <span>
            <HiOutlineInboxIn size={30} />
          </span>
          <p>Delivery</p>
        </div>
      </div>
      <div className="adress-parent">
        <div>
          <CiLocationOn size={18} />
          <div className="address-title">
            <p>Input a shipping address for delivery</p>
            <span>Earl's ShopSphere Address, ESA 01234</span>
          </div>
        </div>
        <button>Insert Address</button>
      </div>

      <div className="adress-parent">
        <div>
          <AiOutlineHome size={18} />
          <div className="address-title">
            <p>Earl's ShopSphere HeadQuarter Address</p>
            <span>ESA 01234, World Country, All Continent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
