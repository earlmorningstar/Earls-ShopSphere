import { LiaShippingFastSolid } from "react-icons/lia";
import { IoGiftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { PiPercent } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./ProsOfShopping.css";

export default function ProsOfShopping() {
  return (
    <div className="pros-holder">
      <div className="each-pros">
        <div>
          <LiaShippingFastSolid size={30} />
        </div>
        <div className="pros-info">
          <h3>No-cost delivery</h3>
          <span>Free shipping for orders above $200</span>
        </div>
      </div>

      <div className="each-pros">
        <div>
          <IoGiftOutline size={30} />
        </div>
        <div className="pros-info">
          <h3>Daily Surprice Deals</h3>
          <span>Enjoy savings of up to 25% off</span>
        </div>
      </div>

      <div className="each-pros">
        <div>
          <BiSupport size={30} />
        </div>
        <div className="pros-info">
          <h3>Assistance available round the clock</h3>
          <span>Purchase guided by a specialist</span>
        </div>
      </div>

      <div className="each-pros">
        <div>
          <PiPercent size={30} />
        </div>
        <div className="pros-info">
          <h3>Budget-friendly cost</h3>
          <span>Obtain pricing directly from the factory</span>
        </div>
      </div>

      <div className="each-pros">
        <div>
          <RiSecurePaymentLine size={30} />
        </div>
        <div className="pros-info">
          <h3>Secure Payments</h3>
          <span>Fully safeguarded transactions</span>
        </div>
      </div>
    </div>
  );
}
