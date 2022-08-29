import Section4Card from "./Section4Card";
import './Section4.css'

const Section4 = (props) => {
  return (
    <div className="section-4">
      <h4> APP PRICING </h4>
      <div className="section4-cards">
        <Section4Card description="premium" plan="5 MONTHS" price="$700" />
        <Section4Card description="premium" plan="5 MONTHS" price="$700" />
        <Section4Card description="premium" plan="5 MONTHS" price="$700" />
      </div>
    </div>
  );
};

export default Section4;
