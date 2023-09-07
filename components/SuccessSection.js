import Image from "next/image";
import Link from "next/link";

import SuccessSectionStyles from "../styles/SuccessSectionStyles.module.css";

const SuccessSection = ({ sectionOne }) => {
  return (
    <div className="container">
      <div className={SuccessSectionStyles.wrapper}>
        <div className={SuccessSectionStyles.left}>
          <div className={SuccessSectionStyles.textWrapper}></div>

          <div className={SuccessSectionStyles.text}>
            <p>{sectionOne.body2}</p>
          </div>
          <div className={SuccessSectionStyles.text}>
            <p>{sectionOne.body3}</p>
          </div>
          <div className={SuccessSectionStyles.text}>
            <p>{sectionOne.body4}</p>
          </div>
        </div>

        <div className={SuccessSectionStyles.right}>
          <div className={SuccessSectionStyles.text}>
            <div className={SuccessSectionStyles.header}>
              <h1>{sectionOne.header}</h1>
              <Image src={"/line.svg"} width="70" height="10" />
            </div>
            <p>{sectionOne.slug}</p>
          <Link href="https://www.instagram.com/bakerraexcafe/">
            <a target="_blank">@bakerraexcafe</a>
          </Link>
            <p>{sectionOne.body1}</p>
          </div>
          <div className={SuccessSectionStyles.image1}>
            <Image src={"/rheastandmixer.jpg"} width="378" height="504" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
