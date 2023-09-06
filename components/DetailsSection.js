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
              Bakerrae is a bakery based in Toronto. Our baked goods are available online, or limited walk-in at our bakery. Our flavours rotate regularly, so check back often!
            </h4>
          </div>
          <div className={DetailsSectionStyles.textWrapper}>
            <h4>
              1. Place your pre-order online by the Thursday at 11:59pm before the next drop.
            </h4>
            <br></br>
            <h4>
              2. Select whether you would like pick-up (free) or delivery ($10-15)*.
            </h4>
            <br></br>
            <h4>
              3. Keep your baked goods cool on the way home. To reheat,
              microwave for a few seconds, or bake at 350 for a few minutes.
            </h4>
            <br></br>
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
            <h3>Local Delivery $10</h3>
            <h4>Downtown Toronto, North York, Scarborough</h4>
          </div>
          <div className={DetailsSectionStyles.textWrapper}>
            <h3>GTA Delivery $15</h3>
            <h4>Mississauga, Markham, Etobicoke</h4>
          </div>
          <div className={DetailsSectionStyles.textWrapper}>
            <h3>Pickup Details</h3>
            <h4>Pickups are during our bakery opening hours on the day of the drop at:</h4>
            <h4>
              Bakerrae: 149 MAIN ST. TORONTO, ON, M4E 2V9
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
