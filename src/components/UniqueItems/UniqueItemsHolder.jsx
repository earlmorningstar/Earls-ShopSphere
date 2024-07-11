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
          <UniqueItems key={uniqueItem.id} uniqueItem={uniqueItem} />
        ))}
      </div>
    </div>
  );
}

// import UniqueItems from "./UniqueItems";
// import "./UniqueItems.css";
// import { useState, useEffect } from "react";

// export default function UniqueItemsHolder() {
//   const [loadedUniqueItems, setLoadedUniqueItems] = useState([]);

//   useEffect(() => {
//     async function fetchUniqueItems() {
//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/uniqueItem`
//       );
//       if (response.ok) {
//         const uniqueItems = await response.json();
//         setLoadedUniqueItems(uniqueItems);
//       } else {
//         console.error("Failed to fetch unique items");
//       }
//     }

//     fetchUniqueItems();
//   }, []);

//   return (
//     <div>
//       <h3 className="unique-section-heading">Unique Items</h3>
//       <div className="unique-grid">
//         {loadedUniqueItems.map((uniqueItem) => (
//           <UniqueItems key={uniqueItem.id} uniqueItem={uniqueItem} />
//         ))}
//       </div>
//     </div>
//   );
// }

// import UniqueItems from "./UniqueItems";
// import "./UniqueItems.css";

// import { useState, useEffect } from "react";

// // const apiUrl = process.env.REACT_APP_API_URL;

// export default function UniqueItemsHolder() {
//   const [loadedUniqueItems, setLoadedUniqueItems] = useState([]);

//   useEffect(() => {
//     async function fetchUniqueItems() {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/uniqueItem`);

//       if (response.ok) {
//         //....
//       }

//       const uniqueItem = await response.json();
//       setLoadedUniqueItems(uniqueItem);
//     }

//     fetchUniqueItems();
//   }, []);

//   return (
//     <div>
//       <h3 className="unique-section-heading">Unique Items</h3>
//       <div className="unique-grid">
//         {loadedUniqueItems.map((uniqueItem) => (
//           <UniqueItems key={uniqueItem.id} uniqueItem={uniqueItem} />
//         ))}
//       </div>
//     </div>
//   );
// }


