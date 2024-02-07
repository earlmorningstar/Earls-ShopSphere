import "./MainContentCarousel.css";


export default function MainContentOppositeSide({
  imageSrc,
  imageAlt,
  children,
}) {
  return (
    <div className="main-content-opposite-side">
      <div >{children}</div>
      <div className="image-container">
        <img className="mcosImage" src={imageSrc} />
      </div>
    </div>
  );
}
