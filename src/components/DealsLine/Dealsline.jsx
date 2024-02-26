import { useState } from "react";
import PrimeBargains from "./PrimeBargains";
import HowDoYouWantYourItems from "./HowDoYouWantYourItems";
import DailyBargains from "./DailyBargains";
import StyleBargains from "./StyleBargains";
import GadgetBargains from "./GadgetBargains";
import Grocery from "./Grocery";
import PresentSuggestions from "./PresentSuggestions";
import ShopSphereBargains from "./ShopSphereBargains";
import DropDownOption from "./DropDownOption";
import "./DealsLine.css";

export default function DealsLine() {
  const [openDropDownOption, setOpenDropDownOption] = useState(false);

  return (
    <div className="dealsList">
      <span onClick={() => setOpenDropDownOption((prev) => !prev)}>
        <HowDoYouWantYourItems />
      </span>

      {openDropDownOption && <DropDownOption />}
      <PrimeBargains />
      {/* <DailyBargains /> */}
      <ShopSphereBargains />
      <StyleBargains />
      <GadgetBargains />
      {/* <Grocery /> */}
      {/* <PresentSuggestions /> */}
    </div>
  );
}
