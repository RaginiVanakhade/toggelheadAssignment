import { useEffect, useState } from "react";
import "../style/Slider.css";
import CustomButton from "./custom/CustomBtn";

const CardSlider = () => {
  const [posts, setPosts] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // Auto Slide
  useEffect(() => {
    if (posts.length === 0) return;

    const interval = setInterval(() => {
      setStart((prev) => {
        // Since we're showing 4 cards
        if (prev >= posts.length - 4) {
          return 0;
        }
        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [posts]);

  return (
    <section className="slider-section">
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${start * 25}%)`,
        }}
      >
        {posts.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title.slice(0, 20)}</h3>

            <p>{item.body.slice(0, 85)}...</p>

            <div className="card-btn">
              <CustomButton text="Know More"  className="slider-btn"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSlider;