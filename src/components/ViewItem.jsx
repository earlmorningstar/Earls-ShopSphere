import { useContext } from "react";
import CartContext from "../store/CartContext";

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { currrencyFormatter } from "../Util/formatter";


export default function ViewItem({ fit }) {
  const cartCtx = useContext(CartContext);

  function handleAddItemToCart() {
    cartCtx.addItem(fit);
  }

 

  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
   
    fetch(`http://localhost:3001/fits/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Error fetching item:", error));
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div className="item-container">
      <h2>{item.item_name}</h2>
      <img src={`http://localhost:3001/${item.image}`} alt={item.item_name} />
      <p>{currrencyFormatter.format(item.price)}</p>
      <p>{item.description}</p>
      <Link to="/">Back to Collection</Link>
    </div>
  );
}
