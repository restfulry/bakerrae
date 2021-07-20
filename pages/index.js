import { server } from "../config";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

import BakeryDropList from "../components/BakeryDropList";

export default function Home({ data }) {
  const [orderDetails, setOrderDetails] = useState({});

  const router = useRouter();

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
      <BakeryDropList data={data} />
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
