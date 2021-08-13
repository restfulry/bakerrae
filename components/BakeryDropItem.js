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
    <div className="centerWhite">
      {products.map((product) => {
        return (
          <div key={product.id} className={BakeryDropListStyles.productItem}>
            {product.media ? (
              <Image
                src={server + product.media.url}
                width="150"
                height="250"
              />
            ) : (
              <p>Product Image</p>
            )}
            <div className={BakeryDropListStyles.productInfo}>
              <h3 className="title">{product.name}</h3>
              <h4 className="title">{product.description_quantity}</h4>
              {/* <p>{product.description_short}</p> */}
              <h4>${product.price}</h4>
            </div>
            <div className={BakeryDropListStyles.cartUtil}>
              <input
                type="submit"
                className={BakeryDropListStyles.btn}
                value="-"
                onClick={() => {
                  handleRemoveFromCart(product);
                }}
              />
              <div className={BakeryDropListStyles.cartQty}>
                <p>{cartQty(product)}</p>
              </div>
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
        );
      })}
    </div>
  );
};

export default BakeryDropItem;
