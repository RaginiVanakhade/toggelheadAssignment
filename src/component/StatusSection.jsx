import "../style/Stutas.css";
import CountUp from "../component/CountUp";

const stats = [
  {
    id: 1,
    label: "Lorem ipsum",
    number: 123,
    suffix: "+",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet..."
  },
  {
    id: 2,
    label: "Lorem ipsum",
    number: 12,
    suffix: "+",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet..."
  },
  {
    id: 3,
    label: "Lorem ipsum",
    number: 12,
    suffix: "+",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet..."
  },
  {
    id: 4,
    label: "Lorem ipsum",
    number: 123,
    suffix: "",
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet..."
  }
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item) => (
          <div className="stat-card" key={item.id}>
            <span className="stat-label">{item.label}</span>

            <h2 className="stat-number">
              <CountUp end={item.number} suffix={item.suffix} />
            </h2>

            <h4 className="stat-title">{item.title}</h4>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;