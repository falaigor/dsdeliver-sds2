import './style.css';
import logoDS from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="main-navbar">
      <img src={logoDS} alt="DS Deliver" />
      <Link to="/" className="logo-text">DS Deliver</Link>
    </nav>
  );
}

export default Navbar;