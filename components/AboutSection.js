import Image from "next/image";

import AboutSectionStyles from "../styles/AboutSectionStyles.module.css";

const InfoSection = () => {
  return (
    <div className="container">
      <div className={AboutSectionStyles.wrapper}>
        {/* <div className={AboutSectionStyles.left}>
          <div className={AboutSectionStyles.image2}>
            <Image src={"/daycoldbrew.png"} width="300" height="450" />
          </div>
          <div>
            <p>Baking was her escape. </p>
          </div>
        </div> */}

        <div className={AboutSectionStyles.right}>
          <div className={AboutSectionStyles.text}>
            <h1>A nurse with a dream.</h1>
            <Image src={"/line.svg"} width="70" height="10" />
            <h3>
              Bakerrae was started by Rhea, a covid testing nurse, amidst the
              lockdowns.
            </h3>
          </div>
          <div className={AboutSectionStyles.image1}>
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
