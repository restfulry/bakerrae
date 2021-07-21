import { server } from "../config";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import BakeryDropList from "../components/BakeryDropList";

export default function Home({ data }) {
  const [orderDetails, setOrderDetails] = useState({});
  const [cart, setCart] = useState([]);

  const router = useRouter();

  const handleAddToCart = (product) => {
    const itemInCartIdx = cart.findIndex((item) => {
      // console.log("itemInCartIdx", item.product.id);
      return item.product.id === product.id;
    });

    let cartMap;

    if (itemInCartIdx !== -1) {
      cartMap = cart.map((cartItem, i) => {
        return i === itemInCartIdx
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem;
      });
      console.log("in cart", cartMap);
    } else {
      cartMap = [...cart, { product, qty: 1 }];
      console.log("NOT in cart");
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

    const res = await fetch(`${server}/orders/checkout`, {
      method: "POST",
      body: JSON.stringify(orderDetails),
    });

    const url = await res.text();
    router.push(url);
  };

  return (
    <div>
      <BakeryDropList
        data={data}
        cart={cart}
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
