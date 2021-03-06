import Image from "next/image";

import AboutSectionStyles from "../styles/AboutSectionStyles.module.css";

const AboutSection = ({ sectionOne }) => {
  return (
    <div className="container">
      <div className={AboutSectionStyles.wrapper}>
        <div className={AboutSectionStyles.left}>
          <div className={AboutSectionStyles.image2}>
            <Image src={"/rae-nurse.jpg"} width="432" height="540" />
          </div>
          <div className={AboutSectionStyles.textWrapper}></div>
          <div className={AboutSectionStyles.text}>
            <p>{sectionOne.body1}</p>
          </div>
          <div className={AboutSectionStyles.text}>
            <p>{sectionOne.body2}</p>
          </div>
          <div className={AboutSectionStyles.text}>
            <p>{sectionOne.body3}</p>
          </div>
          <div className={AboutSectionStyles.text}>
            <p>{sectionOne.body4}</p>
          </div>
        </div>

        <div className={AboutSectionStyles.right}>
          <div className={AboutSectionStyles.text}>
            <div className={AboutSectionStyles.header}>
              <h1>{sectionOne.header}</h1>
              <Image src={"/line.svg"} width="70" height="10" />
            </div>
            <p>{sectionOne.slug}</p>
          </div>
          <div className={AboutSectionStyles.image1}>
            <Image src={"/rae-torch-min.JPG"} width="378" height="504" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
