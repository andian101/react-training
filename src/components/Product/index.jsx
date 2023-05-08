import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./index.css";

export const Product = ({ title, description, price, onClick, id, image }) => {
  return (
    <div key={id} className="product">
      <img src={image} />
      <div className="product__content">
        <h3>{title}</h3>
        <p>
          <b>{price}</b>
        </p>
        <div className="product__buttons">
          <Button onClick={onClick} text={"Add to cart"} />
          <Link to={`/product/${id}`}>View Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
