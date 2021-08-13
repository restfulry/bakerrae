import React from "react";

const CheckoutButton = ({ handleSubmit, disabled }) => {
  return (
    <div className="centerWhite">
      <div className="sectionWhite">
        <form onSubmit={handleSubmit}>
          <button type="submit" disabled={disabled}>
            PLACE ORDER
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutButton;
