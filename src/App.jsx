import AdsLine from "./components/Adsline/Adsline.jsx";
import DealsLine from "./components/DealsLine/Dealsline.jsx";
import Header from "./components/Header/Header.jsx";
import MainContentCarousel from "./components/MainContent/MainContentCarousel.jsx";
import MainCollection from "./components/Collection/MainCollection.jsx";
import BestSellingProd from "./components/BestSellingProduct/BestSellingProd.jsx";
import ProsOfShopping from "./components/ProsOfShoppingWithUs/ProsOfShopping.jsx";
import UniqueItems from "./components/UniqueItems/UniqueItems.jsx";


function App() {
  return (
    <>
      <AdsLine />
      <Header />
      <DealsLine />
      <MainContentCarousel />
      <MainCollection />
      <BestSellingProd />
      <MainCollection />
      <ProsOfShopping />
      <UniqueItems />
    </>
  );
}

export default App;
