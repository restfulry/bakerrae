import FaqComponent from "../components/FaqComponent";

import { faqData } from "../utils/content";
import FaqStyles from "../styles/FaqStyles.module.css";

const faq = () => {
  return (
    <div>
      <FaqComponent faqData={faqData} />
    </div>
  );
};

export default faq;
