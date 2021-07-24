import { server } from "../config";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import BakeryDropList from "../components/BakeryDropList";

export default function Home({ data }) {
  const router = useRouter();

  const [cart, setCart] = useState([]);

  const cartQty = (product) => {
    return cart.find((cartItem) => cartItem.product.id === product.id)
      ? cart.find((cartItem) => cartItem.product.id === product.id).quantity
      : 0;
  };

  const handleAddToCart = (product) => {
    const itemInCartIdx = cart.findIndex((item) => {
      return item.product.id === product.id;
    });

    let cartMap;

    if (itemInCartIdx !== -1) {
      cartMap = cart.map((cartItem, i) => {
        return i === itemInCartIdx
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });
    } else {
      cartMap = [...cart, { product, quantity: 1 }];
    }

    return setCart([...cartMap]);
  };

  useEffect(() => {
    console.log("CART", cart);
    // cartTotal();
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
