import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { LikedItemsContextProvider } from "./store/LikedItemsContext.jsx";

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
import Likes from "./components/Favorited/Likes.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <LikedItemsContextProvider>
          <AdsLine />
          <Header />
          <DealsLine />
          <MainContentCarousel />
          <MainCollection />
          <BestSellingProd />
          <Cart />
          <Likes />
          <Checkout />
          <UniqueItemsHolder />
          <MainCollection />
          <MainShopByDepartment />
          <ProsOfShopping />
          <FooterHolder />
        </LikedItemsContextProvider>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
