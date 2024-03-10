import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavigationBar from './Component/NavigationBar';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Menu from './Component/Menu';
import Footer from './Component/Footer';
import Services from './Component/Services';
import Blog from './Component/Blog';
import Signup from './Component/Signup';

function App() {
  // Use the useLocation hook to get the current location
  const location = useLocation();

  // Check if the current route is the signup page
  const isSignupPage = location.pathname === '/signup';

  // Conditionally render NavigationBar and Footer
  const renderNavigationBar = isSignupPage ? null : <NavigationBar />;
  const renderFooter = isSignupPage ? null : <Footer />;

  return (
    <>
      {renderNavigationBar}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      {renderFooter}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
