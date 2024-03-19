import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import '../Style/Signup.css';
import locationData from './LocationData'; // Import location data

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [locationId, setLocationId] = useState(""); // Initialize locationId state
  const [signupStatus, setSignupStatus] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      console.log('Request Payload:', {
        username,
        email,
        password,
        locationId // Log locationId
      });

      // Make a POST request to the backend server
      const response = await axios.post('http://localhost:3001/farms', {
        username,
        email,
        password,
        locationId // Send locationId instead of location
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
      setSignupStatus('An error occurred while signing up. Please try with another email.');
    }
  };

  const handleLocationChange = (e) => {
    const selectedLocationId = e.target.value;
    setLocationId(selectedLocationId);
    console.log('Selected location ID:', selectedLocationId); // Log the selected location ID
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <form onSubmit={handleSignup} className="signup-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <select
              value={locationId}
              onChange={handleLocationChange} // Update locationId state
              className="form-input"
            >
              <option value="">Select Location</option>
              {locationData.map(([id, name]) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group footSignhome">
            <Link to="/" className="home-icon">
              <HomeIcon />
            </Link>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </div>
          {signupStatus && (
            <p className={signupStatus.includes('error') ? 'error-message' : 'confirmation-message'}>
              {signupStatus}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
