import "./Section3.css";
import Section3Card from "./Section3Card";

const Section3 = (props) => {
  return (
    <div className="section-3">
      <h1>SCREENSHOTS OF THE APP</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi
        dignissimos tenetur veniam. Blanditiis unde illo corrupti. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Rem quasi dignissimos
        tenetur veniam. Blanditiis unde illo corrupti.
      </p>
      <div className="cards">
        <Section3Card></Section3Card>
        <Section3Card></Section3Card>
        <Section3Card></Section3Card>
        <Section3Card></Section3Card>
      </div>
    </div>
  );
};

export default Section3;
