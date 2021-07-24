import { server } from "../config";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import BakeryDropList from "../components/BakeryDropList";

export default function Home({ data }) {
  const router = useRouter();

  const [cart, setCart] = useState([]);

  const itemInCart = (product) => {
    let itemInCart = cart.find((item) => item.product.id === product.id);
    return itemInCart;
  };

  const cartQty = (product) => {
    return itemInCart(product) ? itemInCart(product).quantity : 0;
  };

  const handleAddToCart = (product) => {
    let cartMap;

    if (itemInCart(product)) {
      cartMap = cart.map((cartItem, i) => {
        return cartItem.product.id === itemInCart(product).product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });
    } else {
      cartMap = [...cart, { product, quantity: 1 }];
    }

    return setCart([...cartMap]);
  };

  const handleRemoveFromCart = (product) => {
    let cartMap;

    if (itemInCart(product)) {
      cartMap = cart.map((cartItem, i) => {
        if (cartItem.product.id === itemInCart(product).product.id) {
          if (cartItem.quantity <= 1) {
            return {
              ...cartItem,
              quantity: 0,
            };
          } else {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
        } else {
          return cartItem;
        }
      });
    } else {
      cartMap = [...cart];
    }

    const cleanCartMap = cartMap.filter((item) => item.quantity !== 0);

    return setCart([...cleanCartMap]);
  };

  useEffect(() => {
    console.log("CART", cart);
  }, [cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("going to checkout");

    const data = JSON.stringify(cart);
    const res = await fetch(`${server}/orders/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    });

    const url = await res.text();
    router.push(url);
  };

  return (
    <div>
      <BakeryDropList
        data={data}
        cart={cart}
        cartQty={cartQty}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <form onSubmit={handleSubmit}>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/bakerydrops`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
