import CheckoutButtonStyles from "../styles/CheckoutButtonStyles.module.css";

const CheckoutButton = ({ handleSubmit, disabled }) => {
  return (
    <div className="container">
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
    </div>
  );
};

export default CheckoutButton;
