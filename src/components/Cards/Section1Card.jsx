import "./Section1Card.css";

const Section1Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="profileImage" />
      <div className="profile-details">
        <h3>{props.firstname}</h3>
        <h2>{props.surname}</h2>
      </div>
    </div>
  );
};

export default Section1Card;
