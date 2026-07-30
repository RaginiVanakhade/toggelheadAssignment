import MaskGroup from "../assets/Mask Group 99.svg";

const HomeSection = () => {
  return (
    <div className="homemain">
      <div className="homeContainer">

        <div className="homeContent">
          <h4 className="homeHeading">Lorem ipsum</h4>

          <p className="homePara">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque temporibus fugiat aut eveniet. Quas quaerat ducimus repellat nisi quidem assumenda, temporibus perspiciatis, voluptates asperiores ex velit aspernatur, labore voluptate.
          </p>

          <button className="btn">Know More</button>
        </div>

        <div className="homeimg">
          <img src={MaskGroup} alt="homeimg" />
        </div>

      </div>
    </div>
  );
};

export default HomeSection;