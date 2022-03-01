import SuccessSection from "../../components/SuccessSection";


const success = () => {
  const sectionOne = {
    header: "Thank you for your order!",
    slug: "I'm so excited to share my love of baking with you. If you have any questions, please reach out to us on Instagram: ",
    body1: "We'll be in touch shortly to confirm any details.",
    body2: "",
    body3: "",
    body4: "",
  };

  return (
    <div>
      <SuccessSection sectionOne={sectionOne} />
    </div>
  );
};

export default success;
   