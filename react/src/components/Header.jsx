import { Link } from "react-router-dom";
import logo from "../assets/clothing store logo.jpg";

const Header = () => {
  return (
    <header>
      <Link to="/" className="header-logo">
        <img src={logo} alt="Clothing Store Logo" width="100px" height="50px" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
