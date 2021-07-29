import articleStyles from "../styles/Article.module.css";
import { useContext } from "react";
import CartProvider from "../context/CartContext";
import Image from "next/image";

const BakeryDropItem = ({
  nextDrop,
  cart,
  cartQty,
  server,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const products = nextDrop.products;

  return (
    <div>
      <h1>OUR NEXT DROP</h1>
      <h1>{nextDrop.dropDate}</h1>
      {products.map((product) => {
        console.log(
          "product MEDIA",
          JSON.stringify(product.media ? product.media.url : "null", null, 4)
        );
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            {product.media ? (
              <Image
                src={server + product.media.url}
                width="100"
                height="100"
              />
            ) : (
              <p>No media</p>
            )}
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
        );
      })}
      <h3></h3>
    </div>
  );
};

export default BakeryDropItem;
