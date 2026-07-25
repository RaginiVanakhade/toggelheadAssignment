import "../style/HomeS.css";
import HomeImg from "../assets/homeimg.webp";
import CustomButton from "./custom/CustomBtn";


const HomeSection = () => {
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
          <CustomButton text="Know More" />
        </div>

        <div className="home-image">
          <img src={HomeImg} alt="Hero" />
        </div>

      </div>
    </section>
  );
};

export default HomeSection;