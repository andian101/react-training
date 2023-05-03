import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import "./index.css";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="content">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
