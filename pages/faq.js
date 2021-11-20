import FaqComponent from "../components/FaqComponent";

import { faqData } from "../utils/content";
import FaqStyles from "../styles/FaqStyles.module.css";

const faq = () => {
  return (
    <div>
      {/* <h1 className={FaqStyles.header}>FAQ</h1> */}
      <FaqComponent faqData={faqData} />
    </div>
  );
};

export default faq;
