const Accordion = ({ faqData }) => {
  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title">
          <div>{faqData.question}</div>
          <div>+</div>
        </div>
        <div className="accordion-content">{faqData.answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
