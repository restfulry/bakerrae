import ShippingStyles from "../styles/ShippingStyles.module.css";

const Shipping = ({ shipping, handlePickUp, handleShipping }) => {
  return (
    <div className="centerWhite">
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
  );
};

export default Shipping;
