import AboutSection from "../components/AboutSection";
import TextImageSection from "../components/TextImageSection";

const about = () => {
  const sectionOne = {
    header: "A PASSION PROJECT",
    slug: "Friends and family know me for my love for coffee and cafe hopping around the city. The vision started there - open up my own cafe one day. I took the first steps towards this passion during the pandemic.",
    body: "",
    body1:
      "When not baking or brewing coffee, I am a full time covid test nurse.",
    body2:
      "It's not easy balancing the two, but you make time for the things you love.",
    body3: "Bakerrae provided me with the creative outlet I needed.",
    body4:
      "Through Bakerrae, I want to take you on this journey of re-connecting back to my roots as a Filipina, and introduce flavours that are familiar and new.",
  };

  const sectionTwo = {
    imgSrc: "/20200927_A7S04418_004-min.jpg",
    imgWidth: 300,
    imgHeight: 400,
    body1:
      "When I'm not baking or brewing coffee, I'm a full time covid test nurse.",
    body2:
      "It's not east balancing everything, but you make time for the things you love.",
    body3: "Bakerrae provided me with the creative escape I needed.",
    body4:
      "Through Bakerrae, I want to take you on this journey of re-connecting back to my roots as a Filipina, and introduce flavours that are familiar and new.",
  };

  return (
    <div>
      <AboutSection sectionOne={sectionOne} />
      {/* <TextImageSection sectionTwo={sectionTwo} /> */}
    </div>
  );
};

export default about;
