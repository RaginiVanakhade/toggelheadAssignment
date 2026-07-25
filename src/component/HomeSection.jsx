import { useState, useEffect } from "react";
import "../style/Home.css";
import HomeImg from "../assets/Homeimg.webp";
import CustomButton from "./custom/CustomBtn";
import One from "../assets/One.jpg"
import Two from "../assets/Two.jpg"
import Three from "../assets/Three.jpg"

const bgImages = [
 One, Two, Three
];

const HomeSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="home"
      style={{
        backgroundImage: `url(${bgImages[current]})`,
      }}
    >
      <div className="overlay"></div>

      <div className="home-container">
        <div className="home-content">
          <h1>Lorem ipsum</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>

          {showMore && (
            <p className="more-text">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. It has been the industry's standard dummy text ever
              since the 1500s.
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