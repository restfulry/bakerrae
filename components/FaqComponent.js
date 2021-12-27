import Accordion from "./Accordion";
import Image from "next/image";

import linePic from '../public/line.svg';

import FaqStyles from "../styles/FaqStyles.module.css";

const FaqComponent = ({ faqData }) => {
  return (
    <div className="container">
      <div className={FaqStyles.faqWrapper}>
        <div className={FaqStyles.subHeader}>
          <h1>General FAQs</h1>
          <Image src={linePic} width="70" height="10" />
        </div>
        <div className={FaqStyles.faqAccordion} key="faqAccordion">
          {faqData.map(({ question, answer, idx }) => (
            <Accordion question={question} answer={answer} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
