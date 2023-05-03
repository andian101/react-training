import { Button } from "./Button";

export const Product = () => {
  return (
    <div>
      <section />
      <div>
        <img src="#" />
      </div>
      <div>
        <h1>Title</h1>
        <p>Description</p>
        <p>£0.00</p>
        <Button onClick={() => console.log("Added")} text={"Add to cart"} />
      </div>
      <section />
    </div>
  );
};

export default Product;
