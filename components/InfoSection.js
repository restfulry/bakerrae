import Image from "next/image";

import InfoSectionStyles from "../styles/InfoSectionStyles.module.css";

const InfoSection = () => {
  return (
    <div className="container">
      <div className={InfoSectionStyles.wrapper}>
        <div className={InfoSectionStyles.left}>
          <div className={InfoSectionStyles.image2}>
            <Image src={"/cinnamonbuns.jpg"} width="333" height="445" />
          </div>
          <div>
            <h3>Pre-order for the next drop.</h3>
          </div>
        </div>

        <div className={InfoSectionStyles.right}>
          <div className={InfoSectionStyles.text}>
            <h1>Filipino-inspired baked goods & cold brew concentrate.</h1>
            <h3>Woman-run. Small-batch. Asian flavours.</h3>
          </div>
          <div className={InfoSectionStyles.image1}>
            <Image src={"/ooze.jpg"} width="300" height="400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
