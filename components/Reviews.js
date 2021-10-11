import Image from "next/image";
import ReviewsStyles from "../styles/ReviewsStyles.module.css";

const Reviews = () => {
  return (
    <div className="container">
      <div className={ReviewsStyles.wrapper}>
        <div className={ReviewsStyles.header}>
          <h1>What people are saying</h1>
          <Image src={"/line.svg"} width="70" height="10" />
        </div>
        <div className={ReviewsStyles.reviews}>
          <div className={ReviewsStyles.quote}>
            <h4 className={ReviewsStyles.quoteItem}>
              "My brother just had some and said it's the best homemade frosting
              he's ever tasted... and he's picky hahah."
            </h4>
            <div className={ReviewsStyles.quoteItem}>
              {/* <Image src={"/quote1.png"} width="400" height="400" /> */}
            </div>
          </div>
          <div className={ReviewsStyles.quote}>
            <h4>
              "The donuts were amazing! The dough was surprisingly light and the
              creams had the perfect amount of sweetness."
            </h4>
            {/* <Image src={"/quote2.png"} width="400" height="400" /> */}
          </div>
          <div className={ReviewsStyles.quote}>
            <h4>
              "SO GOOD! My mom doesn't usually like ube, but she almost ate the
              entire doughnut. I had to stop her so I can try some!!!"
            </h4>
            {/* <Image src={"/quote3.png"} width="400" height="400" /> */}
          </div>
          {/* <div className={ReviewsStyles.background}>
          <Image src={"/blurredcircle_orange.png"} width="4000" height="4000" />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
