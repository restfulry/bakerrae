import Image from "next/image";
import ReviewsStyles from "../styles/ReviewsStyles.module.css";

const Reviews = () => {
  return (
    <div className="container">
      <div className={ReviewsStyles.header}>
        <h1>What people are saying</h1>
        <Image src={"/line.svg"} width="70" height="10" />
      </div>
      <div className="sectionOrange">
        <div className={ReviewsStyles.quote}>
          <Image src={"/quote1.png"} width="200" height="200" />
        </div>
        <div className={ReviewsStyles.quote}>
          <Image
            src={"/20200927_A7S04418_004-min.png"}
            width="200"
            height="200"
          />
        </div>
        <div className={ReviewsStyles.quote}>
          <Image
            src={"/20200927_A7S04418_004-min.png"}
            width="200"
            height="200"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
