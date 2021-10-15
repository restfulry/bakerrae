import ShippingStyles from "../styles/ShippingStyles.module.css";

const Shipping = ({ shipping, handlePickUp, handleShipping }) => {
  return (
    <div className="container">
      <div className={ShippingStyles.wrapper}>
        <div className="sectionWhite">
          <button
            onClick={handlePickUp}
            className={shipping === "pickup" ? "btn-selected" : "btn"}
          >
            Pick Up
          </button>
          <button
            onClick={handleShipping}
            className={shipping === "shipping" ? "btn-selected" : "btn"}
          >
            Delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
