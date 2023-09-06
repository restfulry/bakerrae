import AboutSection from "../components/AboutSection";

const about = () => {
  const sectionOne = {
    header: "A PASSION PROJECT",
    slug: "Friends and family know me for my love for coffee and cafe hopping around the city. The vision started there - open up my own cafe one day. I took the first steps towards this passion during the pandemic.",
    body1:
      "When not baking or brewing coffee, I am a full time covid test nurse.",
    body2:
      "It's not easy balancing the two, but you make time for the things you love.",
    body3: "Bakerrae provided me with the creative outlet I needed.",
    body4:
      "Through Bakerrae, I want to take you on this journey of re-connecting back to my roots as a Filipina, and introduce flavours that are familiar and new.",
  };

  return (
    <div>
      <AboutSection sectionOne={sectionOne} />
    </div>
  );
};

export default about;
