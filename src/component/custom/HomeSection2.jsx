
import { SlCalender } from "react-icons/sl";
import "../../style/HomeS2.css"

const examData = [
  {
    id: 1,
    date: "02th October 2014",
    title: "Level 1 exam",
    description: "",
  },
  {
    id: 2,
    date: "Nov-Dec 2016",
    title: "Level 2",
    description: "Lorem Ipsum\nLorem Ipsum",
  },
  {
    id: 3,
    date: "Ongoing this year",
    title: "Level 3 (Grad)",
    description: "",
  },
];

const HomeSection2 = () => {
  return (
    <section className="exam-section">
      <div className="exam-container">

        {/* Left Side */}
        <div className="exam-heading">
          <h2>Upcoming Examinations</h2>
          <p>
            Enquire about the examination &
            <br />
            register for the exams
          </p>
        </div>

        <div className="divider"></div>

        {/* Right Side */}
        <div className="exam-list">
          {examData.map((exam) => (
            <div className="exam-card" key={exam.id}>
              <div className="exam-icon">
                <SlCalender />
              </div>

              <div className="exam-info">
                <h4>{exam.date}</h4>
                <p>{exam.title}</p>

                {exam.description && (
                  <span>
                    {exam.description.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeSection2;