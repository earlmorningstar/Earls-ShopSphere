import { useState, useEffect } from "react";
import "./UniqueItems.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { GoPlus } from "react-icons/go";
import Gad6 from "../../assets/Gad6.png";
import PBiPhone from "../../assets/PBiPhone.png";
import NewFash1 from "../../assets/NewFash1.png";
import NewFash3 from "../../assets/NewFash3.png";

export default function UniqueItems() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [randNumb, setRandNumb] = useState(0);
  const [randAmount, setRandAmount] = useState(0);

  useEffect(() => {
    const newRandNumb = generateRandNumb();
    setRandNumb(newRandNumb);

    const newRandAmount = generateRandAmount();
    setRandAmount(newRandAmount);

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
    return Math.floor(Math.random() * (570 - 500 + 1)) + 500;
  }

  function generateRandAmount() {
    return Math.floor(Math.random() * (150 - 450 + 1)) + 450;
  }

  return (
    <div className="uniqueItem-parent">
      <div className="unique-img-holder">
        <img src={Gad6} alt="gadget 6" />
      </div>

      <div className="unique-infos">
        <h3>Product Title</h3>
        <h4>Product you'd love [Prod. Information]</h4>
        <div>
          <Stack spacing={1}>
            <Rating name="rating" defaultValue={0} precision={1} />
          </Stack>
        </div>
        <h4>${randAmount}</h4>
        <div className="uniqueCountdown">
          <p>Days: {countdown.days}</p>
          <p>Hours: {countdown.hours}</p>
          <p>Mins: {countdown.minutes}</p>
          <p>Secs: {countdown.seconds}</p>
        </div>
        <h4>Total Item Purchase: {randNumb} </h4>
        <button>
          <GoPlus />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
