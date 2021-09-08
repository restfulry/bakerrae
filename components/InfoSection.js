import Image from "next/image";

import InfoSectionStyles from "../styles/InfoSectionStyles.module.css";

const InfoSection = () => {
  return (
    <div className="container">
      <div className="sectionOrange">
        <div className={InfoSectionStyles.left}>
          <div className={InfoSectionStyles.image1}>
            <Image
              src={"/20200927_A7S04418_004-min.jpg"}
              width="300"
              height="400"
            />
          </div>
        </div>
        <div className={InfoSectionStyles.right}>
          <div className={InfoSectionStyles.text}>
            <h1>Hand made baked goods & cold brew concentrate.</h1>
            <h3>Bakery drops every two weeks.</h3>
          </div>
          <div className={InfoSectionStyles.circle}>

            <Image src={"/blurredcircle_orange.png"} width="500" height="500" />
          </div>
          <div className={InfoSectionStyles.image2}>
            <Image
              src={"/20200927_A7S04418_004-min.jpg"}
              width="300"
              height="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
