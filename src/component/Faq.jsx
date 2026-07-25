import { useState } from "react";
import "../style/FaqC.css";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    question:
      "Will investors be able to have multiple Common Account Numbers?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "How does an investor gain access to MF Utility?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const Faq = () => {
  const [active, setActive] = useState(1);

  const toggleFaq = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-heading">Frequently Asked Questions</h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFaq(index)}
            >
              <h3>{item.question}</h3>

              <button className="faq-btn">
                {active === index ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}
              </button>
            </div>

            <div
              className={`faq-answer ${
                active === index ? "show" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;