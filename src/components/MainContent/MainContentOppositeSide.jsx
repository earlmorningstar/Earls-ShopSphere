import "./MainContentCarousel.css";

export default function MainContentOppositeSide({
  imageSrc,
  imageAlt,
  titleType,
  prodTitle,
  prodText,
}) {
  return (
    <>
      <div className="main-content-opposite-side">
        <div className="alternate-content">
          <h3>{titleType}</h3>
          <h4>{prodTitle}</h4>
          <p>{prodText}</p>
        </div>
        <div className="image-container">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </>
  );
}
