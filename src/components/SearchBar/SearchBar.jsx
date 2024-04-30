import { HiOutlineSearch } from "react-icons/hi";
import "./SearchBar.css";
// import { useState } from "react";

export default function SearchBar({ items }) {
  // const [searchQuery, setSearchQuery] = useState("");

  // const filteredItems = items.filter((item) =>
  //   item.item_name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Quick search.."
        // value={searchQuery}
        // onChange={(e) => setSearchQuery(e.target.value)}
      />
      <HiOutlineSearch
        className="search-icon"
        // color="#232f3e"
        color="rgb(161, 188, 199)"
        size={35}
      />

      {/* <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
