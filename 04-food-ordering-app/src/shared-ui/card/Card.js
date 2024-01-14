// import mockData from "../mocks/mockResListData.json";
import "./Card.scss";
const Card = (props) => {
  //   const { restaurants } = mockData.data.cards;
  const { name, rating, locality, cuisine, image } = props.res.info;
  const {deliveryTime} = props.res.order;
  const itemList = cuisine.slice(0,4).map((list) => list.name).join(", ");
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={image.url}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{itemList}</h4>
      <h4>{locality.name}</h4>
      <h5>{rating.aggregate_rating}</h5>
      <h5> {deliveryTime}</h5>
    </div>
  );
};

export default Card;
