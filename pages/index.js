import { server } from "../config";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import BakeryDropList from "../components/BakeryDropList";
import DetailsSection from "../components/DetailsSection";
import InfoSection from "../components/InfoSection";
import Reviews from "../components/Reviews";
import HeroVideo from "../components/HeroVideo";
import ImageSection from "../components/ImageSection";
import FaqComponent from "../components/FaqComponent";
import Footer from "../components/Footer";

import { faqData } from "../utils/content";

export default function Home({ data }) {
  const router = useRouter();

  const [cart, setCart] = useState([]);
  const [shipping, setShipping] = useState("Free Pickup (Scarborough)");
  const [disabled, setDisabled] = useState(true);

  const shippingOptions = [
    "Free Pickup (Scarborough)",
    "Free Pickup (Toronto)",
    "Local Delivery ($10)",
    "GTA Delivery ($15)",
  ];

  const itemInCart = (product) => {
    let itemInCart = cart.find((item) => item.product.id === product.id);
    return itemInCart;
  };

  const cartQty = (product) => {
    return itemInCart(product) ? itemInCart(product).quantity : 0;
  };

  const checkReadyToCheckout = () => {
    if (cart.length > 0) {
      return setDisabled(false);
    } else {
      return setDisabled(true);
    }
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

  const handleShipping = (shippingOption) => {
    console.log("Shipping selected", shipping);
    return setShipping(shippingOption);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("going to checkout");

    const data = JSON.stringify({ cart, shipping: shipping });
    const res = await fetch(`${server}/orders/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    });

    const url = await res.text();
    router.push(url);
  };

  const today = new Date();

  const upcomingDrops = data.filter((drop) => new Date(drop.dropDate) > today);

  const nextDropDate = new Date(
    Math.min(
      ...upcomingDrops.map((e) => {
        return new Date(e.dropDate);
      })
    )
  );

  const nextDrop = data.filter((e) => {
    const d = new Date(e.dropDate);
    return d.getTime() == nextDropDate.getTime();
  })[0];

  useEffect(() => {
    console.log("CART: ", JSON.stringify(cart, null, 4));
    checkReadyToCheckout();
  }, [cart]);

  useEffect(() => {
    console.log("SHIPPING SELECTION: ", JSON.stringify(shipping, null, 4));
  }, [shipping]);

  return (
    <div>
      <InfoSection />
      <BakeryDropList
        nextDrop={nextDrop}
        cart={cart}
        cartQty={cartQty}
        server={server}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        shipping={shipping}
        shippingOptions={shippingOptions}
        handleShipping={handleShipping}
        handleSubmit={handleSubmit}
        disabled={disabled}
      />
      <DetailsSection nextDrop={nextDrop} />
      <HeroVideo />
      <Reviews />
      <ImageSection />
      <FaqComponent faqData={faqData} />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  // console.log('PROCESS ENV', process.env);

  console.log('SERVER NEXT PUBLIC API', process.env.NEXT_PUBLIC_API);
  console.log('USING SERVER: ', server);

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
