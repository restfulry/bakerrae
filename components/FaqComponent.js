import Accordion from "./Accordion";
import Image from "next/image";

import FaqStyles from "../styles/FaqStyles.module.css";

const FaqComponent = ({ faqData }) => {
  return (
    <div className="container">
      <div className={FaqStyles.faqWrapper}>
        <div className={FaqStyles.subHeader} key="subHeader">
          <h1>General FAQs</h1>
          <Image src={"/line.svg"} width="70" height="10" />
        </div>
        <div className={FaqStyles.faqAccordion} key="faqAccordion">
          {faqData.map(({ question, answer}, idx) => (
            <div key={idx}>
              <Accordion question={question} answer={answer}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;