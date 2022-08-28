import "./Section1.css";
import Section1Card from "./Section1Card";

import image1 from "../../assets/image 1.jpg";
import image2 from "../../assets/image 2.jpg";

const Section1 = (props) => {
  return (
    <div className="section1">
      <h1>WELCOME TO LEARNING JAVASCRIPT</h1>
      <div className="cont">
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae esse vitae repellendus sequi, dolorem id amet possimus.
            Illum, ratione?
          </p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          esse vitae repellendus sequi, dolorem id amet possimus. Illum,
          ratione?
        </div>
        <div className="images-section">
          <Section1Card
            firstname={"Mfoniso"}
            surname={"UKPABIO"}
            img={image1}
          />
          <Section1Card firstname={"Saviour"} surname={"JOSHUA"} img={image2} />
        </div>
      </div>
    </div>
  );
};

export default Section1;
