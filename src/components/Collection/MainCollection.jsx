import CollectionProduct from "./CollectionProduct.jsx";
import "./MainCollection.css";

export default function MainCollection() {
  return (
    <>
      <h3 className="section-heading">Featured Collection</h3>
      <div className="coll-Prod-flex">
        <CollectionProduct />
        <CollectionProduct />
        <CollectionProduct />
        <CollectionProduct />
        <CollectionProduct />
        <CollectionProduct />
        <CollectionProduct />
        <CollectionProduct />
        <CollectionProduct />
        <CollectionProduct />
        <CollectionProduct />
        <CollectionProduct />
      </div>
    </>
  );
}
