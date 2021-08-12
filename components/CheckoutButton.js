import React from "react";

const CheckoutButton = ({ handleSubmit, disabled }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit" disabled={disabled}>
          Checkout
        </button>
      </form>
    </div>
  );
};

export default CheckoutButton;
