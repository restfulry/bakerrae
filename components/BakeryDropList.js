import Image from "next/image";

import BakeryDropItem from "./BakeryDropItem";
import BakeryDropListStyles from "../styles/BakeryDropListStyles.module.css";

const BakeryDropList = ({
  nextDrop,
  cartQty,
  server,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  return (
    <div className="container">
      <div className={BakeryDropListStyles.wrapper}>
        <div className={BakeryDropListStyles.header}>
          <h1>OUR NEXT DROP</h1>
          <h1>{nextDrop.dropDate}</h1>
          <Image src={"/line.svg"} width="70" height="10" />
        </div>
        <BakeryDropItem
          nextDrop={nextDrop}
          cartQty={cartQty}
          server={server}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </div>
  );
};

export default BakeryDropList;
