import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Slider from "react-slick";
import { GoPlus } from "react-icons/go";
import Gad12 from "../../assets/Gad12.PNG";
import Gad8 from "../../assets/Gad8.PNG";
import PbHeadPhone from "../../assets/PBheadphones.PNG";
import PbGaming from "../../assets/PBpcgaming.PNG";

export default function BestSellingCarousel() {
  const bestSellingCarouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="best-selling-slider-container">
      <Slider {...bestSellingCarouselSettings}>
        <div className="bestSelling-holdingDiv">
          <div className="bestSelling-ImageParent">
            <img src={Gad12} alt="bs-img" />
          </div>
          <div className="bestSelling-info-rating-price">
            <h4>
              [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro, error! Minus itaque
            </h4>
            <div>
              <Stack spacing={1}>
                <Rating name="rating" defaultValue={0} precision={1} />
              </Stack>
            </div>

            <div className="bs-span-btn">
              <span>$200</span>
              <button>
                <GoPlus size={15} color="#ffffff" /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="bestSelling-holdingDiv">
          <div className="bestSelling-ImageParent">
            <img src={Gad8} alt="bs-img" />
          </div>
          <div className="bestSelling-info-rating-price">
            <h4>
              [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro, error! Minus itaque
            </h4>
            <div>
              <Stack spacing={1}>
                <Rating name="rating" defaultValue={0} precision={1} />
              </Stack>
            </div>
            <div className="bs-span-btn">
              <span>$200</span>
              <button>
                <GoPlus size={15} color="#ffffff" /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="bestSelling-holdingDiv">
          <div className="bestSelling-ImageParent">
            <img src={PbHeadPhone} alt="bs-img" />
          </div>
          <div className="bestSelling-info-rating-price">
            <h4>
              [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro, error! Minus itaque
            </h4>
            <div>
              <Stack spacing={1}>
                <Rating name="rating" defaultValue={0} precision={1} />
              </Stack>
            </div>
            <div className="bs-span-btn">
              <span>$200</span>
              <button>
                <GoPlus size={15} color="#ffffff" /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="bestSelling-holdingDiv">
          <div className="bestSelling-ImageParent">
            <img src={PbGaming} alt="bs-img" />
          </div>
          <div className="bestSelling-info-rating-price">
            <h4>
              [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro, error! Minus itaque
            </h4>
            <div>
              <Stack spacing={1}>
                <Rating name="rating" defaultValue={0} precision={1} />
              </Stack>
            </div>
            <div className="bs-span-btn">
              <span>$200</span>
              <button>
                <GoPlus size={15} color="#ffffff" /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="bestSelling-holdingDiv">
          <div className="bestSelling-ImageParent">
            <img src={Gad12} alt="bs-img" />
          </div>
          <div className="bestSelling-info-rating-price">
            <h4>
              [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro, error! Minus itaque
            </h4>
            <div>
              <Stack spacing={1}>
                <Rating name="rating" defaultValue={0} precision={1} />
              </Stack>
            </div>
            <div className="bs-span-btn">
              <span>$200</span>
              <button>
                <GoPlus size={15} color="#ffffff" /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="bestSelling-holdingDiv">
          <div className="bestSelling-ImageParent">
            <img src={Gad12} alt="bs-img" />
          </div>
          <div className="bestSelling-info-rating-price">
            <h4>
              [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro, error! Minus itaque
            </h4>
            <div>
              <Stack spacing={1}>
                <Rating name="rating" defaultValue={0} precision={1} />
              </Stack>
            </div>
            <div className="bs-span-btn">
              <span>$200</span>
              <button>
                <GoPlus size={15} color="#ffffff" /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="bestSelling-holdingDiv">
          <div className="bestSelling-ImageParent">
            <img src={Gad12} alt="bs-img" />
          </div>
          <div className="bestSelling-info-rating-price">
            <h4>
              [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro, error! Minus itaque
            </h4>
            <div>
              <Stack spacing={1}>
                <Rating name="rating" defaultValue={0} precision={1} />
              </Stack>
            </div>
            <div className="bs-span-btn">
              <span>$200</span>
              <button>
                <GoPlus size={15} color="#ffffff" /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="bestSelling-holdingDiv">
          <div className="bestSelling-ImageParent">
            <img src={Gad12} alt="bs-img" />
          </div>
          <div className="bestSelling-info-rating-price">
            <h4>
              [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro, error! Minus itaque
            </h4>
            <div>
              <Stack spacing={1}>
                <Rating name="rating" defaultValue={0} precision={1} />
              </Stack>
            </div>
            <div className="bs-span-btn">
              <span>$200</span>
              <button>
                <GoPlus size={15} color="#ffffff" /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="bestSelling-holdingDiv">
          <div className="bestSelling-ImageParent">
            <img src={Gad12} alt="bs-img" />
          </div>
          <div className="bestSelling-info-rating-price">
            <h4>
              [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro, error! Minus itaque
            </h4>
            <div>
              <Stack spacing={1}>
                <Rating name="rating" defaultValue={0} precision={1} />
              </Stack>
            </div>
            <div className="bs-span-btn">
              <span>$200</span>
              <button>
                <GoPlus size={15} color="#ffffff" /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="bestSelling-holdingDiv">
          <div className="bestSelling-ImageParent">
            <img src={Gad12} alt="bs-img" />
          </div>
          <div className="bestSelling-info-rating-price">
            <h4>
              [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro, error! Minus itaque
            </h4>
            <div>
              <Stack spacing={1}>
                <Rating name="rating" defaultValue={0} precision={1} />
              </Stack>
            </div>
            <div className="bs-span-btn">
              <span>$200</span>
              <button>
                <GoPlus size={15} color="#ffffff" /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="bestSelling-holdingDiv">
          <div className="bestSelling-ImageParent">
            <img src={Gad12} alt="bs-img" />
          </div>
          <div className="bestSelling-info-rating-price">
            <h4>
              [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro, error! Minus itaque
            </h4>
            <div>
              <Stack spacing={1}>
                <Rating name="rating" defaultValue={0} precision={1} />
              </Stack>
            </div>
            <div className="bs-span-btn">
              <span>$200</span>
              <button>
                <GoPlus size={15} color="#ffffff" /> Add
              </button>
            </div>
          </div>
        </div>

        <div className="bestSelling-holdingDiv">
          <div className="bestSelling-ImageParent">
            <img src={Gad12} alt="bs-img" />
          </div>
          <div className="bestSelling-info-rating-price">
            <h4>
              [Product Info] Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Porro, error! Minus itaque
            </h4>
            <div>
              <Stack spacing={1}>
                <Rating name="rating" defaultValue={0} precision={1} />
              </Stack>
            </div>
            <div className="bs-span-btn">
              <span>$200</span>
              <button>
                <GoPlus size={15} color="#ffffff" /> Add
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
