import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={handleIsActive}>
        <div>{question}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>

      {isActive && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

export default Accordion;
