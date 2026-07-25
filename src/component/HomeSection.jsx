import { useState } from "react";
import "../style/HomeS.css";
import HomeImg from "../assets/homeimg.webp";
import CustomButton from "./custom/CustomBtn";

const HomeSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="home">
      <div className="home-container">

        <div className="home-content">
          <h1>Lorem ipsum</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum.
          </p>

          {showMore && (
            <p className="more-text">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. It has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          )}

          <CustomButton
            text={showMore ? "Show Less" : "Know More"}
            onClick={() => setShowMore(!showMore)}
          />
        </div>

        <div className="home-image">
          <img src={HomeImg} alt="Hero" />
        </div>

      </div>
    </section>
  );
};

export default HomeSection;