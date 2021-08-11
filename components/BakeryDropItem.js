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
    <div>
      {products.map((product) => {
        return (
          <div key={product.id} className={BakeryDropListStyles.product}>
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
            <h4>${product.price}</h4>
            <div className="cartUtil">
              <p>
                {cartQty(product)}
                {""} in cart
              </p>
              <input
                type="submit"
                value="-"
                onClick={() => {
                  handleRemoveFromCart(product);
                }}
              />
              <input
                type="submit"
                value="+"
                onClick={() => {
                  handleAddToCart(product);
                }}
              />
            </div>
          </div>
        );
      })}
      <h3></h3>
    </div>
  );
};

export default BakeryDropItem;
