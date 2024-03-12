// Signup.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import '../Style/Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupStatus, setSignupStatus] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend server
      const response = await axios.post('http://localhost:3000/farms', {
        username,
        email,
        password,
      });

      console.log(response.data); // Log the server response

      // Display confirmation or error message
      if (response.data.message) {
        setSignupStatus(response.data.message);
      } else {
        setSignupStatus('ACCOUNT CREATED SUCCESSFULLY');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      // Display error message to the user
      setSignupStatus('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="signup">
      <div className="class1">
        <form onSubmit={handleSignup}>
          <div className="class2">
            <label htmlFor="username" className="cls">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="cls bx"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="class5">
            {/* Link to the home location */}
            <Link to="/" className="homeIcon">
              <HomeIcon />
            </Link>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
            {/* Display confirmation or error message */}
            {signupStatus && <p className={signupStatus.includes('error') ? 'error-message' : 'confirmation-message'}>{signupStatus}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
