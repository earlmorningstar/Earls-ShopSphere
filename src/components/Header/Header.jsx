import { useState, useEffect } from "react";
import "./Header.css";
import Section from "./Sections/Section";
import Facilities from "./Facilities/Facilities";
import SearchBar from "../SearchBar/SearchBar";
import PrevPurchasedItems from "./FormelyAquiredProd/FormerlyAquiredProd";
import SignIn from "./SignIn/SignIn";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { FaBars, FaGlobeAmericas } from "react-icons/fa";

export default function Header() {
 

  return (
    <nav className="navbar">
      <div className="logo-icon">
        <span>ShopSphere</span>
        <FaGlobeAmericas size={30} color="#691E1E" />
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
