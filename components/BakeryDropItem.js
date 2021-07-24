import articleStyles from "../styles/Article.module.css";
import { useContext } from "react";
import CartProvider from "../context/CartContext";

const BakeryDropItem = ({ nextDrop, cart, cartQty, handleAddToCart }) => {
  const products = nextDrop.products;

  return (
    <div>
      <h1>OUR NEXT DROP</h1>
      <h1>{nextDrop.dropDate}</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <p>
              {cartQty(product)}
              {""} in cart
            </p>
            <input
              type="submit"
              value="add"
              onClick={() => {
                handleAddToCart(product);
                // cartQty(product);
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
