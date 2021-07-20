import { createContext, useState, useEffect } from "react";

const CartContext = createContext(0);

export const CartProvider = ({ children }) => {
  const [orderQty, setOrderQty] = useState(0);
  const [itemQty, setItemQty] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    cartTotal();
  }, [cart]);

  const cartTotal = ({ products }) => {
    console.log("CART", cart);

    const productTotals = products.map((product) => {
      let qty = cart.filter((cartItem) => cartItem.id === product.id).length;
      console.log(product.name, ": ", qty);
    });

    console.log("itemQty", itemQty);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={[orderQty, addToCart, cartTotal]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
