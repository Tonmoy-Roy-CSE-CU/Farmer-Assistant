import { Link } from "react-router-dom";
import logo from "../images/farmer logo.png";
import "../Style/Navbar.css";

const NavigationBar = () => {

  return (
    <nav className="navbar">
      <div className="nav logo">
        <img src={logo} alt="Logo" width="90px" />
      </div>
      <div className="nav link">
        <Link to="/" className="lst">
          Home
        </Link>
        <Link to="/menu" className="lst">
          Menu
        </Link>
        <Link to="/services" className="lst">
          Services
        </Link>
        <Link to="/blog" className="lst">
          Blog
        </Link>
        <Link to="/about" className="lst">
          About
        </Link>
        <Link to="/contact" className="lst">
          Contact
        </Link>
        <Link to="/signup" className="SignupBtn">
          Sign up
        </Link>
        
      </div>
    </nav>
  );
};

export default NavigationBar;