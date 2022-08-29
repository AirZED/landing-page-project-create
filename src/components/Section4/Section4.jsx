import Section4Card from "./Section4Card";
import './Section4.css'

const Section4 = (props) => {
  return (
    <div className="section-4">
      <h4> APP PRICING </h4>
      <div className="section4-cards">
        <Section4Card description="premium" plan="5 MONTHS" price="$700" />
        <Section4Card description="standard" plan="10 MONTHS" price="$2000" />
        <Section4Card description="VIP" plan="2 MONTHS" price="$90" />
      </div>
    </div>
  );
};

export default Section4;
