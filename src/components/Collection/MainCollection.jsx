import useHttp from "../../../hooks/useHttp.js";
import Error from "../Error.jsx";
import CollectionProduct from "./CollectionProduct.jsx";
import "./MainCollection.css";

const requestConfig = {};

export default function MainCollection() {
  const {
    data: loadedFits,
    isLoading,
    error,
  } = useHttp("http://localhost:3001/fits", requestConfig, []);

  if (isLoading) {
    return <p>Fetching Items...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch items" message={error} />;
  }

  // useEffect(() => {
  //   async function fetchFits() {
  //     const response = await fetch("http://localhost:3001/fits");

  //     if (response.ok) {
  //       //....
  //     }

  //     const fits = await response.json();
  //     setLoadedFits(fits);
  //   }

  //   fetchFits();
  // }, []);

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
