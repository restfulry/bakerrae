import { server } from "../config";
import Head from "next/head";
import Image from "next/image";
import BakeryDropList from "../components/BakeryDropList";

export default function Home({ data }) {
  return (
    <div>
      <BakeryDropList data={data} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/bakerydrops`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
