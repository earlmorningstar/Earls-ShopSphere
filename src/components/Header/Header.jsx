import { useState, useEffect } from "react";
import "./Header.css";
import Section from "./Sections/Section";
import Facilities from "./Facilities/Facilities";
import SearchBar from "../SearchBar/SearchBar";
import SignIn from "./SignIn/SignIn";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { SiCommerzbank } from "react-icons/si";
import FavoritedProd from "./FavoritedProd/FavoritedProd";

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
      <FavoritedProd />
      <SignIn />
      <ShoppingCart />
    </nav>
  );
}

