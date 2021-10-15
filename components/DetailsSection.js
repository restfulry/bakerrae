import Image from "next/image";
import DetailsSectionStyles from "../styles/DetailsSectionStyles.module.css";

const DetailsSection = ({ nextDrop }) => {
  return (
    <div className="container">
      <div className={DetailsSectionStyles.wrapper}>
        <div className={DetailsSectionStyles.header}>
          <h1>How it works</h1>
          <Image src={"/line.svg"} width="70" height="10" />
        </div>
        <div className={DetailsSectionStyles.reviews}>
          <div className={DetailsSectionStyles.textWrapper}>
            <h4>
              Bakerrae is an online bakery with popups in the GTA. Our baked
              goods are available exclusively online. We rotate our flavours as
              we become inspired.
            </h4>
          </div>
          <div className={DetailsSectionStyles.textWrapper}>
            <h4>
              1. Place your pre-order online up to 48hrs before the next drop.
            </h4>
            <h4>
              2. Select whether you would like pick-up (free) or delivery ($10
              flat)*.
            </h4>
            <h4>
              3. Keep your baked goods cool on the way home. To reheat,
              microwave for a few seconds, or bake at 350 for a few minutes.
            </h4>
            <h4>
              We have limited space each drop. If it sells out, please follow
              our Instagram and sign up to our email list to hear when the next
              drop is.
            </h4>
          </div>
          <div className={DetailsSectionStyles.textWrapper}>
            <h4>The next drop is on {nextDrop.dropDate}</h4>
          </div>
          <div className={DetailsSectionStyles.textWrapper}>
            <h3>Delivery Details</h3>
            <h4>We deliver to Downtown, North York, Scarborough & Markham</h4>
          </div>
          <div className={DetailsSectionStyles.textWrapper}>
            <h3>Pickup Points</h3>
            <h4>Pickups are from 11am - 12pm on the day of the drop. </h4>
            <h4>
              Pickups are available in Scarborough and Downtown (Union Station){" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
