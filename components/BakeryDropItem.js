import BakeryDropListStyles from "../styles/BakeryDropListStyles.module.css";
import Image from "next/image";

const BakeryDropItem = ({
  nextDrop,
  cartQty,
  server,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const products = nextDrop.products;

  return (
    <div className={BakeryDropListStyles.productsSection}>
      {products.map((product) => {
        return (
          <div key={product.id} className={BakeryDropListStyles.productItem}>
            {product.media ? (
              <Image
                src={server + product.media.url}
                width="350"
                height="250"
              />
            ) : (
              <p>No media</p>
            )}
            <h3>{product.name}</h3>
            {/* <p>{product.description_short}</p> */}
            <h4>${product.price}</h4>
            <div className={BakeryDropListStyles.cartUtil}>
              <p>
                {cartQty(product)}
                {""} in cart
              </p>
              <div>
                <input
                  type="submit"
                  className={BakeryDropListStyles.btn}
                  value="-"
                  onClick={() => {
                    handleRemoveFromCart(product);
                  }}
                />
                <input
                  type="submit"
                  className={BakeryDropListStyles.btn}
                  value="+"
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
      <h3></h3>
    </div>
  );
};

export default BakeryDropItem;
