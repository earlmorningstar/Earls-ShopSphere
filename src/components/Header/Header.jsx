// import { useState, useEffect } from "react";
import "./Header.css";
import Section from "./Sections/Section";
import Facilities from "./Facilities/Facilities";
import SearchBar from "../SearchBar/SearchBar";
import PrevPurchasedItems from "./FormelyAquiredProd/FormerlyAquiredProd";
import SignIn from "./SignIn/SignIn";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { FaGlobeAmericas } from "react-icons/fa";
// import { FaBars } from "react-icons/fa6";
// import { GrClose } from "react-icons/gr";
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="logo-icon">
        <span>ShopSphere</span>
        <FaGlobeAmericas size={30} 
        // color="#691E1E"
        // color="#FFFFFF"
        // color="#e3c485"
        // color='#a0937a'
         color="#acacac"/>
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
