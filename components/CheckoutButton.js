import CheckoutButtonStyles from "../styles/CheckoutButtonStyles.module.css";

const CheckoutButton = ({ handleSubmit, disabled }) => {
  return (
    <div className={CheckoutButtonStyles.wrapper}>
      <div>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            disabled={disabled}
            className={CheckoutButtonStyles.checkoutButton}
          >
            PLACE ORDER
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutButton;
