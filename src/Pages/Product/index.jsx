import Button from "../../components/Button";
import data from "../../data/data";
import { useParams } from "react-router-dom";
import "./index.css";

export const Product = () => {
  const { id } = useParams();
  const productData = data.find((el) => el.id === id);

  if (!productData) return <div>No data found</div>;
  const { name, description, image, price } = productData;

  return (
    <section className="product-page">
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>
          <b>£{price}</b>
        </p>
        <Button onClick={() => console.log("Add to cart")} text="Add to cart" />
      </div>
    </section>
  );
};

export default Product;
