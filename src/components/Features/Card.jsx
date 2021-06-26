import "./card.css";
const Card = ({ title, description, image, line }) => {
  return (
    <div className="card">
      <div className="image__wrapper">
        <img className="card__image" src={image} alt="brandRecognition" />
      </div>
      <div className="card__wrapper">
        <h3>{title} </h3>
        <p>{description}</p>
      </div>
      {console.log(line)}
      {line && <div className="card__line"></div>}
    </div>
  );
};

export default Card;
