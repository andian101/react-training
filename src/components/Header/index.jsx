import { Link } from "react-router-dom";
import "./index.css";

export const Header = () => {
  return (
    <header>
      <section className="content">
        <section>
          <img
            src="https://f.hubspotusercontent40.net/hubfs/14563840/AND%20Logos/AND%20Digital_LOGO_SM_icon.png"
            alt="Logo"
            className="logo"
          />
        </section>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
