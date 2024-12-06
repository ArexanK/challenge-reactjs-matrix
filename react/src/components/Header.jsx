
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="header-logo">
        MyStore
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
