import Image from "next/image";

import TextImageSectionStyles from "../styles/TextImageSectionStyles.module.css";

const TextImageSection = ({ sectionTwo }) => {
  return (
    <div className="container">
      <div className={TextImageSectionStyles.wrapper}>
        <div className={TextImageSectionStyles.left}>
          <div className={TextImageSectionStyles.textWrapper}>
            <div className={TextImageSectionStyles.text}>
              <p>{sectionTwo.body1}</p>
            </div>
            <div className={TextImageSectionStyles.text}>
              <p>{sectionTwo.body2}</p>
            </div>
            <div className={TextImageSectionStyles.text}>
              <p>{sectionTwo.body3}</p>
            </div>
            <div className={TextImageSectionStyles.text}>
              <p>{sectionTwo.body4}</p>
            </div>
          </div>
        </div>

        <div className={TextImageSectionStyles.right}>
          <div className={TextImageSectionStyles.image1}>
            <Image
              src={sectionTwo.imgSrc}
              width={sectionTwo.imgWidth}
              height={sectionTwo.imgHeight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImageSection;
