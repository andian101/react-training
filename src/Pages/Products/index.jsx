import Product from "../../components/Product";
import data from "../../data/data";
import "./index.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../state";

export const Products = () => {
  const [state, dispatch] = useContext(CartContext);
  const addToCart = (product) => {
    return dispatch({
      type: "ADD",
      payload: product,
    });
  };

  const [prods, setProds] = useState([]);

  useEffect(() => {
    const fetchProds = async () => {
      const p = await fetch(
        "https://stoplight.io/mocks/shawbrook/react-training/12362290/products"
      );
      const z = await p.json();
      setProds(z.data);
    };
    fetchProds();
  }, []);

  const prodData = prods; // or can be prods

  return (
    <section className="products">
      {prodData.map((el) => (
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
