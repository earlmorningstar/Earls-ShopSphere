import { useState, useEffect } from "react";
import "./Header.css";
import Section from "./Sections/Section";
import Facilities from "./Facilities/Facilities";
import SearchBar from "../SearchBar/SearchBar";
import SignIn from "./SignIn/SignIn";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { SiCommerzbank } from "react-icons/si";
import FavoritedProd from "./FavoritedProd/FavoritedProd";
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setFlipped(true);
    setTimeout(() => {
      setFlipped(false);
      setTimeout(() => {
        setFlipped(true);
        setTimeout(() => {
          setFlipped(false);
        }, 1000);
      }, 1000);
    }, 1000);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo-icon">
          <p className={`logo ${flipped ? "flipped" : ""}`}>
            <SiCommerzbank size={28} color="rgb(139 166 177 / 1)" />
          </p>
          <span>ShopSphere</span>
        </div>
        <div className="nav-links">
          <SearchBar />
          <Section />
          <Facilities />
          <FavoritedProd />
          <SignIn />
          <ShoppingCart />
        </div>
        <div className="hamburger-menu" onClick={toggleDropdown}>
          {isDropdownOpen ? <AiOutlineClose size={26} color="#ffffff" /> : <RxHamburgerMenu size={26} />}
        </div>
      </nav>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className='nav-link-dropDown'>
            <SearchBar className='root-nav-dropDown' />
            <Section className='root-nav-dropDown' />
            <Facilities className='root-nav-dropDown' />
            <FavoritedProd className='root-nav-dropDown' />
            <SignIn className='root-nav-dropDown' />
            <ShoppingCart className='root-nav-dropDown' />
          </div>
        </div>
      )}
    </>
  );
}




// import { useState, useEffect } from "react";
// import "./Header.css";
// import Section from "./Sections/Section";
// import Facilities from "./Facilities/Facilities";
// import SearchBar from "../SearchBar/SearchBar";
// import SignIn from "./SignIn/SignIn";
// import ShoppingCart from "./ShoppingCart/ShoppingCart";
// import { SiCommerzbank } from "react-icons/si";
// import FavoritedProd from "./FavoritedProd/FavoritedProd";

// import { RxHamburgerMenu } from 'react-icons/rx';
// import { AiOutlineClose } from "react-icons/ai";

// export default function Header() {

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [flipped, setFlipped] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   useEffect(() => {
//     setFlipped(true);
//     setTimeout(() => {
//       setFlipped(false);
//       setTimeout(() => {
//         setFlipped(true);
//         setTimeout(() => {
//           setFlipped(false);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, []);

//   return (
//     <><nav className="navbar">
//       <div className="logo-icon">
//         <p className={`logo ${flipped ? "flipped" : ""}`}>
//           <SiCommerzbank size={30} color="rgb(139 166 177 / 1)" />
//         </p>
//         <span>ShopSphere</span>
//       </div>
//       <div className="nav-links">
//       <SearchBar />
//         <Section />
//       <Facilities />
//       <FavoritedProd />
//       <SignIn />
//       <ShoppingCart />
//       </div>
      
//       <div className="hamburger-menu" onClick={toggleDropdown}>
//           {isDropdownOpen ? <AiOutlineClose size={26}/> : <RxHamburgerMenu size={26}/>}
//         </div>
//     </nav>
//     {isDropdownOpen && (
//         <div className="dropdown-menu">
//           <div className='nav-link-dropDown'>
//           <Section className='root-nav-dropDown'/>
//           <Facilities className='root-nav-dropDown' />
//           <SearchBar className='root-nav-dropDown' />
//           <FavoritedProd className='root-nav-dropDown' />
//           <SignIn className='root-nav-dropDown' />
//           <ShoppingCart className='root-nav-dropDown' />
//           </div>
//         </div>
//       )}
//     </>
    
//   );
// }

