import { useState } from "react";

import FaqStyles from "../styles/FaqStyles.module.css";

const Accordion = ({ question, answer, idx }) => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={FaqStyles.accordionItem} key={idx}>
      <div className={FaqStyles.accordionTitle} onClick={handleIsActive}>
        <div>
          <h3>{question}</h3>
        </div>
        <div>{isActive ? "-" : "+"}</div>
      </div>

      {isActive && <div className={FaqStyles.accordionContent}>{answer}</div>}
    </div>
  );
};

export default Accordion;
