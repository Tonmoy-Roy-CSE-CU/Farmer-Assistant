import { Link } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import "../Style/Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="class1">
        <form>
          <div className="class2">
            <label htmlFor="name" className="cls">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="cls bx"
            />
          </div>
          <div className="class3">
            <label htmlFor="email" className="cls">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="cls bx"
            />
          </div>
          <div className="class4">
            <label htmlFor="password" className="cls">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="cls bx"
            />
          </div>
          <div className="class5">
            {/* Link to the home location */}
            <Link to="/" className='homeIcon'>
              <HomeIcon />
            </Link>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
