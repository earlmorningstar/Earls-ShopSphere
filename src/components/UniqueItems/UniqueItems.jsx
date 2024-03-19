import { useState, useEffect, useContext } from "react";
import { currrencyFormatter } from "../../Util/formatter.js";
import CartContext from "../../store/CartContext";
import "./UniqueItems.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { GoPlus } from "react-icons/go";

export default function UniqueItems({ uniqueItem }) {
  const cartCtx = useContext(CartContext);

  function handleAddItemToCart() {
    cartCtx.addItem(uniqueItem);
  }

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [randNumb, setRandNumb] = useState(0);
  // const [randAmount, setRandAmount] = useState(0);

  useEffect(() => {
    const newRandNumb = generateRandNumb();
    setRandNumb(newRandNumb);

    // const newRandAmount = generateRandAmount();
    // setRandAmount(newRandAmount);

    const targetDate = new Date("2024-12-31T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown({ days, hours, minutes, seconds });
      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function generateRandNumb() {
    return Math.floor(Math.random() * (1000 - 400 + 1)) + 400;
  }

  // function generateRandAmount() {
  //   return Math.floor(Math.random() * (150 - 450 + 1)) + 450;
  // }

  return (
    <div className="uniqueItem-parent">
      <div className="unique-img-holder">
        <img
          src={`http://localhost:3001/${uniqueItem.image}`}
          alt={uniqueItem.item_name}
        />
      </div>

      <div className="unique-infos">
        <h3>{uniqueItem.item_name}</h3>
        <h4>{uniqueItem.description}</h4>
        <div>
          <Stack spacing={1}>
            <Rating name="rating" defaultValue={0} precision={1} />
          </Stack>
        </div>
        <h4>{currrencyFormatter.format(uniqueItem.price)}</h4>
        <div className="uniqueCountdown">
          <p>Days: {countdown.days}</p>
          <p>Hours: {countdown.hours}</p>
          <p>Mins: {countdown.minutes}</p>
          <p>Secs: {countdown.seconds}</p>
        </div>
        <h5>
          Total Item Purchase:<i> {randNumb}</i>
        </h5>
        <button onClick={handleAddItemToCart}>
          <GoPlus />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
