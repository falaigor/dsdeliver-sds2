import './style.css';
import logoDS from '../../images/logo.svg';

function Navbar() {
  return (
    <nav className="main-navbar">
      <img src={logoDS} alt="DS Deliver" />
      <a href="/" className="logo-text">DS Deliver</a>
    </nav>
  );
}

export default Navbar;