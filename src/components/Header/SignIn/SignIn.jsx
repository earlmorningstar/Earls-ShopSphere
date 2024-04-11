import "../OtherHitems.css";
import { CiUser } from "react-icons/ci";

export default function SignIn() {
  return (
    <div className="navFlex">
      <p>
      <CiUser size={20} />
      </p>

      {/* <div className="space">
            <span>Sign In</span>
            <span>My Account</span>
            </div> */}
    </div>
  );
}
