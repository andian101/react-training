import { useContext } from "react";
import { CartContext } from "../../state";
import "./index.css";
import Button from "../../components/Button";

export const Cart = () => {
  const [state, dispatch] = useContext(CartContext);
  const { cartItems } = state;

  const remove = (id) => {
    return dispatch({
      type: "REMOVE",
      payload: {
        id,
      },
    });
  };

  return (
    <section className="cart">
      <h1>Cart</h1>
      <p>
        You have {cartItems.length} {cartItems.length === 1 ? "item" : "items"}{" "}
        in your Cart
      </p>
      {cartItems.length > 0 && (
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {cartItems.map(({ id, name, price }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                  <Button text="Remove" onClick={() => remove(id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Cart;
