import ShippingStyles from "../styles/ShippingStyles.module.css";

const Shipping = ({ shipping, shippingOptions, handleShipping }) => {
  return (
    <div className={ShippingStyles.wrapper}>
      {shippingOptions.map((option, idx) => (
        <button
          onClick={() => {
            handleShipping(option);
            console.log("CLICKED", option);
          }}
          className={shipping === option ? "btn-selected" : `btn`}
          key={idx}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Shipping;
