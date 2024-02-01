import { HiOutlineSearch } from "react-icons/hi";
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search anything..." />
      <HiOutlineSearch className="search-icon" color="#232f3e" size={35}/>
    </div>
  );
}
