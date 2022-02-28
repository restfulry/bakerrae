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

products.map((product)=> {
  console.log("BAKERYDROPITEM - Product Media Url: ", product.media.url)
  console.log("Product Image Server: ", server)
  console.log("Product Image SRC: ", server + product.media.url)
})

  return (
    <div className={BakeryDropListStyles.dropItems}>
      {products.map((product) => {
        return (
          <div key={product.id} className={BakeryDropListStyles.dropItem}>
            <div className={BakeryDropListStyles.mediaDetail}>
              {product.media ? (
                <Image
                  src={server + product.media.url}
                  width="200"
                  height="200"
                />
              ) : (
                <p>Product Image</p>
              )}
            </div>
            <div className={BakeryDropListStyles.productInfo}>
              <h3 className={BakeryDropListStyles.productName}>
                {product.name}
              </h3>
              <div className={BakeryDropListStyles.productDescription}>
                <h4>{product.description_quantity}</h4>
              </div>
              {/* <p>{product.description_short}</p> */}
              <div className={BakeryDropListStyles.productPrice}>
                <h4>${product.price}</h4>
              </div>
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
