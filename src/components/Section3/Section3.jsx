import "./Section3.css";
import Section3Card from "../Cards/Section3Card";
import scshot1 from "../../assets/1.png";
import scshot2 from "../../assets/2.png";
import scshot3 from "../../assets/3.png";
import scshot4 from "../../assets/4.png";

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
        <Section3Card>
          <img src={scshot1} alt="screenshot" />
        </Section3Card>
        <Section3Card>
          <img src={scshot2} alt="screenshot" />
        </Section3Card>
        <Section3Card>
          <img src={scshot3} alt="screenshot" />
        </Section3Card>
        <Section3Card>
          <img src={scshot4} alt="screenshot" />
        </Section3Card>
      </div>
    </div>
  );
};

export default Section3;
