import Image from "next/image";

import InfoSectionStyles from "../styles/InfoSectionStyles.module.css";

const InfoSection = () => {
  return (
    <div className="container">
      <div className={InfoSectionStyles.infowrapper}>
        <div className={InfoSectionStyles.infoleft}>
          <div className={InfoSectionStyles.image2}>
            <Image src={"/ubepandanturon-min.JPG"} width="333" height="445" />
          </div>
          <div className={InfoSectionStyles.text}>
            <h1>A nurse with a passion.</h1>
            <h3>
              Bakerrae was started by Rhea, a covid testing nurse, amidst the
              lockdowns.
            </h3>
          </div>
        </div>

        <div className={InfoSectionStyles.right}>
          <div className={InfoSectionStyles.text}>
            <h1>Filipino-inspired baked goods & cold brew concentrate.</h1>
            <h3>Woman-run. Small-batch. Asian flavours.</h3>
          </div>
          <div className={InfoSectionStyles.image1}>
            <Image src={"/cinnamonbuns-min.JPG"} width="333" height="445" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
