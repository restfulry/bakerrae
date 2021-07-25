const Shipping = ({ shipping, handleShipping }) => {
  return (
    <div>
      <button
        onClick={handleShipping}
        disabled={shipping === "pickup" ? true : false}
      >
        Pick Up
      </button>
      <button
        onClick={handleShipping}
        disabled={shipping === "shipping" ? true : false}
      >
        Delivery
      </button>
    </div>
  );
};

export default Shipping;
