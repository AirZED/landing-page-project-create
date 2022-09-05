import Button from "../Button";
import "./Section4Card.css";

const Section4Card = (props) => {
  return (
    <div className="card-cont">
      <div className="description">
        <h3 className="plan">{props.plan}</h3>
        <h2>{props.price}</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nam ut,
        sequi cupiditate libero expedita!
      </p>
      <Button bgcolor="#64c8e5" color="#fff">
        SELECT PLAN
      </Button>
    </div>
  );
};

export default Section4Card;
