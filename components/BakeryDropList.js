import Image from "next/image";

import BakeryDropItem from "./BakeryDropItem";
import Shipping from "../components/Shipping";
import CheckoutButton from "../components/CheckoutButton";

import BakeryDropListStyles from "../styles/BakeryDropListStyles.module.css";

const BakeryDropList = ({
  nextDrop,
  cartQty,
  server,
  handleAddToCart,
  handleRemoveFromCart,
  shipping,
  shippingOptions,
  handleShipping,
  handleSubmit,
  disabled,
}) => {

console.log("BakeryDropList Server: ", server);
if({nextDrop}) {

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
      <Shipping
        shipping={shipping}
        shippingOptions={shippingOptions}
        handleShipping={handleShipping}
      />
      <CheckoutButton handleSubmit={handleSubmit} disabled={disabled} />
    </div>
  ); 
} else {
  return (
    <div className="container">
      <div className={BakeryDropListStyles.wrapper}>
        <div className={BakeryDropListStyles.header}>
          <h1>FOLLOW OUR INSTAGRAM FOR THE NEXT DROP</h1>
          <h2>
            <a target="_blank" href="https://www.instagram.com/bakerraexcafe/">@BAKERRAEXCAFE</a>  
          </h2>
        </div>
      </div>
    </div>
  )
}
};

export default BakeryDropList;
