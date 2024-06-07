import useHttp from "../../../hooks/useHttp.js";
import Error from "../Error.jsx";
import CollectionProduct from "./CollectionProduct.jsx";
import "./MainCollection.css";

const requestConfig = {};

export default function MainCollection() {
  const { data: loadedFits, isLoading, error } = useHttp(`${import.meta.env.VITE_API_URL}/fits`, requestConfig, []);

  if (isLoading) {
    return <p>Fetching Items...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch items" message={error} />;
  }

  return (
    <>
      <h3 className="section-heading">Featured Collection</h3>
      <div className="coll-Prod-flex">
        {loadedFits.map((fit) => (
          <CollectionProduct key={fit.id} fit={fit} />
        ))}
      </div>
    </>
  );
}






// import useHttp from "../../../hooks/useHttp.js";
// import Error from "../Error.jsx";
// import CollectionProduct from "./CollectionProduct.jsx";
// import "./MainCollection.css";

// const requestConfig = {};

// // const apiUrl = process.env.REACT_APP_API_URL;

// export default function MainCollection() {
//   const {
//     data: loadedFits,
//     isLoading,
//     error,
//   } = useHttp((`${import.meta.env.VITE_API_URL}/fits`), requestConfig, []);

//   if (isLoading) {
//     return <p>Fetching Items...</p>;
//   }

//   if (error) {
//     return <Error title="Failed to fetch items" message={error} />;
//   }

//   return (
//     <>
//       <h3 className="section-heading">Featured Collection</h3>

//       <div className="coll-Prod-flex">
//         {loadedFits.map((fit) => (
//           <CollectionProduct key={fit.id} fit={fit} />
//         ))}
//       </div>
//     </>
//   );
// }



// import useHttp from "../../../hooks/useHttp.js";
// import Error from "../Error.jsx";
// import CollectionProduct from "./CollectionProduct.jsx";
// import "./MainCollection.css";

// const requestConfig = {};

// export default function MainCollection() {
//   const {
//     data: loadedFits,
//     isLoading,
//     error,
//   } = useHttp("http://localhost:3001/fits", requestConfig, []);

//   if (isLoading) {
//     return <p>Fetching Items...</p>;
//   }

//   if (error) {
//     return <Error title="Failed to fetch items" message={error} />;
//   }

//   return (
//     <>
//       <h3 className="section-heading">Featured Collection</h3>

//       <div className="coll-Prod-flex">
//         {loadedFits.map((fit) => (
//           <CollectionProduct key={fit.id} fit={fit} />
//         ))}
//       </div>
//     </>
//   );
// }
