import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

const BakeryDropItem = ({ nextDrop }) => {
  console.log("nextDROP", nextDrop.products);

  const products = nextDrop.products;

  return (
    <div>
      <h1>OUR NEXT DROP</h1>
      <h1>{nextDrop.dropDate}</h1>
      {products.map((product) => {
        console.log(product.name);
        return <h3 key={product.id}>{product.name}</h3>;
      })}
    </div>
  );
};

export default BakeryDropItem;
