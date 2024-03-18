import { useEffect, useState } from "react";
import CollectionProduct from "./CollectionProduct.jsx";
import "./MainCollection.css";

export default function MainCollection() {
  const [loadedFits, setLoadedFits] = useState([]);

  useEffect(() => {
    async function fetchFits() {
      const response = await fetch("http://localhost:3001/fits");

      if (response.ok) {
        //....
      }

      const fits = await response.json();
      setLoadedFits(fits);
    }

    fetchFits();
  }, []);

  return (
    <>
      <h3 className="section-heading">Featured Collection</h3>

      <div className="coll-Prod-flex">
        {loadedFits.map((fit) => (
          <CollectionProduct key={fit} fit={fit} />
        ))}
      </div>

      {/* <div className="coll-Prod-flex">
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
      </div> */}
    </>
  );
}
