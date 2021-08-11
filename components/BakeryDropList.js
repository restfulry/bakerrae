import BakeryDropItem from "./BakeryDropItem";
import BakeryDropListStyles from "../styles/BakeryDropListStyles.module.css";

const BakeryDropList = ({
  nextDrop,
  cart,
  cartQty,
  server,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  return (
    <div className="container">
      <h1>OUR NEXT DROP</h1>
      <h1>{nextDrop.dropDate}</h1>
      <BakeryDropItem
        nextDrop={nextDrop}
        cartQty={cartQty}
        server={server}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default BakeryDropList;
