import Product from "../../components/Product";
import data from "../../data/data";
import "./index.css";
import { useContext } from "react";
import { CartContext } from "../../state";

export const Products = () => {
  const [state, dispatch] = useContext(CartContext);
  const addToCart = (product) => {
    return dispatch({
      type: "ADD",
      payload: product,
    });
  };

  return (
    <section className="products">
      {data.map((el) => (
        <Product
          id={el.id}
          image={el.image}
          title={el.name}
          price={`£${el.price}`}
          onClick={() => addToCart(el)}
        />
      ))}
    </section>
  );
};

export default Products;
