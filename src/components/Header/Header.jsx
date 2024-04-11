import { useState, useEffect } from "react";
import "./Header.css";
import Section from "./Sections/Section";
import Facilities from "./Facilities/Facilities";
import SearchBar from "../SearchBar/SearchBar";
import PrevPurchasedItems from "./FormelyAquiredProd/FormerlyAquiredProd";
import SignIn from "./SignIn/SignIn";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
// import { FaGlobeAmericas } from "react-icons/fa";
import { SiCommerzbank } from "react-icons/si";
// import { FaBars } from "react-icons/fa6";
// import { GrClose } from "react-icons/gr";
// import { Link } from "react-router-dom";

export default function Header() {
  const [flipped, setFlipped] = useState(false);

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
    <nav className="navbar">
      <div className="logo-icon">
        <p className={`logo ${flipped ? "flipped" : ""}`}>
          <SiCommerzbank size={30} color="rgb(139 166 177 / 1)" />
        </p>
        <span>ShopSphere</span>
      </div>

      <Section />
      <Facilities />
      <SearchBar />
      <PrevPurchasedItems />
      <SignIn />
      <ShoppingCart />
    </nav>
  );
}

// color="#691E1E"
// color="#FFFFFF"
// color="#e3c485"
// color='#a0937a'
//  color="#acacac"
