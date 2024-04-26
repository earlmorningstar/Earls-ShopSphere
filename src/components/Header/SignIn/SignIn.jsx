import "../OtherHitems.css";
import { FaUser } from "react-icons/fa6";

export default function SignIn() {
  return (
    <div className="navFlex">
      <p>
      <FaUser size={18} />
      </p>

      {/* <div className="space">
            <span>Sign In</span>
            <span>My Account</span>
            </div> */}
    </div>
  );
}
