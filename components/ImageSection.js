import Image from "next/image";
import ImageSectionStyles from "../styles/ImageSectionStyles.module.css";

const ImageSection = () => {
  return (
    <div className="container">
      <div className={ImageSectionStyles.imgWrapper}>
        <div className={ImageSectionStyles.img}>
          <Image src={"/donut-vday-min-square.jpg"} width="500" height="500" />
        </div>
        <div className={ImageSectionStyles.img}>
          <Image src={"/rheastandmixer-square.JPG"} width="500" height="500" />
        </div>
        <div className={ImageSectionStyles.img}>
          <Image src={"/trio-topdown-min.jpg"} width="500" height="500" />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
