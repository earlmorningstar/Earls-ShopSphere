import UniqueItems from "./UniqueItems";
import "./UniqueItems.css";
import Gad6 from "../../assets/Gad6.png";
import Bag1 from "../../assets/Bag1.png";
import NewFash1 from "../../assets/NewFash1.png";
import NewFash3 from "../../assets/NewFash3.png";
import Gad7 from "../../assets/Gad7.png";
import Gad2 from "../../assets/Gad2.png";

export default function UniqueItemsHolder() {
  return (
    <div>
      <h3 className="unique-section-heading">Unique Items</h3>
      <div className="unique-grid">
        <UniqueItems showImages={Gad6}></UniqueItems>
        <UniqueItems showImages={Bag1}></UniqueItems>
        <UniqueItems showImages={NewFash1}></UniqueItems>
        <UniqueItems showImages={NewFash3}></UniqueItems>
        <UniqueItems showImages={Gad7}></UniqueItems>
        <UniqueItems showImages={Gad2}></UniqueItems>
      </div>
    </div>
  );
}
