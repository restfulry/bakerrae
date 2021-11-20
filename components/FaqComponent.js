import Accordion from "./Accordion";

import FaqStyles from "../styles/FaqStyles.module.css";

const FaqComponent = ({ faqData }) => {
  return (
    <div className="container">
      <div className={FaqStyles.faqWrapper}>
        <div className="faq-category">
          <h1 className={FaqStyles.subHeader}>General FAQs</h1>
        </div>
        <div className={FaqStyles.faqAccordion}>
          {faqData.map(({ question, answer }) => (
            <Accordion question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
