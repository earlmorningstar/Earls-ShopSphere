import UniqueItems from "./UniqueItems";
import "./UniqueItems.css";

import { useState, useEffect } from "react";

export default function UniqueItemsHolder() {
  const [loadedUniqueItems, setLoadedUniqueItems] = useState([]);

  useEffect(() => {
    async function fetchUniqueItems() {
      const response = await fetch("http://localhost:3001/uniqueItem");

      if (response.ok) {
        //....
      }

      const uniqueItem = await response.json();
      setLoadedUniqueItems(uniqueItem);
    }

    fetchUniqueItems();
  }, []);

  return (
    <div>
      <h3 className="unique-section-heading">Unique Items</h3>
      <div className="unique-grid">
        {loadedUniqueItems.map((uniqueItem) => (
          <UniqueItems key={uniqueItem} uniqueItem={uniqueItem} />
        ))}
      </div>
    </div>
  );
}
