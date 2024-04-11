import { HiOutlineSearch } from "react-icons/hi";
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" 
      placeholder="Quick search.." 
      />
      <HiOutlineSearch 
      className="search-icon" 
      // color="#232f3e" 
      color="rgb(161, 188, 199)"
      size={35}/>
    </div>
  );
}
