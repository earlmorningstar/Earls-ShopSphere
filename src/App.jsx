// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";

import AdsLine from "./components/Adsline/Adsline.jsx";
import DealsLine from "./components/DealsLine/Dealsline.jsx";
import Header from "./components/Header/Header.jsx";
import MainContentCarousel from "./components/MainContent/MainContentCarousel.jsx";
import MainCollection from "./components/Collection/MainCollection.jsx";
import BestSellingProd from "./components/BestSellingProduct/BestSellingProd.jsx";
import ProsOfShopping from "./components/ProsOfShoppingWithUs/ProsOfShopping.jsx";
import UniqueItemsHolder from "./components/UniqueItems/UniqueItemsHolder.jsx";
import MainShopByDepartment from "./components/ShopByDept/MainShopByDepartment.jsx";
import FooterHolder from "./components/Footer/FooterHolder.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
// import ViewItem from "./components/ViewItem.jsx";
// import RootLayout from "./components/RootLayout.jsx";
// import ErrorPage from "./components/Error.js";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     // id: 'root',
//     // loader:
//     children: [

//     ]
//   }
// ]);

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <AdsLine />
        <Header />
        <DealsLine />
        <MainContentCarousel />
        <MainCollection />
        <BestSellingProd />
        <MainCollection />
        <Cart />
        <Checkout />
        <UniqueItemsHolder />
        <MainCollection />
        <MainShopByDepartment />
        <ProsOfShopping />
        <FooterHolder />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
