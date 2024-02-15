import UniqueItems from "./UniqueItems";
import "./UniqueItems.css";

export default function UniqueItemsHolder() {
  return (
    <div>
      <h3 className="unique-section-heading">Unique Items</h3>
      <div>
        <UniqueItems />
      </div>
    </div>
  );
}
