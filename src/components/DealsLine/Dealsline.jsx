import PrimeBargains from "./PrimeBargains";
import HowDoYouWantYourItems from "./HowDoYouWantYourItems";
import DailyBargains from "./DailyBargains";
import StyleBargains from "./StyleBargains";
import GadgetBargains from "./GadgetBargains";
import Grocery from "./Grocery";
import PresentSuggestions from "./PresentSuggestions";
import ShopSphereBargains from "./ShopSphereBargains";
import './DealsLine.css';
 

export default function DealsLine() {
    return(
        <div className="dealsList">
        <HowDoYouWantYourItems />
        <PrimeBargains />
        <DailyBargains />
        <ShopSphereBargains />
        <StyleBargains />
        <GadgetBargains />
        <Grocery />
        <PresentSuggestions />
        </div>
    )
}