// import { createContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [orderQty, setOrderQty] = useState(0);
//   const [itemQty, setItemQty] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     console.log("CART", cart);
//     // cartTotal();
//   }, [cart]);

//   const cartTotal = (products) => {
//     console.log("CART", cart);
//     products.map((product) => {
//       let qty = cart.filter((cartItem) => cartItem.id === product.id).length;
//       console.log(product.name, ": ", qty);
//     });

//     console.log("itemQty", itemQty);
//   };

//   const addToCart = (product) => {
//     const itemInCartIdx = cart.findIndex((item) => item.id === product.id);

//     let cart;

//     if (itemInCartIdx !== -1) {
//       console.log("in cart");
//       cart = cart.map((cartItem, i) => {
//         i === itemInCartIdx ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem;
//       });
//     } else {
//       cart = [...cart, product];
//     }

//     setCart({ cart });
//   };

//   return (
//     <CartContext.Provider value={[orderQty, addToCart]}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;
