// Imports
import { NavLink, useNavigate } from "react-router-dom";
// Assets
const logo_dark = '/img/errric-logo_dark.svg';
const logo_white = '/img/errric-logo_white.svg';

function Nav({ isDark, isWhite }) {

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={isDark ? logo_dark : isWhite ? logo_white : logo_dark} alt="errric.me" />
      </div>
      <div className="menu">
      </div>
    	Navbar
    </nav>
  );
}

export default Nav;