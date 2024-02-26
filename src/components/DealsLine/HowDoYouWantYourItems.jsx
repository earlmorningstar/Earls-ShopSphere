import { MdArrowDropDown } from "react-icons/md";
import "./DealsLine.css";

export default function HowDoYouWantYourItems() {
  return (
    <div className="hdywyiParent">
      <div className="hdywyi">How do you want your items?</div>
      <MdArrowDropDown size={20} />
    </div>
  );
}
