import { useState } from "react";
import Button from "../../components/Button";
import "./index.css";

export const Contact = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(text);
  };
  return (
    <section className="contact">
      <h1>Contact Us</h1>

      <form>
        <div>
          <label htmlFor="messageTitle">Message Title</label>
          <input
            type="text"
            id="messageTitle"
            name="messageTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="messageBody">Message Body</label>

          <textarea
            id="messageBody"
            name="messageBody"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <Button onClick={handleSubmit} text="Send message" />
      </form>
    </section>
  );
};

export default Contact;
