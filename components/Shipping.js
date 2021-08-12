const Shipping = ({ shipping, handlePickUp, handleShipping }) => {
  return (
    <div>
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
  );
};

export default Shipping;
